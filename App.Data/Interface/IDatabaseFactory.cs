using System;

namespace App.Data.Interface
{
    public interface IDatabaseFactory : IDisposable
    {
        IDataContext Get();
    }
}
