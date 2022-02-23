namespace Quality_of_Life_changer.WebApi.Middleware;

using Contracts.Exceptions;
using Model;
using Serilog;
using System.Net;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (BadRequestException ex)
        {
            Log.Error($"Something went wrong: {ex}");
            await HandleBadRequestExceptionAsync(httpContext, ex);
        }
        catch (ValidationException ex)
        {
            Log.Error($"Something went wrong: {ex}");
            await HandleValidationExceptionAsync(httpContext, ex);
        }
        catch (ForbiddenException ex)
        {
            Log.Error($"Something went wrong: {ex}");
            await HandleForbiddenExceptionAsync(httpContext, ex);
        }
        catch (Exception ex)
        {
            Log.Error($"Something went wrong: {ex}");
            await HandleExceptionAsync(httpContext, ex);
        }
    }

    private static async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;

        await context.Response.WriteAsync(new ErrorDetails
        {
            StatusCode = context.Response.StatusCode,
            Message = exception.Message
        }.ToString());
    }

    private static async Task HandleValidationExceptionAsync(HttpContext context, ValidationException exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int) HttpStatusCode.UnprocessableEntity;

        await context.Response.WriteAsync(new ErrorDetails
        {
            StatusCode = context.Response.StatusCode,
            Message = exception.Message
        }.ToString());
    }

    private static async Task HandleBadRequestExceptionAsync(HttpContext context, BadRequestException exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int) HttpStatusCode.BadRequest;

        await context.Response.WriteAsync(new ErrorDetails
        {
            StatusCode = context.Response.StatusCode,
            Message = exception.Message
        }.ToString());
    }


    private static async Task HandleForbiddenExceptionAsync(HttpContext context, ForbiddenException exception)
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int) HttpStatusCode.Forbidden;

        await context.Response.WriteAsync(new ErrorDetails
        {
            StatusCode = context.Response.StatusCode,
            Message = exception.Message
        }.ToString());
    }
}