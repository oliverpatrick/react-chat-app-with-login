import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

export default function ConversationsPage(): ReactElement {
  return (
    <ConversationWrapper>
      <input></input>
      <input></input>
    </ConversationWrapper>
  );
}

export const ConversationWrapper = styled.div`
  width: 100%;
  height: auto;
`;
