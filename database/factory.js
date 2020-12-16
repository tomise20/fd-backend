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

Factory.blueprint("App/Models/Shop", (faker) => {
  return {
    name: faker.name(),
    address: faker.address(),
    delivery_time: faker.integer({ min: 15, max: 70 }),
    minimum_order: faker.integer({ min: 0, max: 15 }),
    contact_info: JSON.parse(faker.address()),
    open_hours: JSON.parse(fake.integer({ min: 0, max: 12 })),
  };
});
