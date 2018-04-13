using Angular2MVC.DBContext;
using App.Core.Interface;
using App.Core.Services;
using App.Core.UnitOfWork;
using App.Data;
using App.Data.Interface;
using App.Data.UnitOfWork;
using App.Services.Business;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace Angular2MVC.Controllers
{
    public class BaseAPIController : ApiController
    {
        //protected readonly UserDBEntities DBContext = new UserDBEntities();
        protected HttpResponseMessage ToJson(dynamic obj, int total, int pageSize)
        {
            object[] o = new object[3];
            o.SetValue(obj, 0);
            o.SetValue(total, 1);
            o.SetValue(pageSize, 2);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(o), Encoding.UTF8, "application/json");
            return response;
        }
    }
}
