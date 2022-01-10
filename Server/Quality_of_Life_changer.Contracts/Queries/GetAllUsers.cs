using MediatR;
using Quality_of_Life_changer.Data;

namespace Quality_of_Life_changer.Contracts.Queries;

public class GetAllUsers
{
    public record Query : IRequest<Response>;

    public record Response(List<QolcUser> Users);
}