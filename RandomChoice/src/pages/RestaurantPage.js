import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import Wrapper from '../components/Wrapper';
import RestaurantResult from '../components/RestaurantResult';
import { locations } from '../assets/datas/locations';

const FoodPage = () => {
  const [choice, setChoice] = useState({
    complete: false,
    location: {
      en_name: '',
      kor_name: '',
      shortcut: ''
    }
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
      location: {
        en_name: item.en_name,
        kor_name: item.kor_name,
        shortcut: item.shortcut
      }
    });
  };

  const handleSubmit = () => {
    // 선택 완료 상태로 만들기
    if (choice.location.en_name === '') {
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
      location: {
        en_name: '',
        kor_name: '',
        shortcut: ''
      }
    });
  };

  return (
    <Wrapper>
      <FoodPageBlock>
        <div className='header'>
          <div className='header-title'>맛집 랜덤 선택하기</div>
        </div>
        <div className='content'>
          <ListGroup className='content-list'>
            {locations.map(item => (
              <ListGroup.Item
                className='item'
                onClick={() => handleSelect(item)}
                key={item.id}
                item={item}
                action
              >
                {item.kor_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className='content-result'>
            {!choice.complete && choice.location.en_name === '' && (
              <div className='location-default'>지역을 선택하세요</div>
            )}
            {!choice.complete && choice.location.en_name !== '' && (
              <div className='location'>
                <b>{choice.location.kor_name}</b>를
                <br />
                선택하셨습니다
              </div>
            )}
            {choice.complete && <RestaurantResult location={choice.location} />}
          </div>
          {!choice.complete ? (
            <div className='content-button' onClick={handleSubmit}>
              맛집을 선택해줄게요
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
      </FoodPageBlock>
    </Wrapper>
  );
};

export default FoodPage;

const FoodPageBlock = styled.div`
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
