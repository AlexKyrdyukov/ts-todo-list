import React from 'react';
import { setArrayInLocaleStorage } from './utils/localeStorage';

import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoLists';
import { useAppSelector } from './store';
import type { TodoType } from './types';

const App: React.FC = () => {
  const arrayTodos: TodoType[] = useAppSelector(({ todos }) => todos);
  React.useEffect(() => {
    return setArrayInLocaleStorage(arrayTodos);
  }, [arrayTodos]);
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
};

export default App;
