import React from 'react'
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

export const Basic = () => {
  function callback(key) {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  return (
  <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  )

}

export const Mix = () => {
  function callback(key) {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  return <Collapse onChange={callback} accordion>
  <Panel header={'This is panel header 1'} key="1">
    <Collapse defaultActiveKey="1">
      <Panel header={'This is panel nest panel'} key="1">
        <p>{text}</p>
      </Panel>
    </Collapse>
  </Panel>
  <Panel header={'This is panel header 2'} key="2">
    <p>{text}</p>
  </Panel>
  <Panel header={'This is panel header 3'} key="3">
    <p>{text}</p>
  </Panel>
</Collapse>
  
}


export const Accordion = () => {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  return <Collapse accordion>
    <Panel header={'This is panel header 1'} key="1">
      <p>{text}</p>
    </Panel>
    <Panel header={'This is panel header 2'} key="2">
      <p>{text}</p>
    </Panel>
    <Panel header={'This is panel header 3'} key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
}