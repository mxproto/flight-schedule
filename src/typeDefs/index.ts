export const typeDefs = `
    type Flight {
        flightNumber: String!
    }

    type Query {
        flights: [Flight]
    }
`;
