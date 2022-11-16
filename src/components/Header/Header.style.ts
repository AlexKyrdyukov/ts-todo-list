import styled from "styled-components";

export default styled.header`
  background-color: rgba(255, 255, 255, 0.973);
  padding-left: 10px;
  display: flex;
  align-items: center;
  box-shadow: 2px -5px 15px 2px rgba(0, 0, 0, 0.5);
  min-width: 300px;

  .header__input {
    font-size: 16px;
    color: black;
    padding: 10px 20px;
    padding-right: 0px;
    max-width: 230px;
  }

  .header__image {
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.973);
    opacity: 0.6;

    :hover {
      opacity: 1;
    }
  }

  .header__button {
    border: 0.5px solid black;
    padding: 3px;
    border-radius: 4.5px;
    transition: 0.6s;

    :hover {
      background: #ff1493;
      color: white;
    }
  }
`;
