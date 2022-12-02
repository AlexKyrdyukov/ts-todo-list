import React from 'react';

import { todosSliceActions } from '../../store/todoSlice';
import { TodoFilterENUM } from '../../types';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/index';
import api from '../../api/apiTodo';
import {
  DeleteButton,
  FilterButton,
  InformationTable,
  StyledFooter } from './Footer.style';

const Footer: React.FC = () => {
  const arrayTodos = useAppSelector(({ todos }) => todos);
  const filter = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleFilterTodos = async (filterValue: TodoFilterENUM) => {
    dispatch(todosSliceActions.filterTodo(filterValue));
    // const filter = await api.getTodos(filterValue);
    // dispatch(todosSliceActions.installTodos(filter));
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
    api.deleteCompletedTodos();
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
