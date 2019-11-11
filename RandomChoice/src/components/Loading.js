import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <LoadingBlock>
      <Spinner className='spinner' animation='border' variant='success' />
      <div className='text'>조금만 기다려주세요</div>
    </LoadingBlock>
  );
};

const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .spinner {
    margin-top: 150px;
  }
  .text {
    margin-top: 30px;
  }
`;

export default Loading;
