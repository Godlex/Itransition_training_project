using MediatR;
using Microsoft.EntityFrameworkCore;
using Qoality_of_Life_changer.Model.Edentity;
using Quality_of_Life_changer.DAL;

namespace Quality_of_Life_changer.Contracts.Queries;

public class GetAllUsers
{
    public record Query : IRequest<Response>;

    public class Handler : IRequestHandler<Query, Response>
    {
        private readonly QolcDbContext _context;

        public Handler(QolcDbContext context)
        {
            _context = context;
        }

        public async Task<Response> Handle(Query request, CancellationToken cancellationToken)
        {
            var mathProblem = _context.Set<QolcUser>().Select(x => x);
            return new Response(await mathProblem.ToListAsync(cancellationToken));
        }
    }

    //Response
    public record Response(List<QolcUser> Users);
}