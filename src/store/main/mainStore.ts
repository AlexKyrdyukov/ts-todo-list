import { configureStore } from '@reduxjs/toolkit';

import todosSlice from './mainTodoSlice';

export const store = configureStore({
  reducer: todosSlice,
  devTools: true,
});
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
