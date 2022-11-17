import styled from 'styled-components';

export const FilterButton = styled.button<{ isActive: boolean }>`
  color: white;
  background: #55acee;
  box-shadow: 0 1px 0 #3c93d5;
  transition: 0.3s;
  border: 1px solid black;
  border-radius: 2px;
  padding: 3px 5px;
  color: ${({ isActive }) => (isActive ? 'yellow' : 'blue')};
  border-color: ${({ isActive }) => (isActive ? 'red' : 'blue')};

    :hover {
      color: black;
      background: #6fc6ff;
    }
`;
export const DeleteButton = styled.button`
  color: white;
  background: #55acee;
  box-shadow: 0 1px 0 #3c93d5;
  transition: 0.3s;
  border: 1px solid black;
  border-radius: 2px;
  padding: 3px 5px;

    :hover {
      color: black;
      background: #6fc6ff;
    }
`;

export const InformationTable = styled.span`
border: 0.3px solid black;
background-color: rgba(28, 46, 126, 0.267);
padding: 3px 3px;
font-size: 12px;
`;
export const StyledFooter = styled.footer`
  background-color: rgb(231, 231, 230);
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #989898, 4px 4px #302d2d;
`;
