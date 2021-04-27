import React from 'react'
import { Badge, Button, Icon } from 'antd';
const ButtonGroup = Button.Group
import './style.css'

export const Basic = () => {
  return <Badge count={5}>
    <a href="#" className="head-example"></a>
  </Badge>
}

export const Overflow = () => {
  return <div>
    <Badge count={99} overflowCount={10}>
      <a href="#" className="head-example"></a>
    </Badge>
    <br/>
    <br/>
    <Badge count={1000} overflowCount={999}>
      <a href="#" className="head-example"></a>
    </Badge>
  </div>
}

export const Change = React.createClass({
  getInitialState() {
    return {
      count: 5,
      show: true,
    };
  },
  increase() {
    const count = this.state.count + 1;
    this.setState({ count });
  },
  decline() {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  },
  onClick() {
    this.setState({
      show: !this.state.show,
    });
  },
  render() {
    return (
      <div>
        <Badge count={this.state.count}>
          <a href="#" className="head-example"></a>
        </Badge>
        <Badge dot={this.state.show}>
          <a href="#" className="head-example"></a>
        </Badge>
        <div style={{ marginTop: 10 }}>
          <ButtonGroup>
            <Button type="ghost" onClick={this.decline}>
              <Icon type="minus" />
            </Button>
            <Button type="ghost" onClick={this.increase}>
              <Icon type="plus" />
            </Button>
          </ButtonGroup>
          <Button type="ghost" onClick={this.onClick} style={{ marginLeft: 8 }}>
            切换红点显隐
          </Button>
        </div>
      </div>
    );
  },
});


export const Dot = () => {
  return <div className="demo">
  <Badge dot>
    <Icon type="notification" />
  </Badge>
  <Badge dot>
    <a href="#">一个链接</a>
  </Badge>
</div>
}


export const Link = () => {
  return <a href="#">
    <Badge count={5}>
      <span className="head-example"></span>
    </Badge>
  </a>
}

export const NoWrapper = () => {
  return <div>
    <Badge count={25} />
    <br />
    <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
    <br />
    <Badge count={109} style={{ backgroundColor: '#87d068' }} />
  </div>
}