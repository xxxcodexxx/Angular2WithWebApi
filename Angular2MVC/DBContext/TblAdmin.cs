//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Angular2MVC.DBContext
{
    using System;
    using System.Collections.Generic;
    
    public partial class TblAdmin
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TblAdmin()
        {
            this.TblTokens = new HashSet<TblToken>();
        }
    
        public int AdminId { get; set; }
        public string UserAdmin { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblToken> TblTokens { get; set; }
    }
}