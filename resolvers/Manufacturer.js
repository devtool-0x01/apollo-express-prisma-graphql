const Manufacturer = {
  vehicles: (parent, a, { db }) => {
    return (
      parent.vehicles ??
      db.vehicle.findMany({
        where: {
          manufacturerId: parent.id,
        },
      })
    );
  },
  country: (p, a, { db }) => {
    // console.log(p.country);
    return (
      p.country ??
      db.country.findFirst({
        where: {
          id: p.countryId,
        },
      })
    );
  },
};

module.exports = { Manufacturer };
