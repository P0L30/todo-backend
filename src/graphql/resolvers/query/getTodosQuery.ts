import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    group: String!
    completed: Boolean!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    addTodo(text: String!, group: String!): Todo!
    deleteTodo(id: ID!): Boolean!
    editTodo(id: ID!, text: String!): Todo!
    toggleTodoCompletion(id: ID!): Todo!
  }
`;

export default typeDefs;
