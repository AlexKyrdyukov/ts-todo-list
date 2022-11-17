import { createSelector } from '@reduxjs/toolkit';

import type { RootStateType } from './index';

//  type AppSelector<Return> = (state: RootStateType) => Return;
//  const createAppSelector = <R>(selector: AppSelector<R>): AppSelector<R> => selector;

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
    return {
      filteredTodos,
      completedTodosCount,
    };
  },
);
