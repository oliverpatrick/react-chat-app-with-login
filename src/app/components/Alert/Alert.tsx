import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { XIcon } from '@heroicons/react/solid';
import { AlertExit } from './AlertExit';

interface AlertProps {
  text: string;
}

export default function Alert({ text }: AlertProps): ReactElement {
  return (
    <AlertWrapper>
      <p>{text}</p>
      <AlertExit>
        <XIcon />
      </AlertExit>
    </AlertWrapper>
  );
}

export const AlertWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #910000;
  border: 1px solid red;

  p {
    font-size: 1.5rem;
    color: #f4f4f4;
  }
`;
