import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ProfileOutlined, FileProtectOutlined } from '@ant-design/icons';

const Nav = () => {
  const [selected, setSelected] = useState('public');
  const location = useLocation();

  useEffect(() => {
    const currentPage = location.pathname.split("/")[1];
    setSelected(currentPage ? currentPage : 'public');
  }, [location]);

  const navLinks = [
    {
      key: "public",
      label: (
        <Link to="/">
          <HomeOutlined />
          Home
        </Link>
      ),
    },
    {
      key: "profile",
      label: (
        <Link to="/profile">
          <ProfileOutlined />
          Profile
        </Link>
      ),
    },
    {
      key: "protected",
      label: (
        <Link to="/protected">
          <FileProtectOutlined />
          Protected
        </Link>
      ),
    },
    {
      key: "public608",
      label: (
        <Link to="/public608">
          <FileProtectOutlined /> {/* You can change this to any icon you like */}
           Public608
        </Link>
      )
    }
  ];

  return (
    <div>
      <Menu items={navLinks} selectedKeys={[selected]} mode="horizontal" />
      <Outlet />
    </div>
  );
};

export default Nav;
