import React from 'react'

import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies } from '.';
import { News } from '.';
import Loader from './Loader';


const { Title } = Typography;

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);

  if(isFetching) return <Loader />

  const { data: { stats } } = data

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={stats?.total} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchanges' value={millify(stats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value={millify(stats.totalMarketCap)} />
        </Col> 
         <Col span={12}>
          <Statistic title='Total 24h Volume' value={millify(stats.total24hVolume)} />
        </Col>
         <Col span={12}>
          <Statistic title='Total' value={millify(stats.totalMarkets)} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  )
} 

export default Homepage