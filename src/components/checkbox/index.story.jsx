import React from "react";
import { Checkbox, Button } from "antd";

export const Basic = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return <Checkbox onChange={onChange}>Checkbox</Checkbox>;
};

export const Disabled = () => {
  return (
    <div>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </div>
  );
};

export const Group = () => {
  const CheckboxGroup = Checkbox.Group;

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    { label: "苹果", value: "Apple" },
    { label: "梨", value: "Pear" },
    { label: "橘", value: "Orange" },
  ];
  const optionsWithDisabled = [
    { label: "苹果", value: "Apple" },
    { label: "梨", value: "Pear" },
    { label: "橘", value: "Orange", disabled: false },
  ];
  return (
    <div>
      <CheckboxGroup
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      <br />
      <CheckboxGroup
        options={options}
        defaultValue={["Pear"]}
        onChange={onChange}
      />
      <br />
      <CheckboxGroup
        options={optionsWithDisabled}
        disabled
        defaultValue={["Apple"]}
        onChange={onChange}
      />
    </div>
  );
};

export const Controllered = React.createClass({
  getInitialState() {
    return {
      checked: true,
      disabled: false,
    };
  },
  render() {
    const label = `${this.state.checked ? '选中' : '取消'}-${this.state.disabled ? '不可用' : '可用'}`;
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small"
            onClick={this.toggleChecked}
          >
            {!this.state.checked ? '选中' : '取消'}
          </Button>
          <Button style={{ marginLeft: '10px' }}
            type="primary" size="small"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? '不可用' : '可用'}
          </Button>
        </p>
      </div>
    );
  },
  toggleChecked() {
    this.setState({ checked: !this.state.checked });
  },
  toggleDisable() {
    this.setState({ disabled: !this.state.disabled });
  },
  onChange(e) {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  },
});