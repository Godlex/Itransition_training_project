﻿namespace Quality_of_Life_changer.Implication.Handlers;

using Contracts.Commands;
using Data;
using MediatR;
using System.Web.Helpers;

public class AddUserHandler : IRequestHandler<AddUser.Command, AddUser.Response>
{
    private readonly QolcDbContext _context;

    public AddUserHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<AddUser.Response> Handle(AddUser.Command request, CancellationToken cancellationToken)
    {
        //add user to db
        var userId = Guid.NewGuid().ToString();

        _context.Set<QolcUser>().Add(new QolcUser
        {
            Email = request.Email,
            Password = HashPassword(request.Password),
            Id = userId,
            UserName = request.UserName
        });

        await _context.SaveChangesAsync(cancellationToken);

        return new AddUser.Response(userId, request.Email, request.UserName);
    }

    private string HashPassword(string password)
    {
        return Crypto.HashPassword(password);
    }
}