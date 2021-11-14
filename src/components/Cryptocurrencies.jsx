import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCrypto(filteredData);
  }, [cryptoList, search]);

  if (isFetching) return 'Loading............';
  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input
            placeholder='Search Crypto'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[16, 16]} className='crypto-card-container'>
        {crypto?.map((c) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className='crypto-card'
            key={c.id}
          >
            <Link to={`/crypto/${c.id}`}>
              <Card
                title={`${c.rank}. ${c.name}`}
                extra={
                  <img className='crypto-image' src={c.iconUrl} />
                }
                hoverable
              >
                <p>Price :{millify(c.price)}</p>
                <p>Market Cap :{millify(c.marketCap)}</p>
                <p>Daily Change :{millify(c.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
