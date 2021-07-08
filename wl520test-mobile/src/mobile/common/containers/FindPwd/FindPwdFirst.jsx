/* 找回密碼的第一步 */
import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { LeftOutlined } from "@ant-design/icons";
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import { getDomainPrefix } from '@utils';
import { InputItem, Button, Toast } from 'antd-mobile'
import { Triangle } from "../components/Icon";
import VeriCode from '../components/VeriCode'
import { testPhoneNumber, tsetEmail, testPhoneNumberTw, testPhoneOrEmail } from '../../utils/index'
const DOMAIN_PREFIX = getDomainPrefix();
class FindPwdFirst extends Component {
    static propTypes = {
        theme: PropTypes.number,
        regionCode: PropTypes.string,
    }
    static defaultProps = {
        regionCode: '+86',
        theme: 0,
    }
    constructor(props) {
        super(props)
        this.state = {
            isTel: props?.location?.state?.key === '0' ? true : false,
            type: props?.location?.state?.key,
            theme: props.theme,
            regionCode: props.regionCode,
            phonenumber: '',
            code: '',
            codeLabel: intl.get("getCode"),
        }
    }
    setPhonenumber = e => {
        this.setState({
            phonenumber: e,
        })
    }
    setCode = e => {
        this.setState({
            code: e
        })
    }
    // 获取验证码
    // getCode = () => {
    //     if (!this.checkNumber()) return
    //     console.log("验证通过");

    // }
    // // 验证 手机号 / 邮箱格式
    // checkNumber = () => {
    //     const { phonenumber, isTel, type, regionCode } = this.state
    //     if (isTel) {
    //         // 手机号
    //         if(phonenumber.trim() === "") {
    //             Toast.fail(intl.get("writePlease")+intl.get("phoneNum"), 1)
    //             return false;
    //         }
    //         // 台湾手机号
    //         if(regionCode==='+886') {
    //             if(!testPhoneNumberTw(phonenumber.trim())) {
    //             Toast.fail(intl.get("phoneNumberTips"), 1)
    //             return false;
    //             }
    //         }else if (!testPhoneNumber(phonenumber.trim())) { // 非台湾手机号验证
    //             Toast.fail(intl.get("phoneNumberTips"), 1)
    //             return false;
    //         }
    //         // if (!testPhoneNumber(phonenumber.replace(/\s*/g, ""))) return Toast.fail(intl.get("phoneNumberTips"), 1)
    //     } else {
    //         if(phonenumber.trim() === "") return Toast.fail(intl.get("writePlease")+intl.get("email"), 1)
    //         // 邮箱
    //         if (!tsetEmail(phonenumber.replace(/\s*/g, ""))) return Toast.fail(intl.get("emailTips"), 1)
    //     }
    //     return true
    // }
     // 获取子组件
     getChild = e => {
        this.child = e
    }
    // 下一步
    nextStep = () => {
        const { theme, phonenumber, code, isTel, type, regionCode } = this.state
        // 验证手机号 / 邮箱 和验证码
        // if (!this.checkNumber()) return
        if(!testPhoneOrEmail(phonenumber, isTel, regionCode)) return 
        if (code.trim() === '') return Toast.fail(intl.get("codeTips"), 1)
        //验证验证码是否正确
        // 不正确清除倒计时.提示错误信息
        // this.child.clearTime()
        // 跳转到注册第二步
        this.props.history.push({ pathname: `${DOMAIN_PREFIX}/workbench/findPwd/secondstep`, state: { theme, phonenumber, isTel, type } })
    }

    /* 根据登录方式显示标题名称 */
    getTitleByType = () => {
        const { type } = this.state
        const label = intl.get("findPwdList").filter(item => item.value === type)[0]?.title
        return label
    }
    render() {

        const { isTel, theme, phonenumber, code, regionCode, codeLabel } = this.state
        return (
            <div className={`box`}>
                <div>
                    <Link className={"yo-link"} to={`${DOMAIN_PREFIX}/workbench/findPwd`} replace>
                        <LeftOutlined className={"arrow-left"} style={{ color: '#111111'}}/>
                    </Link>
                </div>
                <div className={"pt30 chage-login"}>
                    {this.getTitleByType()}
                </div>
                <div className="form chage-login-form">
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
                            value={phonenumber}
                            onChange={this.setPhonenumber}
                        />
                    </div>
                    <div className={"line"}>
                        <InputItem
                            className={"long-input"}
                            type={"text"}
                            placeholder={intl.get("code")}
                            value={code}
                            onChange={this.setCode}
                        />
                        <VeriCode username={phonenumber} isTel={isTel} regionCode={regionCode} getChild={this.getChild} />

                         {/* <button className={"get-code"}>
                            <span onClick={this.getCode}>{codeLabel}</span>
                        </button> */}
                        {/* <Button size="small" inline className={"verCode"} onClick={this.getCode}>{intl.get("getCode")}</Button> */}
                    </div>
                </div>
                <div className="log-con-next">
                    <button onClick={this.nextStep} className={`log-button`}>{intl.get("nextStep")}</button>
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            theme: state.loginMessage.theme,
            regionCode: state.loginMessage.regionCode,
        };
    },
    {}
)(FindPwdFirst);
