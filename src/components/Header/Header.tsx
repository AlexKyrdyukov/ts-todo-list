import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { todosSliceActions } from '../../store/todoSlice';
import api from '../../api/apiTodo';
import StyledHeader from './Header.style';
import checked from './images/checkMark.png';

const Header: React.FC = () => {
  const [todoTitle, setTodoTitle] = React.useState<string>('');

  const dispatch = useAppDispatch();

  const todosArray = useAppSelector(({ todos }) => todos);
  const filterValue = useAppSelector(({ filter }) => filter);

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (ev.key !== 'Enter') {
      return;
    }
    handleCreateTodo();
  };

  const todosToogle = React.useMemo(() => {
    const filteredTodos = todosArray.filter((item) => item.completed);
    const flag = filteredTodos.length !== todosArray.length;
    return todosArray.map((item) => ({ ...item, completed: flag }));
  }, [todosArray]);

  const handleCreateTodo = async () => {
    if (!todoTitle.trim()) {
      setTodoTitle('');
      return;
    }
    try {
      const newTodo = await api.createTodo(todoTitle, false);
      setTodoTitle('');
      if (filterValue !== 'completed') {
        dispatch(todosSliceActions.addTodo(newTodo));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const changeTodosStatus = async () => {
    try {
      await api.changeStatus(todosToogle[0].completed);
      dispatch(todosSliceActions.setTodosStatus(todosToogle));
    } catch (error) {
      console.error(error);
    }
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
