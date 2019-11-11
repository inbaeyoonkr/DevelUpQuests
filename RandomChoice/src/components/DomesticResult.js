import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Loading from '../components/Loading';
import getRandomNumber from '../lib/getRandomNumber';
import { domesticPlaces } from '../assets/datas/domesticPlaces';

const DomesticResult = ({ region }) => {
  const [info, setInfo] = useState({
    placeRegion: '',
    placeName: '',
    placeUrl: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(region);
    const result = domesticPlaces.filter(place => place.region === region);
    const places = result[0].places;
    const max_length = places.length;
    const rand_num = getRandomNumber(max_length);

    setInfo({
      placeRegion: region,
      placeName: places[rand_num].name,
      placeUrl: places[rand_num].url
    });

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [region]);
  return (
    <ResultBlock>
      {loading ? (
        <Loading />
      ) : (
        <Card className='card'>
          <Card.Header>
            <Card.Title>
              <b>{info.placeName}</b>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>자세한 내용은 아래 버튼을 클릭해주세요</Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href={info.placeUrl} target={'_blank'}>
              <div className='button'>클릭</div>
            </a>
          </Card.Footer>
        </Card>
      )}
    </ResultBlock>
  );
};

export default DomesticResult;

const ResultBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card {
    margin-top: 80px;
    width: 20rem;
    letter-spacing: 5px;
    text-indent: 5px;
    .button {
      background-color: #ced4da;
      color: black;
      width: 100px;
      height: auto;
      margin: 0 auto;
      text-align: center;
      padding: 5px 10px;
      border-radius: 10px;
      border-bottom: 5px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;

      :active {
        margin-top: 5px;
        border: none;
      }
    }
  }
`;
