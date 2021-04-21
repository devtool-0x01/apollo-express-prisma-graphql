const Query = {
  manufacturer: (parent, args, { db }) =>
    db.manufacturer.findFirst({
      where: {
        id: args.id,
      },
    }),
  brand: (parent, args, { db }) =>
    db.manufacturer.findFirst({
      where: {
        name: args.name,
      },
    }),
  manufacturers: (parent, args, { db }) =>
    db.manufacturer.findMany({
      include: {
        country: true,
        // vehicles: true,
      },
    }),
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
