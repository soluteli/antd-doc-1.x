import React from 'react'
import { Menu, Dropdown, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

export const Basic = () => {

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" href="http://www.tmall.com/">第三个菜单项</a>
      </Menu.Item>
    </Menu>
  );

  return <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      触发链接 <Icon type="down" />
    </a>
  </Dropdown>
}

export const DropDownButton = () => {
  function handleButtonClick(e) {
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">第一个菜单项</Menu.Item>
      <Menu.Item key="2">第二个菜单项</Menu.Item>
      <Menu.Item key="3">第三个菜单项</Menu.Item>
    </Menu>
  );
 
  return <div>
    <Dropdown.Button onClick={handleButtonClick} overlay={menu} type="ghost">
      某功能按钮
    </Dropdown.Button>
    <Dropdown overlay={menu}>
      <Button type="ghost" style={{ marginLeft: 8 }}>
        按钮 <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
}

export const Event = () => {
  const onClick = function ({ key }) {
    console.log(`点击了菜单${key}`);
  };
  
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">第一个菜单项</Menu.Item>
      <Menu.Item key="2">第二个菜单项</Menu.Item>
      <Menu.Item key="3">第三个菜单项</Menu.Item>
    </Menu>
  );

  return <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      鼠标移入，点击菜单 <Icon type="down" />
    </a>
  </Dropdown>
}

export const Item = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" href="http://www.alipay.com/">第一个菜单项</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" href="http://www.taobao.com/">第二个菜单项</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>第三个菜单项（不可用）</Menu.Item>
    </Menu>
  );
  return <Dropdown overlay={menu}>
  <a className="ant-dropdown-link" href="#">
    鼠标移入 <Icon type="down" />
  </a>
</Dropdown>
}

export const OverlayVisible = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  handleMenuClick(e) {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  },
  handleVisibleChange(flag) {
    this.setState({ visible: flag });
  },
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">点我不会关闭菜单</Menu.Item>
        <Menu.Item key="2">点我还是不会关闭菜单</Menu.Item>
        <Menu.Item key="3">点我才会关闭菜单</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" href="#">
          鼠标移入 <Icon type="down" />
        </a>
      </Dropdown>
    );
  },
});

export const Sub = () => {
  const menu = (
    <Menu>
      <Menu.Item>第一个菜单项</Menu.Item>
      <Menu.Item>第二个菜单项</Menu.Item>
      <SubMenu title="子菜单">
        <Menu.Item>第三个菜单项</Menu.Item>
        <Menu.Item>第四个菜单项</Menu.Item>
      </SubMenu>
    </Menu>
  );
  
  return  <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        多级菜单 <Icon type="down" />
      </a>
    </Dropdown>
}


export const Trigger = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">第一个菜单项</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">第二个菜单项</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">第三个菜单项</Menu.Item>
    </Menu>
  );
  return <div>
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" href="#">
        点击触发 <Icon type="down" />
      </a>
    </Dropdown>
  </div>
}