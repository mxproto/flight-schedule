export const typeDefs = `
    type Flight {
        flightNumber: String!
        airline: String!
        origin: String!
        destination: String!
    }

    type Query {
        flights(n: Int): [Flight]
    }
`;
