import React, { Component } from 'react';
import { Link } from "react-router-dom";
import intl from 'react-intl-universal';
import { Show } from "../../components/Icon";
import { InputItem, Checkbox } from 'antd-mobile'
import { getDomainPrefix } from '@utils';
const DOMAIN_PREFIX = getDomainPrefix();
class EmailPwdComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTel: false,
      isShow: false,
      username: '',
      password: '',
      showRememberPwd: props?.data?.showRememberPwd,
      isRemeberMe: false
    }
  }
  setUsername = e => {
    this.setState({
      username: e,
    })
  }
  setPassword = e => {
    this.setState({
      password: e
    })
  }
  showPassword = () => {
    const { isShow } = this.state
    this.setState({
      isShow: !isShow,
    })
  }
  getChildData = () => {
    // 返回子组件账号密码
    const {username, password, isRemeberMe} = this.state
    return {type: 2, username: username.replace(/\s*/g,""), password, isRemeberMe }
  }
  // 记住我
  remeberChange = e => {
    this.setState({isRemeberMe: e?.target?.checked})
  }
  componentDidMount() {
    this.props.getChild(this)
    // 判断是否记住密码，如果是，显示出用户名+密码
    const isRemeberMe = window.localStorage.getItem("isRemeberMe")
    if(isRemeberMe) {
      const username = window.localStorage.getItem("loginUser")
      const password = mtl.getStorageSync({key: 'password'})
      this.setState({isRemeberMe, username, password})
    }
  }
  render() {
    const { isShow, username, password, showRememberPwd, isRemeberMe } = this.state
    return (
      <div className="form">
        <div className={"line"}>
          <InputItem
            className={"long-input"}
            type= "text"
            bordered={false}
            placeholder={intl.get("email")}
            value={username}
            onChange={this.setUsername}
          />
        </div>
        <div className={"line"}>
          <InputItem
            className={"long-input"}
            type={isShow ? "text" : "password"}
            placeholder={intl.get("pwd")}
            value={password}
            onChange={this.setPassword}
          />
          <Show isShow={isShow} onClick={this.showPassword}></Show>
        </div>
        <div className={"pwd-rem-find"}>
          <span className={"pwd-rem-find-remeber"}>
            {
              showRememberPwd===1?(
              <Checkbox.CheckboxItem checked={isRemeberMe} className="remeber-pwd" onChange={(e) => this.remeberChange(e)} >
                <span style={{fontSize: '0.28rem',color: '#8b8888'}}>{intl.get("remeberMe")}</span>
              </Checkbox.CheckboxItem>):null
            }
          </span>
          {/* 忘记密码 */}
          {/* <Link className={"yo-link pwd-rem-find-forget"} to={`${DOMAIN_PREFIX}/workbench/findPwd`}>{intl.get("forgetPwd")}</Link> */}
        </div>
      </div>
    )
  }
}
export default EmailPwdComp