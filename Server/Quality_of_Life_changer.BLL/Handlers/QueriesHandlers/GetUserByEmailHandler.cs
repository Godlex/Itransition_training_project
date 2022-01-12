namespace Quality_of_Life_changer.Implication.Handlers.QueriesHandlers;

using Contracts.Queries;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class GetUserByEmailHandler : BaseQueriesHandler, IRequestHandler<GetUserByEmail.Query, GetUserByEmail.Response>
{
    private readonly QolcDbContext _context;

    public GetUserByEmailHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<GetUserByEmail.Response> Handle(GetUserByEmail.Query request, CancellationToken cancellationToken)
    {
        var user = await _context.Set<QolcUser>().FirstOrDefaultAsync(x => x.Email == request.Email, cancellationToken);

        if (user == null)
        {
            throw new Exception("no user with this email");
        }

        return new GetUserByEmail.Response(user.Id, user.UserName, user.Email, user.Password);
    }
}