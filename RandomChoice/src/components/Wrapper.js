import React from 'react';
import styled from 'styled-components';

const WrapperBlock = styled.div`
  border: 3px solid black;
  border-radius: 3px;
  background-color: white;
  width: 1000px;
  height: 600px;
  margin: 100px auto;
`;

const Wrapper = ({ children }) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

export default Wrapper;
