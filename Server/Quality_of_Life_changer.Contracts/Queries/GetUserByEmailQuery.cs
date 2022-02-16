namespace Quality_of_Life_changer.Contracts.Queries;

using MediatR;

public record GetUserByEmailQuery(string Email) : IRequest<GetUserByEmailResponse>;

public record GetUserByEmailResponse(string UserId, string Username, string Email, string Password);