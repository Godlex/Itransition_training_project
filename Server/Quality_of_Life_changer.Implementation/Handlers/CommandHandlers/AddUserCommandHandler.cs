namespace Quality_of_Life_changer.Implementation.Handlers.CommandHandlers;

using Contracts.Commands;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Web.Helpers;

public class AddUserCommandHandler : BaseCommandHandler, IRequestHandler<AddUserCommand, AddUserResponse>
{
    private readonly QolcDbContext _context;

    public AddUserCommandHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<AddUserResponse> Handle(AddUserCommand request,
        CancellationToken cancellationToken)
    {
        //add user to db

        await CheckingUserExistenceByEmail(request.Email);

        await CheckingUserExistenceByName(request.UserName);

        var userId = Guid.NewGuid().ToString();

        _context.Set<QolcUser>().Add(new QolcUser
        {
            Email = request.Email,
            Password = HashPassword(request.Password),
            Id = userId,
            UserName = request.UserName
        });

        await _context.SaveChangesAsync(cancellationToken);

        return new AddUserResponse(userId, request.Email, request.UserName);
    }

    private static string HashPassword(string password)
    {
        return Crypto.HashPassword(password);
    }

    public async Task CheckingUserExistenceByEmail(string email)
    {
        var user = await _context.Set<QolcUser>().FirstOrDefaultAsync(x => x.Email == email);
        if (user != null)
        {
            throw new Exception("user already exist this email");
        }
    }

    public async Task CheckingUserExistenceByName(string name)
    {
        var user = await _context.Set<QolcUser>().FirstOrDefaultAsync(x => x.UserName == name);
        if (user != null)
        {
            throw new Exception("user already exist this name");
        }
    }
}