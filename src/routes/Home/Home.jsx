import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Home.scss'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;




class Home extends React.Component {

    state = {
        collapsed: false,
    };


    render() {

        return (
            <h1 style={{ textAlign: "center", color: "red" }}>还没写</h1>
        )

    }
}

export default Home;