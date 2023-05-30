﻿using RideWithMe.Core;
using RideWithMe.Infrastructure.Interfaces;

namespace RideWithMe.Application.Interfaces
{
    public interface IUserVehiclesService : IBaseService<int, UserVehicleDto, UserVehicleUpsertDto, UserVehicleSearchObject>
    {
    }
}
