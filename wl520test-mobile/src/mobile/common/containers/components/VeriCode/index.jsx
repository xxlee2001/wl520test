import React, { Component } from 'react'
import intl from 'react-intl-universal'
import { getBaseUrl } from '@utils'
import { getValidateCode } from '@mtlMW'
import { testPhoneOrEmail } from '../../../utils/index'
import { ToastMes as Toast } from '../../../components/antd'
// 验证码获取组件
export default class VeriCode extends Component {
    state = {
        codeLabel: intl.get("getCode"),
        isClick: false,
    }
    interval = 0
    // 获取验证码
    getCode = () => {
        let { username, isTel, regionCode } = this.props
        username=username.replace(/\s*/g, "")
        // 判断是手机号还是邮箱,并验证
        if(!testPhoneOrEmail(username, isTel, regionCode)) return
        // 验证通过
        const {isClick} = this.state
        if (isClick) return;
        this.setState({isClick: true})
        let i = 60;
        this.setState({codeLabel: i})
        let interval = setInterval(() => {
            i--;
            this.setState({codeLabel: i})
            if (i === 0) {
                this.setState({isClick: false})
                this.setState({codeLabel: intl.get('getCode')})
                clearInterval(interval);
            }
        }, 1000);
        this.interval = interval
        // 封装 params {url: '', mobile: '',}, 调用获取验证码接口
        let params = { url: getBaseUrl(), mobile: username }
        getValidateCode({
            params,
            success: (res) => {
            console.log("验证码获取成功====", res);
            },
            fail: (err) => {
            Toast.hide()
            Toast.fail(intl.get("codeFail"), 1);
            this.setState({isClick: false})
            this.setState({codeLabel: intl.get('getCode')})
            clearInterval(this.interval);
            console.log('err :>> ', err);
            }
        })
    }
    // 父组件调用来停止定时器
    clearTime=()=>{
        this.setState({isClick: false})
        this.setState({codeLabel: intl.get('getCode')})
        clearInterval(this.interval);
    }
    componentDidMount() {
        // 将自己传递给父组件
        this.props.getChild(this)
    }
    // 组件卸载
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const { codeLabel } = this.state
        return (
            <button className={"get-code"}>
                <span onClick={this.getCode}>{codeLabel}</span>
            </button>
        )
    }
}
