import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Loading from '../components/Loading';
import getRandomNumber from '../lib/getRandomNumber';

const RestaurantResult = ({ location }) => {
  const url = `http://openapi.${location.en_name}:8088/644f5065566962793636474968446e/json/${location.shortcut}ModelRestaurantDesignate/1/100/`;

  const [info, setInfo] = useState({
    name: '',
    addr: '',
    main_menu: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(result => {
        const idx = getRandomNumber(100);
        const data =
          result.data[`${location.shortcut}ModelRestaurantDesignate`].row[idx];
        console.log(data);
        setInfo({
          name: data.UPSO_NM,
          addr: data.SITE_ADDR_RD,
          main_menu: data.MAIN_EDF
        });
      })
      .catch(e => console.log(e));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.shortcut, url]);

  return (
    <ResultBlock>
      {loading ? (
        <Loading />
      ) : (
        <Card className='card'>
          <Card.Header>
            <Card.Title>{info.name}</Card.Title>
            <Card.Subtitle>{info.addr}</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {info.main_menu ? `${info.main_menu} 전문입니다` : '다 맛있어요'}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </ResultBlock>
  );
};

const ResultBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card {
    margin-top: 120px;
    width: 20rem;
    letter-spacing: 5px;
    text-indent: 5px;
  }
`;

export default RestaurantResult;
