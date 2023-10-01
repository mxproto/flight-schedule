import { faker } from "@faker-js/faker";

export class FlightScheduleApi {
  constructor() {}

  public getFlightSchedule(numberOfFlights = 10) {
    return [...new Array(numberOfFlights)].map(() => ({
      flightNumber: `${
        faker.airline.airline().iataCode
      }${faker.airline.flightNumber()}`,
      airline: faker.airline.airline().name,
      origin: faker.airline.airport().name,
      destination: faker.airline.airport().name,
    }));
  }
}
