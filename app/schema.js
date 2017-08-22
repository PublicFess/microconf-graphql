import {
  makeExecutableSchema,
} from  'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Human {
  id: ID!
  name: String
  appearsIn: [String]
}

type Droid {
  id: ID!
  name: String
  appearsIn: [String]
}

type Character {
  id: ID!
  name: String
  appearsIn: [String]
}

type Query {
  human(id: ID!): Human
  droid(id: ID!): Droid
  characters(episode: String): [Character]
}

type Mutation {
  addHuman(name: String, appearsIn: [String]): Human
}

`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
