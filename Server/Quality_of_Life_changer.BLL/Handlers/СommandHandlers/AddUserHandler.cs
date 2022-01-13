namespace Quality_of_Life_changer.Implication.Handlers.СommandsHandlers;

using Contracts.Commands;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Web.Helpers;

public class AddUserHandler : BaseCommandHandler, IRequestHandler<AddUser.AddUserCommand, AddUser.AddUserResponse>
{
    private readonly QolcDbContext _context;

    public AddUserHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<AddUser.AddUserResponse> Handle(AddUser.AddUserCommand request,
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

        return new AddUser.AddUserResponse(userId, request.Email, request.UserName);
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