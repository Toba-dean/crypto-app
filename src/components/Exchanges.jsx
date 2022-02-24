import { Collapse, Row, Col, Typography, Avatar } from "antd"

import { useGetExchangesQuery } from '../services/cryptoApi';

import millify from 'millify';
import HTMLReactParser from 'html-react-parser';

import Loader from "./Loader";


const { Text } = Typography
const { Panel } = Collapse;

const Exchanges = () => {

  const { data, isFetching } = useGetExchangesQuery();
  const exchanges = data?.data?.exchanges;
  if(isFetching) return <Loader />
  

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>Rank</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {
          exchanges?.map(exchange => (
            <Col span={24}>
              <Collapse>
                <Panel
                  key={exchange.uuid}
                  showArrow={false}
                  header={(
                    <Row key={exchange.uuid}>
                      <Col style={{ width: "18.9vw" }}>
                        <Text><strong>{exchange.rank}.</strong></Text>
                        <Avatar className="exchange-image" src={exchange.iconUrl} />
                        <Text><strong>{exchange.name}</strong></Text>
                      </Col>
                      <Col style={{ width: "18.9vw" }}>{exchange.rank}</Col>
                      <Col style={{ width: "18.9vw" }}>{millify(exchange.numberOfMarkets)}</Col>
                      <Col style={{ width: "18.9vw" }}>{millify(exchange.marketShare)}%</Col>
                    </Row>
                  )}
                >
                  {HTMLReactParser(exchange.description || '')}
                </Panel>
              </Collapse>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default Exchanges