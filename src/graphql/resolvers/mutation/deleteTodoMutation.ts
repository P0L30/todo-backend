import todos from "../../data/todos";

const deleteTodo = (_: any, { id }: { id: string }) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

const mutationResolvers = {
  Mutation: {
    deleteTodo,
  },
};

export default mutationResolvers;
