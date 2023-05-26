const services = [
  {
    "name": "Разработка мобильного приложения",
    "price": 15.00,
    "duration": 3
  },
  {
    "name": "Разработка веб сайта",
    "price": 6.50,
    "duration": 2
  },
  {
    "name": "Разработка десктопного приложения",
    "price": 127.00,
    "duration": 120
  }
];

function findHigherPricePerHour(services) {
  let highestPriceService = null;
  let highestPricePerHour = 0;

  for (let service of services) {
    const hourPrice = service.price / service.duration;
    if (hourPrice > highestPricePerHour) {
      highestPricePerHour = hourPrice;
      highestPriceService = service;
    }
  }

  if (highestPriceService) {
    highestPriceService.hour_price = highestPricePerHour;
  }

  return highestPriceService;
}

function calculateTotalCost(services) {
  let totalCost = 0;

  for (let service of services) {
    totalCost += service.price;
  }

  return totalCost;
}

const highestPriceService = findHigherPricePerHour(services);
console.log(highestPriceService);

const totalCost = calculateTotalCost(services);
console.log("Costul total:", totalCost.toFixed(2));
