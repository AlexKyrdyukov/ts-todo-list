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
import { getTodos } from '../../webApi/webApiTodo';

const Footer: React.FC = () => {
  const arrayTodosLength = useAppSelector(({ todos }) => todos.length);
  const filter = useAppSelector(({ filter }) => filter);
  const dispatch = useAppDispatch();

  const handleFilterTodos = (filterValue: TodoFilterENUM) => {
    // eslint-disable-next-line no-console
    console.log(filterValue);
    dispatch(todosSliceActions.filterTodo(filterValue));
    getTodos(filterValue).then((res) => {
      dispatch(todosSliceActions.installTodos(res));
    });
  };

  const handleDeleteCompletedTodos = () => {
    // dispatch(todosSliceActions.deleteAllCompleteTodos());
  };

  if (!arrayTodosLength && filter === 'all') {
    return null;
  }

  return (
    <StyledFooter>
      <InformationTable
      >
        Completed: {0}
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
