import styled from "styled-components";

export default styled.footer`
  background-color: rgb(231, 231, 230);
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #989898, 4px 4px #302d2d;

  .footer__block-button-status {
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
  }

  .footer__block-button-in-focus {
    color: red;
    background: #55acee;
    box-shadow: 0 1px 0 #3c93d5;
    transition: 0.3s;
    border: 1px solid red;
    border-radius: 2px;
    padding: 3px 5px;

    :hover {
      color: black;
      background: #6fc6ff;
    }
  }

  .footer__button-delete-todos {
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
  }

  .info__table {
    border: 0.3px solid black;
    background-color: rgba(28, 46, 126, 0.267);
    padding: 3px 3px;
    font-size: 12px;
  }
`;
