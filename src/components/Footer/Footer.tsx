import React from 'react';

import { todosSliceActions } from '../../store/main/mainTodoSlice';
import { selectFilter } from '../../store/main/mainSelector';
import StyledFooter from './Footer.style';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/main/hooksRedux/appHooks';

const Footer: React.FC = () => {
  const arrayTodos = useAppSelector(({ todos }) => todos);
  const filter = useAppSelector(({ filter }) => filter);
  const completedTodos = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(arrayTodos));
  }, [arrayTodos]);

  const handleFilterTodos = (filterValue: string) => {
    dispatch(todosSliceActions.filterTodo(filterValue));
  };

  const handleDeleteCompletedTodos = () => {
    dispatch(todosSliceActions.deleteAllCompleteTodos());
  };

  if (!arrayTodos.length) {
    return null;
  }

  return (
    <StyledFooter>
      <span className="info__table">Completed: {completedTodos.counter}</span>
      {filterButtons.map((item) => (
        <button
          key={item.value}
          className={
            item.value === filter
              ? 'footer__block-button-in-focus'
              : 'footer__block-button-status'
          }
          onClick={() => handleFilterTodos(item.value)}
        >
          {item.value}
        </button>
      ))}
      <button
        className="footer__button-delete-todos"
        onClick={handleDeleteCompletedTodos}
      >
        delete
      </button>
    </StyledFooter>
  );
};

const filterButtons = [
  {
    value: 'all',
  },
  {
    value: 'active',
  },
  {
    value: 'completed',
  },
];
export default Footer;
