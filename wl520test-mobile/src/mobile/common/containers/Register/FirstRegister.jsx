/* eslint-disable no-unused-vars */
/* 注册第一步 */
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import intl from 'react-intl-universal'
import PropTypes from 'prop-types'
import { getDomainPrefix } from '@utils';
import { InputItem, Button } from 'antd-mobile'
import { ToastMes as Toast } from '../../components/antd'
import { Change, Triangle } from "../components/Icon";
import { testPhoneNumber, tsetEmail, testPhoneNumberTw, testPhoneOrEmail } from '../../utils/index'
import VeriCode from '../components/VeriCode'
import './index.css'

const DOMAIN_PREFIX = getDomainPrefix();
class FirstRegister extends Component {
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
            isTel: true,
            theme: props.theme,
            regionCode: props.regionCode,
            phonenumber: '',
            code: '',
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
    // 切换 电话 / 邮箱
    usernameChange = () => {
        const { isTel } = this.state
        this.setState({
            isTel: !isTel,
            phonenumber: '',
            code: ''
        })
    };
    // 获取验证码
    getCode = () => {
        // if (!this.checkNumber()) return
        const { phonenumber, isTel, regionCode } = this.state
        if(!testPhoneOrEmail(phonenumber, isTel, regionCode)) return 
        // 获取验证码

    }
    // 获取子组件
     // 获取子组件
    getChild = e => {
        this.child = e
    }
    // 验证 手机号 / 邮箱格式
    // checkNumber = () => {
    //     const { phonenumber, isTel, regionCode } = this.state
    //     //  if (isTel) {
    //     //     // 手机号
    //     //     if (!testPhoneNumber(phonenumber.replace(/\s*/g, ""))) return Toast.fail(intl.get("phoneNumberTips"), 1)
    //     // } else {
    //     //     // 邮箱
    //     //     if (!tsetEmail(phonenumber.replace(/\s*/g, ""))) return Toast.fail(intl.get("emailTips"), 1)
    //     // } 
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
    // 下一步
    nextStep = () => {
        const { theme, phonenumber, code, isTel, regionCode } = this.state
        // 验证手机号 / 邮箱 和验证码
        // if (!this.checkNumber()) return
        if(!testPhoneOrEmail(phonenumber, isTel, regionCode)) return 
        if (code.trim() === '') return Toast.fail(intl.get("codeTips"), 1)
        //验证验证码是否正确
        // 不正确清除倒计时.提示错误信息
        // this.child.clearTime()
        // 跳转到注册第二步
         this.props.history.push({ pathname: `${DOMAIN_PREFIX}/workbench/registersecond`, state: { theme, isTel, phonenumber: phonenumber.replace(/\s*/g, "") } })
    }
    render() {
        const { isTel, theme, phonenumber, code, regionCode } = this.state
        return (
            <div className={`box`}>
                <div>
                    <Link className={"yo-link-register"} to={`${DOMAIN_PREFIX}/workbench/login`} replace>
                        <LeftOutlined className={"arrow-left"} />
                    </Link>
                </div>
                <div className={"pt30 chage-login"}>
                    {intl.get("register")}1/2
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
                        <Change onClick={this.usernameChange}></Change>
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
                        {/* <Button size="small" inline className={"verCode"} onClick={this.getCode}>{intl.get("getCode")}</Button> */}
                    </div>
                </div>
                <div className="log-con-next">
                    <button onClick={this.nextStep} className={`log-button`}>{intl.get("nextStep")}</button>
                </div>
                <div className="tipContent">
                    {intl.get("tipAgreeMes")}<span className="quotation">{intl.get("yonService")}</span>{intl.get("andClause")}<span className="quotation">{intl.get("cloudPrivacy")}</span>
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            regionCode: state.loginMessage.regionCode,
            theme: state.loginMessage.theme,
        };
    },
    {

    }
)(FirstRegister);
