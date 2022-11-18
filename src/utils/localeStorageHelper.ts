import type { TodoType } from '../types';

export const getArrayFromLocaleStorage = () => {
  return JSON.parse(localStorage.getItem('arrayTodos') as string) || [];
};

export const setArrayInLocaleStorage = (arrayTodos: TodoType[]) => {
  localStorage.setItem('arrayTodos', JSON.stringify(arrayTodos));
};

export const getFilterArrayFromLocaleStorage = () => {
  return JSON.parse(localStorage.getItem('FilterTodos') as string) || [];
};

export const setFilterArrayInLocaleStorage = (arrayTodos: TodoType[]) => {
  localStorage.setItem('filterTodos', JSON.stringify(arrayTodos));
};
