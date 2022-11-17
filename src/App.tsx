import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoLists';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
};

export default App;
