import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import Wrapper from '../components/Wrapper';
import ForeignResult from '../components/ForeignResult';
import { regions } from '../assets/datas/foreignRegions';

const ForeignPage = () => {
  const [choice, setChoice] = useState({
    complete: false,
    region: '',
    regionKorean: ''
  });

  useEffect(() => {
    console.log('choice: ', choice);
  }, [choice]);

  const handleSelect = item => {
    if (choice.complete === true) {
      return;
    }
    setChoice({
      ...choice,
      region: item.region,
      regionKorean: item.kor
    });
  };
  const handleSubmit = () => {
    if (choice.region === '') {
      return;
    }
    setChoice({
      ...choice,
      complete: true
    });
  };
  const handleReSubmit = () => {
    setChoice({
      complete: false,
      region: '',
      regionKorean: ''
    });
  };

  return (
    <Wrapper>
      <ForeignPageBlock>
        <div className='header'>
          <div className='header-title'>해외여행지 랜덤 선택하기</div>
        </div>
        <div className='content'>
          <ListGroup className='content-list'>
            {regions.map((item, id) => (
              <ListGroup.Item
                className='item'
                onClick={() => handleSelect(item)}
                key={id}
                item={item}
                action
              >
                {item.kor}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className='content-result'>
            {!choice.complete && choice.region === '' && (
              <div className='location-default'>지역을 선택하세요</div>
            )}
            {!choice.complete && choice.region !== '' && (
              <div className='location'>
                <b>{choice.regionKorean}</b>를
                <br />
                선택하셨습니다
              </div>
            )}
            {choice.complete && <ForeignResult region={choice.region} />}
          </div>
          {!choice.complete ? (
            <div className='content-button' onClick={handleSubmit}>
              나라를 선택해줄게요
            </div>
          ) : (
            <div className='content-button' onClick={handleReSubmit}>
              재선택하기
            </div>
          )}
        </div>
        <Link to='/choice' style={{ textDecoration: 'none', color: 'black' }}>
          <div className='footer'>
            <div className='footer-content'>선택 페이지로 가기</div>
          </div>
        </Link>
      </ForeignPageBlock>
    </Wrapper>
  );
};

export default ForeignPage;

const ForeignPageBlock = styled.div`
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5fr 1fr;
  }
  .content-list {
    overflow: auto;
    height: 100%;
    grid-column: 1/2;
    grid-row: 1/6;
    .item {
      height: 100px;
      text-align: center;
    }
  }
  .content-result {
    grid-column: 2/2;
    margin: 10px;
    .location-default {
      text-align: center;
      margin-top: 150px;
      font-size: 30px;
      letter-spacing: 5px;
      text-indent: 5px;
    }
    .location {
      text-align: center;
      margin-top: 120px;
      font-size: 30px;
      letter-spacing: 5px;
      text-indent: 5px;
    }
  }
  .content-button {
    background-color: #dee2e6;
    cursor: pointer;
    grid-column: 2/2;
    margin: 10px;
    padding-top: 10px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 5px;
    text-indent: 5px;
    border-bottom: 5px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    :active {
      border-bottom: 0;
      margin-top: 15px;
    }
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
