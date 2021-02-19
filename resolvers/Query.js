const Query = {
  manufacturer: (parent, args, { db }) =>
    db.manufacturer.findFirst({
      where: {
        id: args.id,
      },
    }),
  manufacturers: (parent, args, { db }) => db.manufacturer.findMany(),
  vehicles: (parent, args, { db }) => db.vehicle.findMany(),
  vehicle: (parent, args, { db }) =>
    db.vehicle.findFirst({
      where: {
        id: args.id,
      },
    }),
  countries: (parent, args, { db }) => db.country.findMany(),
  country: (parent, args, { db }) =>
    db.country.findFirst({
      where: {
        countryCode: args.code,
      },
    }),
};

module.exports = {
  Query,
};
