using MediatR;
using Microsoft.EntityFrameworkCore;
using Quality_of_Life_changer.Contracts.Queries;
using Quality_of_Life_changer.Data;

namespace Quality_of_Life_changer.Implication.Handlers;

public class Handler : IRequestHandler<GetUserByEmail.Query, GetUserByEmail.Response>
{
    private readonly QolcDbContext _context;

    public Handler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<GetUserByEmail.Response> Handle(GetUserByEmail.Query request,
        CancellationToken cancellationToken)
    {
        var user = await _context.Set<QolcUser>().FirstOrDefaultAsync(x => x.Email == request.Email,
            cancellationToken);
        if (user == null)
            throw new Exception("no user with this email"); //todo custom exception
        return new GetUserByEmail.Response(user.Id, user.UserName, user.Email, user.Password);
    }
}