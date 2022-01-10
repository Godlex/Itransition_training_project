using MediatR;
using Microsoft.EntityFrameworkCore;
using Quality_of_Life_changer.Contracts.Queries;
using Quality_of_Life_changer.Data;

namespace Quality_of_Life_changer.Implication.Handlers;

public class GetAllUsersHandler : IRequestHandler<GetAllUsers.Query, GetAllUsers.Response>
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