import React from 'react'
import { Cascader } from "antd";

const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];


export const Basic =  function () {
  
  function onChange(value) {
    console.log(value);
  }
  return <div style={{position: 'relative'}}>
    <Cascader options={options} onChange={onChange} placeholder="请选择地区" />
  </div>
}

export const ChangeOnSelect =  function () {
  
  function onChange(value) {
    console.log(value);
  }
  return <div style={{position: 'relative'}}>
    <Cascader options={options} onChange={onChange} changeOnSelect placeholder="请选择地区" />
  </div>
}

export const CustomRender = function () {

  const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
        code: 752100,
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
        code: 453400,
      }],
    }],
  }];
  
  function handleAreaClick(e, label, option) {
    e.stopPropagation();
    console.log('点击了', label, option);
  }
  
  const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });
  return <div style={{position: 'relative'}}>
    <Cascader
      options={options}
      defaultValue={['zhejiang', 'hangzhou', 'xihu']}
      displayRender={displayRender}
      style={{ width: 200 }}
    />
  </div>
}

export const CitySwitcher = React.createClass({
  getInitialState() {
    return {
      text: '未选择',
    };
  },
  onChange(value, selectedOptions) {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  },
  render() {
    return (
      <span>
        {this.state.text}
        &nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a href="#">切换城市</a>
        </Cascader>
      </span>
    );
  },
});


export const DefaultValue = () => {
  function onChange(value) {
    console.log(value);
  }
  return <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />
}

export const DisabledOption = () => {
  const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    disabled: true,
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }];
  
  function onChange(value) {
    console.log(value);
  }

  return <Cascader options={options} onChange={onChange} />
}


export const Hover = () => {
  const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }];
  
  function onChange(value) {
    console.log(value);
  }
  
  // 只展示最后一项
  function displayRender(label) {
    return label[label.length - 1];
  }

  return <Cascader options={options} expandTrigger="hover"
    displayRender={displayRender} onChange={onChange}
  />
}

export const Size = () => {
  function onChange(value) {
    console.log(value);
  }

  return <div>
    <Cascader size="large" options={options} onChange={onChange} /><br /><br />
    <Cascader options={options} onChange={onChange} /><br /><br />
    <Cascader size="small" options={options} onChange={onChange} /><br /><br />
  </div>
}

