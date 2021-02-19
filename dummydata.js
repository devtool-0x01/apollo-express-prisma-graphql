const Countries = {
  japan: { name: "Japan", code: "jp" },
  italy: { name: "Italy", code: "it" },
  germany: { name: "Germany", code: "de" },
};

const Manufacturers = [
  { name: "Honda", country: Countries.japan },
  { name: "Toyota", country: Countries.japan },
  { name: "Ferrari", country: Countries.italy },
  { name: "McLaren", country: Countries.italy },
  { name: "Bugatti", country: Countries.germany },
];

const Vehicles = [
  {
    name: "458 Italia",
    year: 2015,
    model: "Base",
    engineSize: 3800,
    engineType: "V8",
    manufacturer: Manufacturers[2],
  },
  {
    name: "720",
    year: 2018,
    model: "S",
    engineSize: 4200,
    engineType: "V8",
    manufacturer: Manufacturers[3],
  },
  {
    name: "Veyron",
    year: 2014,
    model: "SuperSport",
    engineSize: 8000,
    engineType: "W16",
    manufacturer: Manufacturers[4],
  },
  {
    name: "Chiron",
    year: 2020,
    model: "SuperSport",
    engineSize: 8200,
    engineType: "W16",
    manufacturer: Manufacturers[4],
  },
];

module.exports = {
  Countries,
  Manufacturers,
  Vehicles,
};
