namespace Quality_of_Life_changer.Implementation.Handlers.CommandHandlers;

using Contracts.Commands;
using Contracts.Exceptions;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.ObjectModel;
using System.Web.Helpers;

public class AddUserCommandHandler : BaseCommandHandler, IRequestHandler<AddUserCommand, string>
{
    private readonly QolcDbContext _context;

    public AddUserCommandHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<string> Handle(AddUserCommand request,
        CancellationToken cancellationToken)
    {
        await CheckingUserExistenceByEmail(request.Email);

        await CheckingUserExistenceByName(request.UserName);

        var userId = Guid.NewGuid().ToString();

        _context.Set<User>().Add(new User
        {
            Email = request.Email,
            Password = HashPassword(request.Password),
            Id = userId,
            UserName = request.UserName,
            Calendars = new Collection<Calendar>()
        });

        await _context.SaveChangesAsync(cancellationToken);

        return userId;
    }

    private static string HashPassword(string password)
    {
        return Crypto.HashPassword(password);
    }

    public async Task CheckingUserExistenceByEmail(string email)
    {
        var user = await _context.Set<User>().FirstOrDefaultAsync(x => x.Email == email);
        if (user != null)
        {
            throw new BadRequestException("user already exist with this email");
        }
    }

    public async Task CheckingUserExistenceByName(string name)
    {
        var user = await _context.Set<User>().FirstOrDefaultAsync(x => x.UserName == name);
        if (user != null)
        {
            throw new BadRequestException("user already exist with this name");
        }
    }
}