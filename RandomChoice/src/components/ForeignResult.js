import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Loading from '../components/Loading';
import getRandomNumber from '../lib/getRandomNumber';

const ForeignResult = ({ region }) => {
  const [country, setCountry] = useState({
    name: '',
    flag: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(result => {
        console.log(result);
        const idx = getRandomNumber(result.data.length);

        setCountry({
          name: result.data[idx].name,
          flag: result.data[idx].flag
        });
      })
      .catch(e => console.log(e));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [region]);

  return (
    <ResultBlock>
      {loading ? (
        <Loading />
      ) : (
        <Card className='card'>
          <Card.Header>
            <Card.Title>{country.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Img className='img' src={country.flag}></Card.Img>
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              입국허가 기간 및 조건 확인 후
              <br />
              즐거운 여행을 떠나세요 ✈️✈️✈️
            </Card.Text>
          </Card.Footer>
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
    margin-top: 20px;
    width: 21rem;
    letter-spacing: 5px;

    .img {
      height: 10rem;
      border: 1px solid black;
    }
  }
`;
export default ForeignResult;
