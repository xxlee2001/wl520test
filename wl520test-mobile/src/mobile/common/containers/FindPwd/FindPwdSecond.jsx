/* 找回密码第二步 */
import { Component } from 'react'
import { LeftOutlined } from "@ant-design/icons";
import intl from 'react-intl-universal'
import { getDomainPrefix } from '@utils';
import { InputItem, Toast } from 'antd-mobile'
import { Show } from "../../components/Icon";
import './index.css'

const DOMAIN_PREFIX = getDomainPrefix();
export default class FindPwdSecond extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: props?.location?.state?.theme,
            phonenumber: props?.location?.state?.phonenumber,
            isTel: props?.location?.state?.isTel,
            type: props?.location?.state?.type,
            password: '',
            isShow: false
        }
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
    // 完成
    handleLogin = () => {
        const { password } = this.state
        // 校验密码的格式是否符合
        // let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$/
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\D]{8,20}$/
        if(password.trim()==="") return Toast.fail(intl.get("writePlease")+intl.get("pwd"), 1) 
        else if (!reg.test(password.trim())) return Toast.fail(intl.get("pwdFormatErr"), 1)
        else this.props.history.replace(`${DOMAIN_PREFIX}/workbench/login`)

        // 验证密码

        // 找回密码成功之后提示，跳转到登录页面
        // this.props.history.replace(`${DOMAIN_PREFIX}/workbench/login`)
    }
    /* 根据登录方式显示标题名称 */
    getTitleByType = () => {
        const { type } = this.state
        const label = intl.get("findPwdList").filter(item => item.value === type)[0]?.title
        return label
    }
    render() {
        const { isTel, theme, password, isShow } = this.state
        return (
            <div className={`box`}>
                <div className={"find-pwd-header"}>
                    <a className={"find-pwd-back"} onClick={() => this.props.history.goBack()}>
                        <LeftOutlined className={"arrow-left"} />
                    </a>
                    <div className={"find-pwd-title"}>
                        {this.getTitleByType()}
                    </div>
                </div>
                <div className="form chage-login-form">
                    <div className={"line"}>
                        <InputItem
                            className={"long-input"}
                            type={isShow ? "text" : "password"}
                            placeholder={intl.get("newPwdTips")}
                            value={password}
                            onChange={this.setPassword}
                        />
                        <Show isShow={isShow} onClick={this.showPassword}></Show>
                    </div>
                    <div className="findPwdTip">{intl.get("findPwdTips")}</div>
                </div>
                <div className="log-con-next-find-pwd">
                    <button onClick={this.handleLogin} className={`log-button`}>{intl.get("complete")}</button>
                </div>
            </div>
        )
    }
}

