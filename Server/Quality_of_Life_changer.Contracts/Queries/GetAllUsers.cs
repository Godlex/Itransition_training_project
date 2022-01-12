namespace Quality_of_Life_changer.Contracts.Queries;

using Data;
using MediatR;

public class GetAllUsers
{
    public record Query : IRequest<Response>;

    public record Response(List<QolcUser> Users);
}