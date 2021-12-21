using MediatR;
using Microsoft.EntityFrameworkCore;
using Qoality_of_Life_changer.Model.Edentity;
using Quality_of_Life_changer.DAL;

namespace Quality_of_Life_changer.Contracts.Queries;

public class GetUserByEmail
{
    public record Query(string Email) : IRequest<Response>;

    //Handler
    //business logic
    public class Handler : IRequestHandler<Query, Response>
    {
        private readonly QolcDbContext _context;

        public Handler(QolcDbContext context)
        {
            _context = context;
        }

        public async Task<Response> Handle(Query request, CancellationToken cancellationToken)
        {
            var user = await _context.Set<QolcUser>().FirstOrDefaultAsync(x => x.Email == request.Email,
                cancellationToken);
            if (user == null)
                return null;
            return new Response(user.Id, user.UserName, user.Email, user.Password);
        }
    }

    //Response
    public record Response(string Id, string Username, string Email, string Password);
}