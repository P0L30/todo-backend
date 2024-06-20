import todos from "../../data/todos";

const toggleTodoCompletion = (_: any, { id }: { id: string }) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    return todo;
  }
  throw new Error("Todo not found");
};

const mutationResolvers = {
  Mutation: {
    toggleTodoCompletion,
  },
};

export default mutationResolvers;
