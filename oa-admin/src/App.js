import React from 'react';
import './App.css';

import { Row, Col } from 'antd'

import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'

import IRouter from './router'

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={4} className="app-left">
          <Nav/>
        </Col>
        <Col span={20} className="app-right">
          <Header/>
          <IRouter/>
          {/* <Home/>
          <Banner/> */}
        </Col>
      </Row>
    </div>
  );
}

export default App;
