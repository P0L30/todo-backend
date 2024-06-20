import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    group: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    addTodo(text: String!, group: String!): Todo!
  }
`;
