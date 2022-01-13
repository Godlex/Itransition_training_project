namespace Quality_of_Life_changer.Implication.Handlers.QueriesHandlers;

using Contracts.Queries;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class GetAllUsersHandler : BaseQueryHandler,
    IRequestHandler<GetAllUsers.GetAllUsersQuery, GetAllUsers.GetAllUsersResponse>
{
    private readonly QolcDbContext _context;

    public GetAllUsersHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<GetAllUsers.GetAllUsersResponse> Handle(GetAllUsers.GetAllUsersQuery request,
        CancellationToken cancellationToken)
    {
        var mathProblem = _context.Set<QolcUser>().Select(x => x);
        return new GetAllUsers.GetAllUsersResponse(await mathProblem.ToListAsync(cancellationToken));
    }
}