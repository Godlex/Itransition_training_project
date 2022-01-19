namespace Quality_of_Life_changer.Implementation.Handlers.QueryHandlers;

using Contracts.Exceptions;
using Contracts.Queries;
using Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

public class GetUserByEmailQueryHandler : BaseQueryHandler,
    IRequestHandler<GetUserByEmailQuery, GetUserByEmailResponse>
{
    private readonly QolcDbContext _context;

    public GetUserByEmailQueryHandler(QolcDbContext context)
    {
        _context = context;
    }

    public async Task<GetUserByEmailResponse> Handle(GetUserByEmailQuery request,
        CancellationToken cancellationToken)
    {
        var user = await _context.Set<User>().FirstOrDefaultAsync(x => x.Email == request.Email, cancellationToken);

        if (user == null)
        {
            throw new InvalidInputException("no user with this email");
        }

        return new GetUserByEmailResponse(user.Id, user.UserName, user.Email, user.Password);
    }
}