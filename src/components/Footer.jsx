import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
        Copyright &copy; 2022
        <Link to='/'> CryptoHub Inc.</Link> <br />
        <Link to='/'>All Rights Reserved.</Link>
      </Typography.Title>
      <Space>
        <Link to='/home'>Home</Link>
        <Link to='/exchanges'>Exchanges</Link>
        <Link to='/news'>News</Link>
      </Space>
    </>
  )
}

export default Footer