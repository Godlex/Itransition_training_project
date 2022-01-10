using MediatR;

namespace Quality_of_Life_changer.Contracts.Commands;

public class AddUser
{
    public record Command(
        string UserName,
        string Email,
        string Password
    ) : IRequest<Response>;

    public record Response(string Id, string UserName, string Email);
}