import React from "react";
import { Alert } from "antd";

export const Basic = () => {
  return <Alert message="成功提示的文案" type="success" />;
};

export const Closable = () => {
  const onClose = function(e) {
    console.log(e, "我要被关闭啦！");
  };
  return (
    <div>
      <Alert
        message="警告提示的文案"
        type="warning"
        closable
        onClose={onClose}
      />
      <Alert
        message="错误提示的文案"
        description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
        type="error"
        closable
        onClose={onClose}
      />
    </div>
  );
};

export const CloseText = () => {
  return <Alert message="消息提示的文案" type="info" closeText="不再提醒" />;
};

export const Description = () => {
  return (
    <div>
      <Alert
        message="成功提示的文案"
        description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
        type="success"
      />
      <Alert
        message="消息提示的文案"
        description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
        type="info"
      />
      <Alert
        message="警告提示的文案"
        description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
        type="warning"
      />
      <Alert
        message="错误提示的文案"
        description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
        type="error"
      />
    </div>
  );
};

export const Icon = () => {
  return (
    <div>
      <Alert message="成功提示的文案" type="success" showIcon />
      <Alert message="消息提示的文案" type="info" showIcon />
      <Alert message="警告提示的文案" type="warning" showIcon />
      <Alert message="错误提示的文案" type="error" showIcon />
      <Alert
        message="成功提示的文案"
        description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
        type="success"
        showIcon
      />
      <Alert
        message="消息提示的文案"
        description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
        type="info"
        showIcon
      />
      <Alert
        message="警告提示的文案"
        description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
        type="warning"
        showIcon
      />
      <Alert
        message="错误提示的文案"
        description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
        type="error"
        showIcon
      />
    </div>
  );
};

export const Style = () => {
  return (
    <div>
      <Alert message="成功提示的文案" type="success" />
      <Alert message="消息提示的文案" type="info" />
      <Alert message="警告提示的文案" type="warning" />
      <Alert message="错误提示的文案" type="error" />
    </div>
  );
};
