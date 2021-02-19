const { Vehicles, Manufacturers, Countries } = require("../dummydata");
const { PrismaClient } = require("@prisma/client");

const client = new PrismaClient();

async function main() {
  for (const key of Object.keys(Countries)) {
    console.log(Countries[key]);
    client.country.create({
      data: {
        name: Countries[key].name,
        countryCode: Countries[key].code,
      },
    });
  }
  const items = await client.country.findMany();
  console.log(items);
  client.$disconnect()
}

main();
