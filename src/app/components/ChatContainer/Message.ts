import styled from 'styled-components/macro';

export const Message = styled.div`
  margin-left: 0px;
  max-width: 220px;
  padding-left: 0.5rem;

  p {
    font-size: 1rem;
    background-color: #250202;
    padding: 1rem;
    border-radius: 0px 10px 10px 10px;
    font-weight: 300;
    color: #b4b6be;
  }

  span {
    font-size: 0.6rem;
    font-weight: 200;
    color: #b4b6be;
    padding-left: 0.5rem;
  }
`;

export const MessageRecieved = styled.div`
  margin-left: auto;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  max-width: 220px;
  padding-right: 0.5rem;

  p {
    text-align: end;
    border-radius: 10px 0px 10px 10px;
    background-color: $redColor;
    color: white;
  }

  span {
    width: 100%;
    text-align: end;
    padding-left: 0rem;
    padding-right: 0.5rem;
  }
`;
