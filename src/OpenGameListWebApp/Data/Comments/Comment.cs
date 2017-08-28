using OpenGameListWebApp.Data.Items;
using OpenGameListWebApp.Data.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OpenGameListWebApp.Data.Comments
{
    public class Comment
    {
        #region Constructor
        public Comment()
        {
        }
        #endregion

        #region Properties
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public int ItemId { get; set; }

        [Required]
        public string Text { get; set; }
        
        [Required]
        public int Type { get; set; }

        [Required]
        public int Flags { get; set; }

        [Required]
        public string UserId { get; set; }
        public int? ParentId { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public DateTime LastModifiedDate { get; set; }
        #endregion

        #region Related Properties
        /// <summary>
        /// Current Comment's Item: this property wil be loaded on first use using EF's Lazy-Loading feature.
        /// </summary>
        [ForeignKey("ItemId")]
        public virtual Item Item { get; set; }

        /// <summary>
        /// Current Comment's Author: this property wil be loaded on first use using EF's Lazy-Loading feature.
        /// </summary>
        [ForeignKey("UserId")]
        public virtual ApplicationUser Author { get; set; }

        /// <summary>
        /// Parent Comment, or NULL if this is a root comment: this property wil be loaded on first use using EF's Lazy-Loading feature.
        /// </summary>
        [ForeignKey("ParentId")]
        public virtual Comment Parent { get; set; }

        /// <summary>
        /// Children Comments (if present).
        /// </summary>
        public virtual List<Comment> Children { get; set; }
        #endregion
    }
}
