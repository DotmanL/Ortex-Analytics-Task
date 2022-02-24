import React from 'react';
import { css } from '@emotion/react';
import HashLoader from 'react-spinners/HashLoader';

const override = css`
  height: 100vh;
  border-color: #39ada8;
  @media screen and (max-width: 800px) {
    margin-top: 0vh;
  }
`;
const Spinner: React.FC = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
  }}
  >
    <HashLoader css={override} size={100} color="#39ada8" />
  </div>
);

export default Spinner;
