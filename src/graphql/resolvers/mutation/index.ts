import deleteTodo from "./deleteTodoMutation";
import editTodo from "./editTodoMutation";
import toggleTodoCompletion from "./toggleTodoCompletionMutation";
import { addTodo } from "./addTodoMutation";

const mutationResolvers = {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodoCompletion,
};

export default mutationResolvers;
