namespace Quality_of_Life_changer.Contracts.Interfaces;

using Model.Auth;

public interface IAuthService
{
    bool VerifyPassword(string actualPassword, string hashedPassword);
    AuthData GetAuthData(string id, string userName, string userEmail);
}