import React from 'react'

import { Slider, Icon, InputNumber, Row, Col } from 'antd';

import './style.css'

export const Basic = () => (
  <div>
    <Slider defaultValue={30} />
    <Slider range defaultValue={[20, 50]} />
    <Slider range defaultValue={[20, 50]} disabled />
  </div>
)

export const IconSlider = () => {
  const S = React.createClass({
    getInitialState() {
      const max = this.props.max;
      const min = this.props.min;
      const mid = ((max - min) / 2).toFixed(5);
      return {
        preIconClass: this.props.value >= mid ? '' : 'anticon-highlight',
        nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '',
        mid,
        sliderValue: this.props.value,
      };
    },
  
    handleChange(v) {
      this.setState({
        preIconClass: v >= this.state.mid ? '' : 'anticon-highlight',
        nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '',
        sliderValue: v,
      });
    },
  
    render() {
      return (
        <div className="iconWrapper">
          <Icon className={this.state.preIconClass} type={this.props.icon[0]} />
          <Slider {...this.props} onChange={this.handleChange} value={this.state.sliderValue} />
          <Icon className={this.state.nextIconClass} type={this.props.icon[1]} />
        </div>
      );
    },
  });
  return <S min={0} max={20} value={0} icon={['frown', 'smile']} />
}

export const InputN = () => {

  const IntegerStep = React.createClass({
    getInitialState() {
      return {
        inputValue: 1,
      };
    },
    onChange(value) {
      this.setState({
        inputValue: value,
      });
    },
    render() {
      return (
        <Row>
          <Col span={12}>
            <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <InputNumber min={1} max={20} style={{ marginLeft: '16px' }}
              value={this.state.inputValue} onChange={this.onChange}
            />
          </Col>
        </Row>
      );
    },
  });
  
  const DecimalStep = React.createClass({
    getInitialState() {
      return {
        inputValue: 0,
      };
    },
    onChange(value) {
      this.setState({
        inputValue: value,
      });
    },
    render() {
      return (
        <Row>
          <Col span={12}>
            <Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
          </Col>
          <Col span={4}>
            <InputNumber min={0} max={1} style={{ marginLeft: '16px' }} step={0.01}
              value={this.state.inputValue} onChange={this.onChange}
            />
          </Col>
        </Row>
      );
    },
  });

  return  (<div>
      <IntegerStep />
      <DecimalStep />
    </div>
  )
}

export const Mark = () => {
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: 'red',
      },
      label: <strong>100°C</strong>,
    },
  };

  return (
    <div>
      <p>包含关系</p>
      <Slider marks={marks} defaultValue={37} />
      <br />
      <Slider range marks={marks} defaultValue={[26, 37]} />
      <p>并列关系</p>
      <Slider marks={marks} included={false} defaultValue={37} />
      <p>结合 step</p>
      <Slider marks={marks} step={10} defaultValue={37} />
      <p>`step=null`</p>
      <Slider marks={marks} step={null} defaultValue={37} />
      <br />
    </div>
  )
}

export const TipFormat = () => {
  function formatter(value) {
    return `${value}%`;
  }

  return (<div>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </div>)
  
}