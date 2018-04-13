using Angular2MVC.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using PagedList;
using App.Core.Services;
using App.Data.Interface;
using App.Data;
using App.Core.Interface;
using App.Core.UnitOfWork;
using App.Data.UnitOfWork;
using App.Services.Business;

namespace Angular2MVC.Controllers
{
    public class UserAPIController : BaseAPIController
    {
        private int _pageSize = 5;

        private readonly IUserServices _userServices;

        public UserAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<App.Core.Models.User> repositoryUser = new Repository<App.Core.Models.User>(databaseFactory);

            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._userServices = new UserServices(repositoryUser, unitOfWork);
        }

        public HttpResponseMessage Get(string filter, int? page)
        {
            int pageNumber = (page ?? 1);
            if (!string.IsNullOrEmpty(filter))
            {
                var user = _userServices.GetAll().Where(u => u.LastName.Contains(filter)
                               || u.FirstName.Contains(filter)).OrderBy(u => u.Id).ToPagedList(pageNumber, _pageSize).Skip(0);
                return ToJson(user, user.Count(), _pageSize);
            }
            else
            {
                return ToJson(_userServices.GetAll().OrderBy(u => u.Id).ToPagedList(pageNumber, _pageSize).Skip(0), _userServices.GetAll().OrderBy(u => u.LastName).Count(), _pageSize);
            }
        }

       public HttpResponseMessage Post([FromBody]/*TblUser*/ App.Core.Models.User value)
        {
            //DBContext.TblUsers.Add(value);   
            return ToJson(/*DBContext.SaveChanges()*/_userServices.Add(value), _userServices.GetAll().OrderBy(u => u.Id).Count(), _pageSize);
        }

        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            //DBContext.Entry(value).State = EntityState.Modified;

            var user = new App.Core.Models.User();
            user.Id = id;
            user.FirstName = value.FirstName;
            user.LastName = value.LastName;
            user.Gender = value.Gender;
            return ToJson(_userServices.Update(user)/*DBContext.SaveChanges()*/, _userServices.GetAll().OrderBy(u => u.Id).Count(), _pageSize);
        }
        public HttpResponseMessage Delete(int id)
        {
            //DBContext.TblUsers.Remove(DBContext.TblUsers.FirstOrDefault(x => x.Id == id));
            var user = _userServices.GetById(id);
            return ToJson(_userServices.Delete(user)/*DBContext.SaveChanges()*/, _userServices.GetAll().OrderBy(u=>u.Id).Count(), _pageSize);
        }
    }
}
