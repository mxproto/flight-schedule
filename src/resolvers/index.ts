export const resolvers = {
  Query: {
    flights: (_, args, context) => {
      const numberOfFlights = args.n;
      return context.dataSources.flightScheduleApi.getFlightSchedule(
        numberOfFlights
      );
    },
  },
};
