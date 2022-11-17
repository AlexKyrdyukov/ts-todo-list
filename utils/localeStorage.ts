import type { TodoType } from '../src/types/types';

export const getArrayFromLocaleStorage = () => {
  return JSON.parse(localStorage.getItem('todos') as string) || [];
};

export const setArrayInLocaleStorage = (arrayTodos: TodoType[]) => {
  localStorage.setItem('todos', JSON.stringify(arrayTodos));
};
