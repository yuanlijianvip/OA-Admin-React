import React, { Component } from 'react';

import axios from 'axios'

class Banner extends Component {

    componentDidMount() {
        axios.get('http://www.xiaoyuantech.com/getBannerList')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                Banner
            </div>
        );
    }
}

export default Banner;