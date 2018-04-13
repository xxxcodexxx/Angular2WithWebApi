using App.Core.Interface;
using App.Core.Services;
using App.Core.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace App.Services
{
    public class BaseServices<T> : IServices<T> where T:class
    {
        protected readonly IRepository<T> Repository;
        protected readonly IUnitOfWork UnitOfWork;

        protected BaseServices(IRepository<T> repository, IUnitOfWork unitOfWork)
        {
            this.Repository = repository;
            this.UnitOfWork = unitOfWork;
        }

        public IQueryable<T> Entities
        {
            get { return Repository.Entities; }
        }
        //public IQueryable<T> GetSome()
        //{
        //    return Repository.GetMany();
        //}
        public IQueryable<T> GetAll()
        {
            return Repository.GetAll();
        }

        public IQueryable<T> GetAllLookUp()
        {
            return Repository.GetAllLookUp();
        }

        public IQueryable<T> GetAllReadOnly()
        {
            return Repository.GetAllReadOnly();
        }

        public T GetById(int id)
        {
            return Repository.GetById(id);
        }

        public T GetById(int? id)
        {
            return Repository.GetById(id);
        }

        public T Get(Expression<Func<T, bool>> where)
        {
            return Repository.Get(where);
        }

        public int Add(T entity)
        {
            Repository.Add(entity);
            return UnitOfWork.Commit();
        }

        public int Update(T entity)
        {
            Repository.Update(entity);
            return UnitOfWork.Commit();
        }

        public int Delete(T entity)
        {
            Repository.Delete(entity);
            return UnitOfWork.Commit();
        }

        public int Delete(Expression<Func<T, bool>> where)
        {
            Repository.Delete(where);
            return UnitOfWork.Commit();
        }

        public IQueryable<T> GetMany(Expression<Func<T, bool>> where, int? maHints = null)
        {
            return Repository.GetMany(where, maHints);
        }
    }
}
