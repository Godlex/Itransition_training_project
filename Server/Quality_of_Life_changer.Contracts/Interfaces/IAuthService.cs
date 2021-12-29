using Qoality_of_Life_changer.Model.Auth;

namespace Quality_of_Life_changer.Contracts.Interfaces;

public interface IAuthService
{
    bool VerifyPassword(string actualPassword, string hashedPassword);
    AuthData GetAuthData(string id, string userName, string userEmail);
}