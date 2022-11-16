import { createSelector } from "@reduxjs/toolkit";

import { InitialStateProjectType } from "../../projectTypes/projectTypes";

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
        if (filter === "completed") {
          return item.completed;
        }
        if (filter === "active") {
          return !item.completed;
        }
        return item;
      }),
      counter,
    };
  }
);
