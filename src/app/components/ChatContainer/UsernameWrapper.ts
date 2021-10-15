import styled from 'styled-components/macro';

export const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
  width: 100%;
  color: #f4f4f4;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: black;

  img {
    height: 100%;
    width: auto;
  }

  h2 {
    font-weight: 300;
    padding-left: 1rem;
  }
`;
