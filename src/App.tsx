import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoLists/TodoList";
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
