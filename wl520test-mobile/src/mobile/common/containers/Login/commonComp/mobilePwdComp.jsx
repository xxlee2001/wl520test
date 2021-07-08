import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import mtl from "mtl-js-sdk";
import { getDomainPrefix } from '@utils';
import PropTypes from 'prop-types'
import intl from 'react-intl-universal';
import { Show, Triangle, Change } from "../../components/Icon";
import { InputItem, Checkbox } from 'antd-mobile'
import { tsetEmail, formatPhone } from '../../../utils/index'

const DOMAIN_PREFIX = getDomainPrefix();
class MobilePwdComp extends Component {
  static propTypes = {
    regionCode: PropTypes.string,
  }
  static defaultProps = {
    regionCode: '+86',
  }
  constructor(props) {
    super(props)
    this.state = {
      isTel: true,
      regionCode: props.regionCode,
      isShow: false,
      username: '',
      password: '',
      showRememberPwd: props?.data?.showRememberPwd,
      isRemeberMe: false
    }
  }
  setUsername = e => {
    if(e.trim() === '') {
      this.setState({
        password: ''
      })
    }
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
    const { username, password, isRemeberMe, isTel, regionCode } = this.state
    return { type: 0, username: username.replace(/\s*/g, ""), password, isRemeberMe, isTel, regionCode }
  }
  // 记住我
  remeberChange = e => {
    this.setState({ isRemeberMe: e.target.checked })
  }
  // 切换登陆方式
  userNameChange = () => {
    this.setState({
      isTel: !this.state.isTel,
      username: '',
      password: ''
    })
  };
  componentDidMount() {
    // props 中的 regionCode ,用来判断和记住密码的是否相同,不同表示重新选择
    // const  propRegionCode  = this?.props?.regionCode
    this.props.getChild(this)
    // 判断是否记住密码，如果是，显示出用户名+密码
    const isRemeberMe = window.localStorage.getItem("isRemeberMe")
    // 通过region 选择的
    const regionchangeCode = window.localStorage.getItem("regionchangeCode")
    if(isRemeberMe) {
      let username = window.localStorage.getItem("loginUser")
      let isTel = true
      let {regionCode} = this.state
      // 判断是邮箱还是手机号
      if(tsetEmail(username.trim())){
        // 邮箱
        isTel = false
      }else {
        // 手机号
        isTel = true
        regionCode = window.localStorage.getItem("regionCode")
        username = formatPhone(username)
      }
      const password = mtl.getStorageSync({key: 'password'})
      if(!regionchangeCode||(regionchangeCode===regionCode)) {
        // 第一次进入该页面 或者通过regecode 选择之后进入
        this.setState({isRemeberMe, username, password, isTel, regionCode})
      }
    }
    window.localStorage.removeItem("regionchangeCode")
  }

  render() {
    const { isTel, regionCode, isShow, username, password, showRememberPwd, isRemeberMe } = this.state
    return (
      <div className="form">
        <div className={"line"}>
          {isTel ? (
            <div className={"fir"}>
              <span>
                <Link
                  className={"def-font"}
                  to={`${DOMAIN_PREFIX}/workbench/region`}
                >
                  {regionCode}
                </Link>
              </span>
              <span className={"tri"}>
                <Triangle></Triangle>
              </span>
            </div>
          ) : null}
          <InputItem
            className={`${isTel ? "mid-input" : "long-input"}`}
            type={`${isTel ? "phone" : "text"}`}
            bordered={false}
            placeholder={isTel ? intl.get("phoneNum") : intl.get("email")}
            value={username}
            onChange={this.setUsername}
          />
          <Change onClick={this.userNameChange}></Change>
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
              showRememberPwd === 1 ? (
                <Checkbox.CheckboxItem className="remeber-pwd" checked={isRemeberMe} onChange={(e) => this.remeberChange(e)} >
                  <span style={{ color: '#888888', fontSize: '0.28rem' }}>{intl.get("remeberMe")}</span>
               </Checkbox.CheckboxItem>) : null
            }
          </span>
          {/* 忘记密码 */}
          {/* <Link className={"yo-link pwd-rem-find-forget"} to={`${DOMAIN_PREFIX}/workbench/findPwd`}>{intl.get("forgetPwd")}</Link> */}
        </div>
      </div>
    )
  }
}
export default connect(
  (state) => {
    return {
      regionCode: state.loginMessage.regionCode,
    };
  },
  {}
)(MobilePwdComp);