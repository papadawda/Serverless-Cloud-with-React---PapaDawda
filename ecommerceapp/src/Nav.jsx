/* src/Nav.js */
import React, { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeOutlined, UserOutlined, ProfileOutlined } from '@ant-design/icons'
import { Hub } from 'aws-amplify'
import checkUser from './checkUser'

const getNavLinks = (isAdmin) => {
    const navlinks = [
        {
            key: 'Home',
            label: (
                <Link to="/">
                    <HomeOutlined/>
                    Home
                </Link>
            )
        },
        {
            key: 'profile',
            label: (
                <Link to="/">
                    <ProfileOutlined/>
                    Profile
                </Link>
            )
        }
    ]
    if (isAdmin) {
        navlinks.push({
            key: 'admin',
            label: (
                <Link to="/admin">
                    <ProfileOutlined/>
                    Admin
                </Link>
            )
        })
    }

    return navlinks;
}


const Nav = () => {
  const { selectedPage, setSelectedPage } = useState('home');
  const location = useLocation();

  const [user, updateUser] = useState({})

  useEffect(() => {
//
    checkUser(updateUser)
    Hub.listen('auth', (data) => {
      const { payload: { event } } = data;
      console.log('event: ', event)
      if (event === 'signIn' || event === 'signOut') checkUser(updateUser)
    })

    const currentPage = location.pathname.split('/')[1];
    console.log('Current Page is: ',location)
    setSelectedPage(currentPage ? currentPage : 'home')

  }, [location])

  return (
    <>
      <Menu items={getNavLinks(user.isAuthorized)} selectedKeys={[selectedPage]} mode="horizontal"/>
        <Outlet/>
   </>
  )
}

export default Nav