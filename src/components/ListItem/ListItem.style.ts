import styled from 'styled-components';

type StyleType = {
  isComplete: boolean;
};

export const ButtonDelete = styled.button`

    border: 1px solid black;
    border-radius: 2px;
    padding: 10px;
    transition: 0.4s;

    :hover {
      background-color: rgb(0, 112, 99);
      padding: 10px;
      color: white;
    }
`;

export const ButtonCompleted = styled.button<StyleType>`

    border: 1px solid black;
    border-radius: 2px;
    padding: 10px;
    background-color: ${(props) => (props.isComplete ? 'greenyellow' : '')};
    color: ${(props) => (props.isComplete ? 'blue' : '')};

    :hover {
      background-color: ${(props) => (props.isComplete ? '' : 'green')};
    }
`;

export default styled.li<StyleType>`

  background-color: rgba(255, 255, 255, 0.973);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  align-items: center;
  min-width: 300px;
 
  .title__block {
    padding-left: 10px;
    width: 200px;
    overflow: hidden;
    font-size: 16px;
    color: ${(props) => (props.isComplete ? 'grey' : 'black')};
    text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
  }

  .input__block {
    background-color: rgba(255, 255, 255, 0.973);
    overflow: hidden;
    padding-left: 10px;
    font-size: 16px;
    color: ${(props) => (props.isComplete ? 'grey' : 'black')};
    text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
  }
`;
