import React, { Component } from 'react';

import { Menu, Button } from 'antd';
import {
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined,
} from '@ant-design/icons';

import menuList from '../../config/menuConfig'

const { SubMenu } = Menu;

class Nav extends Component {
    constructor(params) {
        super(params)

        this.state = {
            list: []
        }

        this.createMenu = this.createMenu.bind(this)
    }

    createMenu(_config) {
        let _list = _config.map((item, index) => {
            if (item.children) {
                return (
                    <SubMenu key={item.path} icon={item.icon} title={item.title}>
                        {this.createMenu(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.path} icon={item.icon}>
                        <span>{item.title}</span>
                    </Menu.Item>
                )
            }
        })

        return _list
    }

    componentWillMount() {
        let list = this.createMenu(menuList)
        this.setState({
            list
        })
    }

    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                    >
                        {this.state.list}
                    {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        Option 3
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>
            </div>
        );
    }
}

export default Nav;