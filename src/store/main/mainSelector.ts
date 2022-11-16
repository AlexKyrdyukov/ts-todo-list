import { createSelector } from '@reduxjs/toolkit';

import type { InitialStateProjectType } from '../../types/types';

export const selectFilter = createSelector(
  ({ todos }: InitialStateProjectType) => todos,
  ({ filter }: InitialStateProjectType) => filter,
  (todos, filter) => {
    let counter = 0;

    return {
      array: todos.filter((item) => {
        if (item.completed) {
          counter++;
        }
        if (filter === 'completed') {
          return item.completed;
        }
        if (filter === 'active') {
          return !item.completed;
        }
        return item;
      }),
      counter,
    };
  },
);
