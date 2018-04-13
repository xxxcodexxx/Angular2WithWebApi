using App.Common;
using App.Data.Interface;

namespace App.Data
{
    public class DatabaseFactory : Disposable, IDatabaseFactory
    {
        private IDataContext _dataContext;
        public IDataContext Get()
        {
            ///<summary>
            /// Connect to DataBase create UnitOfWork and Reponsitory
            /// </summary>
            return _dataContext ?? (_dataContext = new AppDbContext());
        }
        protected override void DisposeCore()
        {
            ///<summary>
            /// Freeing, releasing, or resetting Connect
            /// </summary>
            if (_dataContext != null)
            {
                _dataContext.Dispose();
            }
        }
    }
}
