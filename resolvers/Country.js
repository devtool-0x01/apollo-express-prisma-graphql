const Country = {
  manufacturers: (_parent, _args, { db }) =>
    db.manufacturer.findMany({
      where: {
        countryId: p.id,
      },
    }),
};

module.exports = { Country };
