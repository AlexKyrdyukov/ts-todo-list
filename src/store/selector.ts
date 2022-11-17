import { createSelector } from '@reduxjs/toolkit';
import { setFilterArrayInLocaleStorage } from '../utils/localeStorage';

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
      if (filter === 'completed') {
        return item.completed;
      }
      if (filter === 'active') {
        return !item.completed;
      }
      return item;
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
