using App.Core.Interface;
using App.Core.Models;
using App.Core.Services;
using App.Core.UnitOfWork;

namespace App.Services.Business
{
    public partial class UserServices : BaseServices<User>, IUserServices
    {
        public UserServices(IRepository<User> reponsitory, IUnitOfWork unitOfWork) : base(reponsitory, unitOfWork)
        {
        }
    }
}
