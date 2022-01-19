namespace Quality_of_Life_changer.Adapter.Services;

using Contracts.Interfaces;
using Microsoft.IdentityModel.Tokens;
using Model.AuthModel;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Web.Helpers;

public class AuthService : IAuthService

{
    private readonly int _jwtLifespan;
    private readonly string _jwtSecret;


    public AuthService(string jwtSecret, int jwtLifespan)
    {
        _jwtSecret = jwtSecret;
        _jwtLifespan = jwtLifespan;
    }

    public bool VerifyPassword(string actualPassword, string hashedPassword)
    {
        return Crypto.VerifyHashedPassword(hashedPassword, actualPassword);
    }

    public AuthData GetAuthData(string id, string name, string email)
    {
        var expirationTime = DateTime.UtcNow.AddSeconds(_jwtLifespan);

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
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSecret)),
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
}