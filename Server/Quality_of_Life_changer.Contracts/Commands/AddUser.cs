namespace Quality_of_Life_changer.Contracts.Commands;

using MediatR;

public class AddUser
{
    public record AddUserCommand(
        string UserName,
        string Email,
        string Password
    ) : IRequest<AddUserResponse>;

    public record AddUserResponse(string Id, string UserName, string Email);
}