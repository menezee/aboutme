import React, {useState, useEffect} from 'react';
import {Icon, Menu} from 'antd';
import {NavLink, withRouter} from 'react-router-dom';
const Item = Menu.Item;

function Header(props) {

  const [current, setCurrent] = useState();

  useEffect(function () {
    const {pathname} = props.history.location;
    setCurrent(pathname);
  }, []);

  const handleClick = (e) => {
    setCurrent(e.key)
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Item key="/aboutme">
        <NavLink to="/aboutme">
          <Icon type="aliwangwang"/>Who am I
        </NavLink>
      </Item>
      <Item key="/doing">
        <NavLink to="/doing">
          <Icon type="appstore"/>What I've been doing
        </NavLink>
      </Item>
      <Item key="/contact">
        <NavLink to="/contact">
          <Icon type="appstore"/>Get in touch
        </NavLink>
      </Item>
      <Item key="/lock" disabled>
        <Icon type="lock"/>vip
      </Item>
    </Menu>
  );
}

export default withRouter(Header);
