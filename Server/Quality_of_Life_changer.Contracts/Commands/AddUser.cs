using System.Web.Helpers;
using MediatR;
using Quality_of_Life_changer.Data;

namespace Quality_of_Life_changer.Contracts.Commands;

public class AddUser
{
    //Command

    public record Command(
        string UserName,
        string Email,
        string Password
    ) : IRequest<Response>;

    //Handler
    //Business logic


    public class Handler : IRequestHandler<Command, Response>
    {
        private readonly QolcDbContext _context;

        public Handler(QolcDbContext context)
        {
            _context = context;
        }

        public async Task<Response> Handle(Command request, CancellationToken cancellationToken)
        {
            //add user to db
            var userId = Guid.NewGuid().ToString();

            _context.Set<QolcUser>().Add(new QolcUser
            {
                Email = request.Email, Password = HashPassword(request.Password), Id = userId,
                UserName = request.UserName
            });

            await _context.SaveChangesAsync(cancellationToken);

            return new Response(userId, request.Email, request.UserName);
        }

        private string HashPassword(string password)
        {
            return Crypto.HashPassword(password);
        }
    }


    //Response 
    public record Response(string Id, string UserName, string Email);
}