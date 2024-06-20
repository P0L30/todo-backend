import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../types";

let todos: Todo[] = [
  { id: "1", text: "Learn GraphQL", group: "Learning", completed: false },
  { id: "2", text: "Build a Todo App", group: "Development", completed: false },
];

export const addTodo = (
  _: any,
  { text, group }: { text: string; group: string }
) => {
  const newTodo: Todo = {
    id: uuidv4(),
    text,
    group,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
};

export const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addTodo,
  },
};
