using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Web.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Quality_of_Life_changer.WebApi.Services.Abstraction;
using Quality_of_Life_changer.WebApi.ViewModel;
using Quality_of_Life_changer.WebApi.ViewModel.Auth;

namespace Quality_of_Life_changer.WebApi.Services;

public class AuthService : IAuthService

{
    private readonly int jwtLifespan;
    private readonly string jwtSecret;


    public AuthService(string jwtSecret, int jwtLifespan)
    {
        this.jwtSecret = jwtSecret;
        this.jwtLifespan = jwtLifespan;
    }

    public AuthService(string v1, string v2)
    {
        V1 = v1;
        V2 = v2;
    }

    public string V1 { get; }
    public string V2 { get; }

    public AuthData GetAuthData(string id, string name, string email)
    {
        var expirationTime = DateTime.UtcNow.AddSeconds(jwtLifespan);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, name),
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.NameIdentifier, id)
            }),
            Expires = expirationTime,
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
                SecurityAlgorithms.HmacSha256Signature
            )
        };
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

        return new AuthData
        {
            Token = token,
            TokenExpirationTime = ((DateTimeOffset) expirationTime).ToUnixTimeSeconds(),
            Id = id
        };
    }

    public bool VerifyPassword(string actualPassword, string hashedPassword)
    {
        return Crypto.VerifyHashedPassword(hashedPassword, actualPassword);
    }

    public ActionResult<IEnumerable<UserModel>> GetAllUsers()
    {
        throw new NotImplementedException();
    }
}