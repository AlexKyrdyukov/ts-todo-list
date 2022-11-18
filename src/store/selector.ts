import { createSelector } from '@reduxjs/toolkit';
import { setFilterArrayInLocaleStorage } from '../utils/localeStorageHelper';
import type { RootStateType } from './index';

export const selectFilter = createSelector(
  ({ todos }: RootStateType) => todos,
  ({ filter }: RootStateType) => filter,
  (todos, filter) => {
    let completedTodosCount = 0;
    const filteredTodos = todos.filter((item) => {
      if (item.completed) {
        completedTodosCount++;
      }
      if (filter === 'all') {
        return item;
      }
      const flag = filter === 'completed';
      return item.completed === flag;
    });
    if (filter !== 'all') {
      setFilterArrayInLocaleStorage(filteredTodos);
    }
    return {
      filteredTodos,
      completedTodosCount,
    };
  },
);
