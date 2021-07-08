
import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import intl from "react-intl-universal";
import { Link } from "react-router-dom";
import { getDomainPrefix } from '@utils';
import { Button, InputItem, Toast } from 'antd-mobile'
import { getValidateCode } from '@mtlMW'
import VeriCode from '../../components/VeriCode'
import { testPhoneNumber } from '../../../utils/index'
import { Triangle } from "../../components/Icon";
import { getBaseUrl } from '../../../utils/loginHandle'


/**
 * 输入手机号和验证码的组件
 */
const DOMAIN_PREFIX = getDomainPrefix();
class MobileCodeComp extends Component {
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
      username: '',
      password: '',
      codeLabel: intl.get("getCode"),
      isClick: false,
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
  usernameChange = () => {
    const { isTel } = this.state
    this.setState({
      isTel: !isTel,
      username: '',
      password: ''
    })
  }
  getChildData = () => {
    // 返回子组件账号密码
    const { username, password, regionCode } = this.state
    return { type: 1, username: username.replace(/\s*/g, ""), password, regionCode }
  }
  componentDidMount() {
    this.props.getChild(this)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // interval = 0
  // 登录失败，清除定时器
  updateTime = ()=>{
    this.child.clearTime()
    // clearInterval(this.interval);
    // this.setState({isClick: false})
    // this.setState({codeLabel: intl.get('getCode')})
  }
  // 获取子组件
  getChild = e => {
    this.child = e
  }
  // // 获取验证码
  // getCode = () => {
  //   const username = this.state.username.replace(/\s*/g, "")
  //   // 验证手机号
  //   if (!testPhoneNumber(username)) {
  //     Toast.fail(intl.get("phoneNumberTips"), 1)
  //     return
  //   } else {
  //     const {isClick} = this.state
  //     if (isClick) return;
  //     let interval = this.interval
  //     this.setState({isClick: true})
  //     let i = 60;
  //     this.setState({codeLabel: i})
  //     interval = setInterval(() => {
  //         i--;
  //         this.setState({codeLabel: i})
  //         if (i === 0) {
  //           this.setState({isClick: false})
  //           this.setState({codeLabel: intl.get('getCode')})
  //           clearInterval(interval);
  //         }
  //     }, 1000);
  //     this.interval = interval
  //     // 封装 params {url: '', mobile: '',}, 调用获取验证码接口
  //     let params = { url: getBaseUrl(), mobile: username }
      
  //     console.log("验证码参数=====", params);
  //     getValidateCode({
  //       params,
  //       success: (res) => {
  //         console.log("验证码获取成功====", res);
  //         //let result = res.resultStr;
  //         // this.setState({isClick: false})
  //         // this.setState({codeLabel: intl.get('getCode')})
  //         // clearInterval(this.interval);
  //       },
  //       fail: (err) => {
  //         Toast.hide()
  //         Toast.fail(intl.get("codeFail"), 1);
  //         this.setState({isClick: false})
  //         this.setState({codeLabel: intl.get('getCode')})
  //         clearInterval(this.interval);
  //         console.log('err :>> ', err);
  //       }
  //     })
  //   }
  // }
  render() {
    const { isTel, regionCode, username, password, codeLabel } = this.state
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
        </div>
        <div className={"line"}>
          <InputItem
            className={"long-input"}
            type={"text"}
            placeholder={intl.get("code")}
            value={password}
            onChange={this.setPassword}
          />
          <VeriCode username={username} isTel={isTel} regionCode={regionCode} getChild={this.getChild} />

          {/* <button className={"get-code"}>
            <span onClick={this.getCode}>{codeLabel}</span>
          </button> */}
          {/* <Button size="small"  inline className={"verCode"} onClick={this.getCode}>{codeLabel}</Button> */}
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
)(MobileCodeComp);

