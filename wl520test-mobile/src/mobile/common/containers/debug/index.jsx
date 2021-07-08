import React, { Component } from 'react';
import { Input, Button, } from 'antd';
import { handleEnvAddress, } from '@utils';

import './index.less';

const { TextArea } = Input;
const http = "http://"
export class index extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {
      value: `${http}xing.test.utools.club/workbench/login`,
      // value: 'http://xing.test.utools.club/workbench/login',
    }
  }

  onChange = (value) => {
    console.log('e :>> ', value);
    this.setState({
      value
    })
  }

  onPressEnter = (e) => {
    const { value } = this.state
    window.location.href = value;
  }
  render() {
    const { value } = this.state
    return (
      <div className="debug-layout">
        <TextArea
          autoSize
          className="debug-layout-input-layout"
          placeholder="输入调试地址"
          defaultValue={value}
          onChange={(e) => this.onChange(e.target.value)}
          onPressEnter={this.onPressEnter}
        />
        <Button type="primary" onClick={this.onPressEnter}>
          Primary Button
        </Button>
      </div>
    )
  }
}

export default index
