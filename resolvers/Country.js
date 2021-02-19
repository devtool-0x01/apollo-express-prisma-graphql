const Country = {
  manufacturers: (p, a, { db }) =>
    db.manufacturer.findMany({
      where: {
        countryId: p.id,
      },
    }),
};

module.exports = { Country };
