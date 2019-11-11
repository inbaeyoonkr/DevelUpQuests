import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import forkImage from '../assets/images/fork.png';
import carImage from '../assets/images/car.png';
import airplaneImage from '../assets/images/airplane.png';

const ChoicePage = () => {
  return (
    <Wrapper>
      <ChoicePageBlock>
        <div className='header'>
          <div className='header-title'>원하는 아이템을 선택하세요</div>
        </div>
        <div className='content'>
          <Link
            to='/restaurant'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Card title={'맛집'} image={forkImage} />
          </Link>
          <Link
            to='/domestic'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Card title={'국내여행'} image={carImage} />
          </Link>
          <Link
            to='/foreign'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Card title={'해외여행'} image={airplaneImage} />
          </Link>
        </div>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <div className='footer'>
            <div className='footer-content'>시작 페이지로 가기</div>
          </div>
        </Link>
      </ChoicePageBlock>
    </Wrapper>
  );
};

export default ChoicePage;

const ChoicePageBlock = styled.div`
  width: 100%;
  height: 100%;

  .header {
    height: 13%;
    background-color: #51cf66;
    display: flex;
    justify-content: center;
    align-items: center;
    .header-title {
      display: inline-block;
      font-size: 30px;
      font-weight: 1000;
      letter-spacing: 5px;
      text-indent: 5px;
    }
  }

  .content {
    height: 77%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer {
    height: 10%;
    background-color: #51cf66;
    display: flex;
    justify-content: center;
    align-items: center;
    .footer-content {
      display: inline-block;
      font-size: 20px;
      font-weight: 1000;
      letter-spacing: 5px;
      text-indent: 5px;
    }
  }
`;
