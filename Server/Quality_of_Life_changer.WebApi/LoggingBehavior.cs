namespace Quality_of_Life_changer.WebApi;

using MediatR;
using Serilog;

public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
{
    public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken,
        RequestHandlerDelegate<TResponse> next)
    {
        try
        {
            Log.Information($"Before execution for {typeof(TRequest).Name}");

            return await next();
        }
        finally
        {
            Log.Information($"After execution for {typeof(TRequest).Name}");
        }
    }
}