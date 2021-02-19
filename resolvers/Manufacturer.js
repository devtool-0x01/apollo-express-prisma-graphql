const Manufacturer = {
  vehicles: (parent, a, { db }) =>
    db.vehicle.findMany({
      where: {
        manufacturerId: parent.id,
      },
    }),
  country: (p, a, { db }) =>
    db.country.findFirst({
      where: {
        id: p.countryId,
      },
    }),
};

module.exports = { Manufacturer };
