import React from 'react'

import { Switch, Button, Icon } from 'antd';


export const Basic = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return <Switch defaultChecked={false} onChange={onChange} />
}

export const Disable = React.createClass({
  getInitialState() {
    return {
      disabled: true,
    };
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  render() {
    return (
      <div>
        <Switch disabled={this.state.disabled} />
        <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
      </div>
    );
  },
});

export const Size = () => {
  return <div>
    <Switch />
    <Switch size="small" />
  </div>
}

export const Text = () => {
  return <div>
    <Switch checkedChildren="开" unCheckedChildren="关" />
    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
  </div>
}