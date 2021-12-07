using Qoality_of_Life_changer.Model.Edentity;
using Quality_of_Life_changer.Data.Blog.Data.Abstract;

namespace Quality_of_Life_changer.Data.Repository
{
    public interface IUserRepository : IEntityBaseRepository<User>
    {
        bool IsUsernameUniq(string username);
        bool isEmailUniq(string email);
    }
}