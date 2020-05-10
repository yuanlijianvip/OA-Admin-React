import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <p className="home-name">hello</p>
                <h1 className="home-title">欢迎来到小猿课堂后台管理系统</h1>
                <div className="home-wrapper">
                    <img src="/imgs/react.jpg"/>
                </div>
            </div>
        );
    }
}

export default Home;