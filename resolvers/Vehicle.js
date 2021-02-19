const Vehicle = {
  models: (p, a, { db }) =>
    db.vehicleModel.findMany({
      where: {
        vehicleId: p.id,
      },
    }),
  manufacturer: (p, a, { db }) =>
    db.manufacturer.findFirst({
      where: {
        id: p.manufacturerId,
      },
    }),
};

module.exports = {
  Vehicle,
};
