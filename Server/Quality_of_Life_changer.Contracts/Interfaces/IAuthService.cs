namespace Quality_of_Life_changer.Contracts.Interfaces;

using Model.AuthModel;

public interface IAuthService
{
    bool VerifyPassword(string actualPassword, string hashedPassword);
    AuthData GetAuthData(string id, string userName, string userEmail);
}