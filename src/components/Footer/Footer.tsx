import React from 'react';

import { todosSliceActions } from '../../store/todoSlice';
import { TodoFilterENUM } from '../../types';
import type { TodoType } from '../../types';

import {
  useAppDispatch,
  useAppSelector,
} from '../../store/index';
import getTodos from '../../store/todoThunks';
import api from '../../api/apiTodo';
import {
  DeleteButton,
  FilterButton,
  InformationTable,
  StyledFooter } from './Footer.style';

const Footer: React.FC = () => {
  const arrayTodos: TodoType[] = useAppSelector(({ todos }) => todos);
  const filter: TodoFilterENUM = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleFilterTodos = async (filterValue: TodoFilterENUM) => {
    try {
      await dispatch(getTodos(filterValue));
      dispatch(todosSliceActions.filterTodo(filterValue));
    } catch (error) {
      console.error(error);
    }
  };

  const amountCompleted: number = React.useMemo(() => {
    return (arrayTodos.filter((item) => item.completed)).length;
  }, [arrayTodos]);

  const handleDeleteCompletedTodos = async () => {
    if (!amountCompleted) return;
    try {
      await api.deleteCompletedTodos();
      dispatch(todosSliceActions.deleteAllCompleteTodos());
    } catch (error) {
      console.error(error);
    }
  };

  if (!arrayTodos.length && filter === 'all') {
    return null;
  }

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
