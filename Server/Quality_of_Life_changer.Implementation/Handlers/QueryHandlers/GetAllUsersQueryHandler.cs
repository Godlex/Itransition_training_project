namespace Quality_of_Life_changer.Implementation.Handlers.QueryHandlers;

using Contracts.Queries;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class GetAllUsersQueryHandler : BaseQueryHandler,
    IRequestHandler<GetAllUsersQuery, GetAllUsersResponse>
{
    private readonly QolcDbContext _context;

    public GetAllUsersQueryHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<GetAllUsersResponse> Handle(GetAllUsersQuery request,
        CancellationToken cancellationToken)
    {
        var users = _context.Set<User>().Include(x => x.Calendars);
        return new GetAllUsersResponse(await users.ToListAsync(cancellationToken));
    }
}