/* 注册第二步 */
import { Component } from 'react'
import { LeftOutlined } from "@ant-design/icons";
import intl from 'react-intl-universal'
import { getDomainPrefix } from '@utils';
import { InputItem, Toast } from 'antd-mobile'
import { Show } from "../../components/Icon";
import './index.css'

const DOMAIN_PREFIX = getDomainPrefix();
export default class SecondRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: props?.location?.state?.theme,
            phonenumber: props?.location?.state?.phonenumber,
            username: '',
            password: '',
            isShow: false
        }
    }

    setUsername = e => {
        this.setState({
            username: e.replace(/\s*/g, ""),
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
    // 下一步
    handleLogin = () => {
        const { username, password } = this.state
        // 验证用户名和密码
        if (username === '') return Toast.fail(intl.get("realNameTips"), 1)
         // 校验密码的格式是否符合
        //  let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,12}$/
         let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\D]{8,12}$/
         if(password.trim()==="") return Toast.fail(intl.get("writePlease")+intl.get("pwd"), 1) 
         else if (!reg.test(password.trim())) return Toast.fail(intl.get("pwdFormatErr"), 1)
         else 
        // 注册成功之后提示，跳转到登录页面
        this.props.history.replace(`${DOMAIN_PREFIX}/workbench/login`)
    }
    render() {
        const { theme, username, password, isShow } = this.state
        return (
            <div className={`box`}>
                <div>
                    <a className={"yo-link-register"} onClick={() => this.props.history.goBack()} >
                        <LeftOutlined className={"arrow-left"} />
                    </a>
                </div>
                <div className={"pt30 chage-login"}>
                    {intl.get("register")}2/2
                </div>
                <div className="form chage-login-form">
                    <div className={"line"}>
                        <InputItem
                            className={"long-input"}
                            type={"text"}
                            bordered={false}
                            placeholder={intl.get("realName")}
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
                    <div className="registerTip">{intl.get("registerTips")}</div>
                </div>
                <div className="log-con-complete">
                    <button onClick={this.handleLogin} className={`log-button`}>{intl.get("complete") + intl.get("register")}</button>
                </div>
            </div>
        )
    }
}
