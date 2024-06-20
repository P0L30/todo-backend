import todos from "../../data/todos";

const editTodo = (_: any, { id, text }: { id: string; text: string }) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.text = text;
    return todo;
  }
  throw new Error("Todo not found");
};

const mutationResolvers = {
  Mutation: {
    editTodo,
  },
};

export default mutationResolvers;
