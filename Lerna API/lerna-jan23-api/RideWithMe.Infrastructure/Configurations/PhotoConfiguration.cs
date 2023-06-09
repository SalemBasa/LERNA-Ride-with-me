﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;

using RideWithMe.Core;

namespace RideWithMe.Infrastructure
{
    public class PhotoConfiguration : BaseConfiguration<Photo>
    {
        public override void Configure(EntityTypeBuilder<Photo> builder)
        {
            base.Configure(builder);

            builder.Property(e => e.Data)
                   .IsRequired();

            builder.Property(e => e.ContentType)
                   .IsRequired();
        }
    }
}
