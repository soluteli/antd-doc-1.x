import React from 'react';
import classNames from "classnames";
import { Icon } from "antd";
import './style.css'
export default class IconSet extends React.Component {
  static defaultProps = {
    icons: [],
  }

  render() {
    const listClassName = classNames({
      'anticons-list': true,
      clearfix: true,
    });
    return (
      <ul className={listClassName}>
        {this.props.icons.map((type, i) =>
          <li key={type}>
            <Icon type={type} />
            <span className="anticon-class">{type}</span>
          </li>
        )}
        
      </ul>
    );
  }
}