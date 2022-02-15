namespace Quality_of_Life_changer.WebApi;

using MediatR;
using Serilog;
using System.Diagnostics;
using System.Text.Json;

public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
{
    public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken,
        RequestHandlerDelegate<TResponse> next)
    {
        var requestName = request.GetType().Name;
        var requestGuid = Guid.NewGuid().ToString();

        var requestNameWithGuid = $"{requestName} [{requestGuid}]";

        Log.Information($"[START] {requestNameWithGuid}");

        var stopwatch = Stopwatch.StartNew();

        Log.Information($"[PROPS] {requestNameWithGuid} {JsonSerializer.Serialize(request)}");

        var response = await next();

        stopwatch.Stop();

        Log.Information(
            $"[END] {requestNameWithGuid}; Execution time={stopwatch.ElapsedMilliseconds}ms");

        return response;
    }
}