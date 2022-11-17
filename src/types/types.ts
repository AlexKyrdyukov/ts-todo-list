export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};

export enum TodoFilterENUM {
  all = 'all',
  completed = 'completed',
  active = 'active',
}

export type InitialStateType = {
  todos: TodoType[];
  filter: TodoFilterENUM;
};
