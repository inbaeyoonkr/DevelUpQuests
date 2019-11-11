import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

const IntroductionPage = () => {
  return (
    <Wrapper>
      <IntroductionPageBlock>
        <h1>
          선택을 도와드릴게요 <br />
          사랑만 하세요 <br />
          ❤️
        </h1>

        <Link to='/choice' style={{ textDecoration: 'none', color: 'white' }}>
          <Button>시작하기</Button>
        </Link>
      </IntroductionPageBlock>
    </Wrapper>
  );
};

export default IntroductionPage;

const IntroductionPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 160px 0;
    text-align: center;
    letter-spacing: 5px;
    text-indent: 5px;
  }
`;
