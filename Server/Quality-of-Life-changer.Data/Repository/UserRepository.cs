using Blog.Data.Repositories;
using Qoality_of_Life_changer.Model.Edentity;
using Quality_of_Life_changer.DAL;

namespace Quality_of_Life_changer.Data.Repository
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(QolcDbContext context) : base(context) { }

        public bool isEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool IsUsernameUniq(string username)
        {
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }
    }
}
