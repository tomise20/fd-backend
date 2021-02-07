"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Shop", async (faker) => {
  const open_hours =
    (await faker.integer({ min: 5, max: 8 })) +
    ":00am - " +
    faker.integer({ min: 5, max: 12 }) +
    ":00pm";

  const shop_images = [
    "https://cdn.pixabay.com/photo/2016/02/19/11/40/coffee-shop-1209863_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/07/13/15/08/cafe-843293_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/12/08/00/26/coffee-shop-1081713_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg",
  ];

  const cover_image = [
    "https://cdn.pixabay.com/photo/2015/05/31/11/23/table-791167_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/03/26/10/28/restaurant-691397_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/03/26/09/54/restaurant-690569_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/21/16/02/bar-1846137_960_720.jpg",
  ];

  const choosen_types = await faker.pickset(
    ["American", "Breakfast", "Coffee and Tea", "Fast Food", "Hamburgers"],
    faker.integer({ min: 1, max: 3 })
  );

  const type = choosen_types.join();

  return {
    name: faker.company(),
    shop_image: faker.pickone(shop_images),
    cover_image: faker.pickone(cover_image),
    description: faker.paragraph(),
    type: type,
    raitings: faker.integer({ min: 20, max: 550 }),
    delivery_time:
      faker.integer({ min: 5, max: 20 }) +
      "-" +
      faker.integer({ min: 30, max: 70 }),
    minimum_order: faker.integer({ min: 0, max: 15 }),
    contact_info: JSON.stringify({
      address: faker.address,
      phone: faker.phone({ country: "us" }),
      email: faker.email(),
    }),
    open_hours: JSON.stringify({
      monday: open_hours,
      tuesday: open_hours,
      wednesday: open_hours,
      thursday: open_hours,
      friday: open_hours,
      saturday: open_hours,
      sunday: open_hours,
    }),
  };
});

Factory.blueprint("App/Models/Product", async (faker) => {
  const open_hours =
    (await faker.integer({ min: 5, max: 8 })) +
    ":00am - " +
    faker.integer({ min: 5, max: 12 }) +
    ":00pm";

  const images = [
    "https://cdn.pixabay.com/photo/2020/10/22/11/36/hamburger-5675844_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/11/11/10/05/cheeseburger-3808424_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/10/28/19/44/schnitzel-3779726_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/09/30/15/10/pizza-2802332_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg",
  ];

  const names = [
    "Dupla burger with fanta",
    "Dupla burger with chips & drink",
    "Cheese burger menu",
    "Cheese burger",
    "Caesar salad with drink",
    "Dupla burger with fanta",
    "Ham pizza",
    "Mushroom pizza",
    "Ham & mushroom pizza",
    "Pineapple pizza",
    "Garlic cream soup & schnitzel",
    "Schnitzel and rice with cola",
    "Schnitzel and chips with drink",
  ];

  const choosen_types = await faker.pickset(
    ["American", "Breakfast", "Coffee and Tea", "Fast Food", "Hamburgers"],
    faker.integer({ min: 1, max: 3 })
  );

  const type = choosen_types.join();

  return {
    name: faker.pickone(names),
    description: faker.paragraph({ sentences: 1 }),
    cal:
      faker.integer({ min: 300, max: 750 }) +
      "-" +
      faker.integer({ min: 30, max: 70 }),
    image: faker.pickone(images),
    preparation_time:
      faker.integer({ min: 10, max: 20 }) +
      "-" +
      faker.integer({ min: 25, max: 45 }),
    price: faker.floating({ min: 0, max: 25, fixed: 2 }),
    shop_id: faker.integer({ min: 1, max: 62 }),
  };
});
