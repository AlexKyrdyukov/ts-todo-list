import React from 'react';

import { useAppDispatch } from '../../store';
import { todosSliceActions } from '../../store/todoSlice';
import StyledHeader from './Header.style';
import checked from './images/checkMark.png';

const Header: React.FC = () => {
  const [todoTitle, setTodoTitle] = React.useState('');
  const dispatch = useAppDispatch();

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (ev.key !== 'Enter') {
      return;
    }
    handleCreateTodo();
  };

  const handleCreateTodo = () => {
    if (!todoTitle.trim()) {
      setTodoTitle('');
      return;
    }
    dispatch(todosSliceActions.createTodo(todoTitle));
    setTodoTitle('');
  };

  const changeTodosStatus = () => {
    dispatch(todosSliceActions.changeStatusAllTodos());
  };

  return (
    <StyledHeader>
      <button onClick={changeTodosStatus}>
        <img className="header__image" src={checked}
          alt="checkbox installations all todos completed"
        />
      </button>
      <input
        className="header__input"
        value={todoTitle}
        placeholder="What needs to be done?"
        onKeyUp={handleKeyUp}
        onChange={(ev) => setTodoTitle(ev.target.value)}
      />
      <button className="header__button" onClick={handleCreateTodo}>
        Add
      </button>
    </StyledHeader>
  );
};

export default Header;
