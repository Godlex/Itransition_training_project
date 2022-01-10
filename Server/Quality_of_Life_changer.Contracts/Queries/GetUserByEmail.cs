using MediatR;

namespace Quality_of_Life_changer.Contracts.Queries;

public class GetUserByEmail
{
    public record Query(string Email) : IRequest<Response>;

    public record Response(string Id, string Username, string Email, string Password);
}