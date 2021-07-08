import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { loginFunc, loginByPhonCode } from "../../actions/login";
import intl from 'react-intl-universal'
import mtl from "mtl-js-sdk";
import { getDomainPrefix } from '@utils';
import MobilePwdComp from './commonComp/mobilePwdComp'
import MobileCodeComp from "./commonComp/mobileCodeComp";
import {  getBaseUrl } from '../../utils/loginHandle'
import './index.css'
import EmailPwdComp from './commonComp/emailPwdComp';
import { loginModes, addStyle } from '../../utils/thememArray'
const DOMAIN_PREFIX = getDomainPrefix();
class OtherLogin extends Component {
    static propTypes = {
        loginFunc: PropTypes.func,
        loginByPhonCode: PropTypes.func,
        theme: PropTypes.number,
        showRememberPwd: PropTypes.number,
    }
    static defaultProps = {
        loginType: [0],
        theme: 0,
        loginFunc: () => { },
        loginByPhonCode: ()=> {},
    }
    constructor(props) {
        super(props)
        this.state = {
            loginType: props?.location?.state?.loginType,
            showRememberPwd: props.showRememberPwd,
            theme: props.theme
        }
        addStyle(props.theme)
    }
    // 获取子组件
    getChild = e => {
        this.child = e
    }
    loginHandle =  () => {
        const { loginFunc, loginByPhonCode } = this.props
        const { username, password, isRemeberMe, type, isTel, regionCode } = this.child.getChildData() 
        if (type === 0) {
            // 手机密码登录
            loginFunc({ username, password, type, isRemeberMe, isTel, regionCode }, this.props.history);
        } else if (type === 1) {
            // 手机验证码登录
            loginByPhonCode({username, password, url: getBaseUrl(), tenantId: window.localStorage.getItem("tenantId"), regionCode}, this.props.history,()=>{},(err)=>{
                if(err){
                    this.child.updateTime()
                }
            })
            // loginByPhonCode({username, password, url: getBaseUrl(), tenantId: window.localStorage.getItem("tenantId"), regionCode}, this.props.history)
        }

    };
    showByType = () => {
        const { loginType, showRememberPwd } = this.state
        switch (loginType) {
            case 0: // 手机密码
                return <MobilePwdComp data={{ showRememberPwd }} getChild={this.getChild} />
            case 1: // 手机验证码
                return <MobileCodeComp getChild={this.getChild} />
            case 2: // 邮箱密码
                return <EmailPwdComp data={{ showRememberPwd }} getChild={this.getChild} />
            default:
                return null
        }
    }
    /* 根据登录方式显示标题名称 */
    getTitleByType = () => {
        const { loginType } = this.state
        const value = loginModes.filter(item => item.key === loginType)[0]?.value
        if (value) return intl.get(value)
        else return null
    }
    render() {
        const { theme } = this.state
        return (
            <div className={`box`}>
                <div className="other-login-top">
                    <Link className={"yo-link-register"} to={`${DOMAIN_PREFIX}/workbench/login`} replace>
                        <LeftOutlined className={"arrow-left"} />
                    </Link>
                </div>
                <div className={"pt30 chage-login"} >
                    {this.getTitleByType()}
                </div>
                <div className="chage-login-form">
                    {this.showByType()}
                </div>
                <div className="log-con-next">
                    <button onClick={this.loginHandle} className={`log-button`}>{intl.get("login")}</button>
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            theme: state.loginMessage.theme,
            showRememberPwd: state.loginMessage.showRememberPwd,
        };
    },
    {
        loginFunc: loginFunc,
        loginByPhonCode: loginByPhonCode,
    }
)(OtherLogin);
