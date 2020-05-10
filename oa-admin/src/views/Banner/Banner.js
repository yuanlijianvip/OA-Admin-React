import React, { Component } from 'react';
import './Banner.css'

import { Table, Divider} from 'antd'

import axios from 'axios'

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: _status => {
          return (
              _status ? <span>上线</span> : <span>下线</span>
          )
      }
    },
    {
      title: '操作',
      key: 'action',
      render: _status =>  (
          <span>
              <a>编辑</a>
              <Divider type="vertical"/>
              <a>上线</a>
              <Divider type="vertical"/>
              <a>下线</a>
              <Divider type="vertical"/>
              <a>删除</a>
          </span>
          )
    },
  ];

  const dataSource = [
    {
      id: '1',
      name: '胡彦斌',
      status: 32,
      address: '西湖区湖底公园1号',
    },
    {
      id: '2',
      name: '胡彦祖',
      status: 42,
      address: '西湖区湖底公园1号',
    },
  ];

class Banner extends Component {
    constructor(params) {
        super(params)

        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {
        axios.get('http://www.xiaoyuantech.com/getBannerList')
        .then(res => {
            console.log(res);
            this.setState({
                dataSource: res.data.list
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div class="banner">
                <Table dataSource={this.state.dataSource} columns={columns} />;
            </div>
        );
    }
}

export default Banner;