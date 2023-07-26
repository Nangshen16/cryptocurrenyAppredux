import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/crypto.jpeg';

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className='logo-container'>
            <Avatar src={icon} size="Large"/>
            <Typography.Title level={3} className="logo">
                <Link to="/">Bitcoin Bay's POS </Link>

            </Typography.Title>

        </div>
    </div>
  )
}

export default Navbar