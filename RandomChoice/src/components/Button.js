import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.div`
  background-color: orangered;
  display: inline-block;
  padding: 13px 20px 10px;
  border-radius: 10px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.2);
  letter-spacing: 3px;
  text-indent: 3px;
  :active {
    border-bottom: 0;
    margin-top: 5px;
  }
`;

const Button = ({ children }) => {
  return <ButtonBlock>{children}</ButtonBlock>;
};

export default Button;
