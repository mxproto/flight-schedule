export const resolvers = {
  Query: {
    flights: (_, __, context) =>
      context.dataSources.flightScheduleApi.getFlightSchedule(),
  },
};
