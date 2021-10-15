import styled from 'styled-components/macro';

export const SendMessage = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  input {
    width: 80%;
    text-decoration: none;
    background-color: #404450;
    border: none;
    padding-left: 1rem;
    border-radius: 5px 0px 0px 5px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 20%;
    border: none;
    background-color: $yellowColor;
    border-radius: 0px 5px 5px 0px;
    &:hover {
      cursor: pointer;
    }
  }
`;
