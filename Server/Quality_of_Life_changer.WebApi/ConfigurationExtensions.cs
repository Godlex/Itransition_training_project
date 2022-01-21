namespace Quality_of_Life_changer.WebApi;

using Middleware;

public static class ConfigurationExtensions
{
    public static void AddCors(this WebApplicationBuilder builder, string AllowSpecificOrigins)
    {
        builder.Services.AddCors(options =>
        {
            options.AddPolicy(AllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
                });
        });
    }

    public static void ConfigureExceptionMiddleware(this IApplicationBuilder app)
    {
        app.UseMiddleware<ExceptionMiddleware>();
    }
}