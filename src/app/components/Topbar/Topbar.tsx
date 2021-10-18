import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export default function Topbar({}: Props): ReactElement {
  return (
    <TopbarContainer>
      <div className="back-icon"></div>
    </TopbarContainer>
  );
}

const TopbarContainer = styled.div`
  width: 100%;
  height: 3rem;
  background-color: red;
`;
