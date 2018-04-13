namespace App.Core.UnitOfWork
{
    public interface IUnitOfWork
    {
        int Commit();
    }
}
