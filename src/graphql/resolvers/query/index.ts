import getTodos from "./getTodosQuery";

const queryResolvers = {
  Query: {
    getTodos,
  },
};

export default queryResolvers;
