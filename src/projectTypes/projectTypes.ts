export type TodoProjectType = {
  id: string;
  title: string;
  completed: boolean;
};
export type InitialStateProjectType = {
  todos: TodoProjectType[];
  filter: string;
};
export type ChangeTodoTextType = {
  text: string;
  id: string;
};
