import React from 'react';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'></div>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/exchanges' component={Exchanges} />
              <Route
                exact
                path='/cryptocurrencies'
                component={Cryptocurrencies}
              />
              <Route
                exact
                path='/crypto/:id'
                component={CryptoDetails}
              />
              <Route exact path='/news' component={News} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          {/* <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Copyright © 2021
            <Link to='/'>Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
