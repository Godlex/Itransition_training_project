namespace Quality_of_Life_changer.Contracts.Queries;

using Data;
using MediatR;

public class GetAllUsers
{
    public record GetAllUsersQuery : IRequest<GetAllUsersResponse>;

    public record GetAllUsersResponse(List<QolcUser> Users);
}