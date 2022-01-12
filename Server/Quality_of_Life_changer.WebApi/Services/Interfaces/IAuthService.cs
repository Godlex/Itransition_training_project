namespace Quality_of_Life_changer.WebApi.Services.Interfaces;

using Microsoft.AspNetCore.Mvc;
using Model.Auth;

public interface IAuthService
{
    bool VerifyPassword(string actualPassword, string hashedPassword);

    AuthData GetAuthData(string id, string userName, string userEmail);

    ActionResult<IEnumerable<UserModel>> GetAllUsers();
}