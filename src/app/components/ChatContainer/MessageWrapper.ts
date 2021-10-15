import styled from 'styled-components/macro';

export const MessageWrapper = styled.div`
  height: 70%;
  overflow-y: auto;

  @include scrollbars(5px, $backgroundColor, $yellowColor);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: flex-start;
`;
