import React from 'react';
import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SyncLoader color="#ff6384" margin="10px" size='30'/>
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
