import React from 'react';

import { todosSliceActions } from '../../store/todoSlice';
import { TodoFilterENUM } from '../../types';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/index';
import {
  DeleteButton,
  FilterButton,
  InformationTable,
  StyledFooter } from './Footer.style';
import { deleteCompletedTodos, getTodos } from '../../webApi/webApiTodo';

const Footer: React.FC = () => {
  const arrayTodos = useAppSelector(({ todos }) => todos);
  const filter = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleFilterTodos = (filterValue: TodoFilterENUM) => {
    dispatch(todosSliceActions.filterTodo(filterValue));
    getTodos(filterValue).then((res) => {
      dispatch(todosSliceActions.installTodos(res));
    });
  };

  const amountCompleted = React.useMemo(() => {
    return (arrayTodos.filter((item) => item.completed)).length;
  }, [arrayTodos]);

  if (!arrayTodos.length && filter === 'all') {
    return null;
  }
  const handleDeleteCompletedTodos = () => {
    if (amountCompleted <= 0) return;
    dispatch(todosSliceActions.deleteAllCompleteTodos());
    deleteCompletedTodos();
  };

  return (
    <StyledFooter>
      <InformationTable
      >
        Completed: {amountCompleted}
      </InformationTable>
      {Object.entries(TodoFilterENUM).map(([key, value]) => (
        <FilterButton
          key={key}
          onClick={() => handleFilterTodos(value)}
          isActive={value === filter}
        >
          {value}
        </FilterButton>
      ))}
      <DeleteButton
        onClick={handleDeleteCompletedTodos}
      >
        delete
      </DeleteButton>
    </StyledFooter>
  );
};

export default Footer;
