import styled from 'styled-components/macro';

export const FormPageLayout = styled.div`
  align-items: center;
  height: 100vh;
  padding: 2rem;
  background-color: #2d343e;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const FormPageContainer = styled.div`
  min-width: 400px;
  min-height: 540px;
  background-color: #f4f4f4;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #3a4b3c;
  font-family: Arial, Helvetica, sans-serif;

  a {
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.85rem;
  }

  h2 {
    align-self: center;
  }

  button {
    margin: 0.5rem;
    font-size: 2rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    min-width: 300px;
    border: none;
    background-color: #ffac41;
    border-radius: 5px;
    color: #f4f4f4;
  }

  button:hover {
    background-color: #fda22b;
    cursor: pointer;
  }

  label {
    font-family: Arial, Helvetica, sans-serif;
    align-self: flex-start;
    padding-left: 10%;
  }

  input[type='checkbox'] {
    height: 1rem;
    width: 1rem;
  }

  input {
    height: 50px;
    width: 80%;
    background-color: #f4f4f4;
    border: none;
    padding-left: 1rem;
    border-radius: 5px;
    color: #3a4b3c;
    margin: 0.5rem;
    border: 2px solid darkgray;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
`;

export const InlineContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
`;

export const UserMemory = styled.div`
  label {
    padding: 0;
    display: flex;
    align-items: center;
  }
`;
