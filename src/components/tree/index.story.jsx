import React from 'react'

import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

export const Basic = React.createClass({
  getDefaultProps() {
    return {
      keys: ['0-0-0', '0-0-1'],
    };
  },
  getInitialState() {
    const keys = this.props.keys;
    return {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
    };
  },
  onSelect(info) {
    console.log('selected', info);
  },
  onCheck(info) {
    console.log('onCheck', info);
  },
  render() {
    return (
      <Tree className="myCls" showLine checkable
        defaultExpandedKeys={this.state.defaultExpandedKeys}
        defaultSelectedKeys={this.state.defaultSelectedKeys}
        defaultCheckedKeys={this.state.defaultCheckedKeys}
        onSelect={this.onSelect} onCheck={this.onCheck}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0" disabled>
            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
            <TreeNode title="leaf" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  },
});

export const Controlled = () => {
  const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const Demo = React.createClass({
  getInitialState() {
    return {
      expandedKeys: ['0-0-0', '0-0-1'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
    };
  },
  onExpand(expandedKeys) {
    console.log('onExpand', arguments);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded chilren keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  },
  onCheck(checkedKeys) {
    this.setState({
      checkedKeys,
      selectedKeys: ['0-3', '0-4'],
    });
  },
  onSelect(selectedKeys, info) {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  },
  render() {
    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.key} />;
    });
    return (
      <Tree
        checkable
        onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck} checkedKeys={this.state.checkedKeys}
        onSelect={this.onSelect} selectedKeys={this.state.selectedKeys}
      >
        {loop(gData)}
      </Tree>
    );
  },
});
return <Demo />
}

export const Draggable = () => {
  const x = 3;
  const y = 2;
  const z = 1;
  const gData = [];
  
  const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;
  
    const children = [];
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({ title: key, key });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(level, key, tns[index].children);
    });
  };
  generateData(z);
  
  const Demo = React.createClass({
    getInitialState() {
      return {
        gData,
        expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
      };
    },
    onDragEnter(info) {
      console.log(info);
      // expandedKeys 需要受控时设置
      // this.setState({
      //   expandedKeys: info.expandedKeys,
      // });
    },
    onDrop(info) {
      console.log(info);
      const dropKey = info.node.props.eventKey;
      const dragKey = info.dragNode.props.eventKey;
      // const dragNodesKeys = info.dragNodesKeys;
      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...this.state.gData];
      let dragObj;
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      if (info.dropToGap) {
        let ar;
        let i;
        loop(data, dropKey, (item, index, arr) => {
          ar = arr;
          i = index;
        });
        ar.splice(i, 0, dragObj);
      } else {
        loop(data, dropKey, (item) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj);
        });
      }
      this.setState({
        gData: data,
      });
    },
    render() {
      const loop = data => data.map((item) => {
        if (item.children && item.children.length) {
          return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;
        }
        return <TreeNode key={item.key} title={item.key} />;
      });
      return (
        <Tree
          defaultExpandedKeys={this.state.expandedKeys}
          draggable
          onDragEnter={this.onDragEnter}
          onDrop={this.onDrop}
        >
          {loop(this.state.gData)}
        </Tree>
      );
    },
  });

  return <Demo />
}

export const Dynamic = () => {
  function generateTreeNodes(treeNode) {
    const arr = [];
    const key = treeNode.props.eventKey;
    for (let i = 0; i < 3; i++) {
      arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
    }
    return arr;
  }
  
  function setLeaf(treeData, curKey, level) {
    const loopLeaf = (data, lev) => {
      const l = lev - 1;
      data.forEach((item) => {
        if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
          curKey.indexOf(item.key) !== 0) {
          return;
        }
        if (item.children) {
          loopLeaf(item.children, l);
        } else if (l < 1) {
          item.isLeaf = true;
        }
      });
    };
    loopLeaf(treeData, level + 1);
  }
  
  function getNewTreeData(treeData, curKey, child, level) {
    const loop = (data) => {
      if (level < 1 || curKey.length - 3 > level * 2) return;
      data.forEach((item) => {
        if (curKey.indexOf(item.key) === 0) {
          if (item.children) {
            loop(item.children);
          } else {
            item.children = child;
          }
        }
      });
    };
    loop(treeData);
    setLeaf(treeData, curKey, level);
  }
  
  const Demo = React.createClass({
    getInitialState() {
      return {
        treeData: [],
      };
    },
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          treeData: [
            { name: 'pNode 01', key: '0-0' },
            { name: 'pNode 02', key: '0-1' },
            { name: 'pNode 03', key: '0-2', isLeaf: true },
          ],
        });
      }, 100);
    },
    onSelect(info) {
      console.log('selected', info);
    },
    onLoadData(treeNode) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const treeData = [...this.state.treeData];
          getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
          this.setState({ treeData });
          resolve();
        }, 1000);
      });
    },
    render() {
      const loop = data => data.map((item) => {
        if (item.children) {
          return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
        }
        return <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;
      });
      const treeNodes = loop(this.state.treeData);
      return (
        <Tree onSelect={this.onSelect} loadData={this.onLoadData}>
          {treeNodes}
        </Tree>
      );
    },
  });
  return <Demo />
}