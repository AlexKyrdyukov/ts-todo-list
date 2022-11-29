import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { todosSliceActions } from '../../store/todoSlice';
import { setTodoInDB } from '../../store/todoThunks';
import { changeAllTodosStatus } from '../../webApi/webApiTodo';
import StyledHeader from './Header.style';
import checked from './images/checkMark.png';

const Header: React.FC = () => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const dispatch = useAppDispatch();
  const todosArray = useAppSelector(({ todos }) => todos);
  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (ev.key !== 'Enter') {
      return;
    }
    handleCreateTodo();
  };

  const todosToogle = React.useMemo(() => {
    const filteredTodos = todosArray.filter((item) => item.completed);
    if (filteredTodos.length === todosArray.length) {
      return todosArray.map((item) => ({ ...item, completed: false }));
    }
    return todosArray.map((item) => ({ ...item, completed: true }));
  }, [todosArray]);

  const handleCreateTodo = () => {
    if (!todoTitle.trim()) {
      setTodoTitle('');
      return;
    }
    dispatch(setTodoInDB(todoTitle));
    setTodoTitle('');
  };

  const changeTodosStatus = () => {
    dispatch(todosSliceActions.installTodos(todosToogle));
    changeAllTodosStatus(todosToogle[0].completed);
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
