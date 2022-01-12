namespace Quality_of_Life_changer.Implication.Handlers.QueriesHandlers;

using Contracts.Queries;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class GetAllUsersHandler : BaseQueriesHandler, IRequestHandler<GetAllUsers.Query, GetAllUsers.Response>
{
    private readonly QolcDbContext _context;

    public GetAllUsersHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<GetAllUsers.Response> Handle(GetAllUsers.Query request, CancellationToken cancellationToken)
    {
        var mathProblem = _context.Set<QolcUser>().Select(x => x);
        return new GetAllUsers.Response(await mathProblem.ToListAsync(cancellationToken));
    }
}