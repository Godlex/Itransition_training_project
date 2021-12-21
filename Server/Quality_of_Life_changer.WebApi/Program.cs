using System.Text;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Quality_of_Life_changer.Contracts.Commands;
using Quality_of_Life_changer.Contracts.Queries;
using Quality_of_Life_changer.DAL;
using Quality_of_Life_changer.WebApi;
using Quality_of_Life_changer.WebApi.Services;
using Quality_of_Life_changer.WebApi.Services.Abstraction;
using Serilog;

Logger.Initial();

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Host.UseSerilog(Logger.Configure);

    // Add services to the container.
    /*builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));*/

    builder.Services.AddDbContext<QolcDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

    var AllowSpecificOrigins = "_allowSpecificOrigins";


    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,

                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(builder.Configuration.GetValue<string>("JWTSecretKey"))
                )
            };
        });

    builder.Services.AddMediatR(typeof(GetUserByEmail).Assembly, typeof(AddUser).Assembly);

    builder.Services.AddSingleton<IAuthService>(
        new AuthService(builder.Configuration.GetValue<string>("JWTSecretKey"),
            builder.Configuration.GetValue<int>("JWTLifespan"))
    );

    builder.AddCors(AllowSpecificOrigins);

    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    var app = builder.Build();

    app.UseSerilogRequestLogging();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseCors(AllowSpecificOrigins);

    app.UseHttpsRedirection();

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Unhandled exception");
}
finally
{
    Log.Information("Shut down complete");
    Log.CloseAndFlush();
}