import React from 'react'
import { Radio, Button, Input } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export const Basic = () => {
  return <Radio>Radio</Radio>
}

export const Disable = React.createClass({
  getInitialState() {
    return {
      disabled: true,
    };
  },
  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  render() {
    return (
      <div>
        <Radio defaultChecked={false} disabled={this.state.disabled}>不可用</Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>不可用</Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </div>
    );
  },
});

export const ARadioButton = () => {
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  return (
    <div>
  <div>
    <RadioGroup onChange={onChange} defaultValue="a">
      <RadioButton value="a">杭州</RadioButton>
      <RadioButton value="b">上海</RadioButton>
      <RadioButton value="c">北京</RadioButton>
      <RadioButton value="d">成都</RadioButton>
    </RadioGroup>
  </div>
  <div style={{ marginTop: 16 }}>
    <RadioGroup onChange={onChange} defaultValue="a">
      <RadioButton value="a">杭州</RadioButton>
      <RadioButton value="b" disabled>上海</RadioButton>
      <RadioButton value="c">北京</RadioButton>
      <RadioButton value="d">成都</RadioButton>
    </RadioGroup>
  </div>
  <div style={{ marginTop: 16 }}>
    <RadioGroup disabled onChange={onChange} defaultValue="a">
      <RadioButton value="a">杭州</RadioButton>
      <RadioButton value="b">上海</RadioButton>
      <RadioButton value="c">北京</RadioButton>
      <RadioButton value="d">成都</RadioButton>
    </RadioGroup>
  </div>
</div>
  )
}

export const Group = React.createClass({
  getInitialState() {
    return {
      value: 1,
    };
  },
  onChange(e) {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  },
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio key="a" value={1}>A</Radio>
        <Radio key="b" value={2}>B</Radio>
        <Radio key="c" value={3}>C</Radio>
        <Radio key="d" value={4}>D</Radio>
      </RadioGroup>
    );
  },
});
export const GroupMore = React.createClass({
  getInitialState() {
    return {
      value: 1,
    };
  },
  onChange(e) {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  },
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} key="a" value={1}>Option A</Radio>
        <Radio style={radioStyle} key="b" value={2}>Option B</Radio>
        <Radio style={radioStyle} key="c" value={3}>Option C</Radio>
        <Radio style={radioStyle} key="d" value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </RadioGroup>
    );
  },
});