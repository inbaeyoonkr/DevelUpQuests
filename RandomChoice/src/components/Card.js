import React from 'react';
import styled from 'styled-components';

const CardBlock = styled.div`
  width: 200px;
  height: 300px;
  background-color: #ebfbee;
  margin: 0 30px;
  border: 5px solid #8ce99a;
  border-radius: 10px;
  cursor: pointer;
  :active {
    border: none;
    padding: 5px;
  }
  .title {
    text-align: center;
    background-color: #b2f2bb;
    padding: 10px 0;
    font-size: 30px;
    text-indent: 5px;
    letter-spacing: 5px;
    font-weight: 100;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  img {
    width: 100px;
    height: 100px;
    display: block;
    margin: 70px auto;
  }
`;

const Card = ({ title, image }) => {
  return (
    <CardBlock>
      <div className='title'>{title}</div>
      <img src={image} alt='fork' />
    </CardBlock>
  );
};

export default Card;
