import { faker } from "@faker-js/faker";

export class FlightScheduleApi {
  constructor() {}

  public getFlightSchedule() {
    return [...new Array(4)].map(() => ({
      flightNumber: faker.airline.flightNumber(),
    }));
  }
}
