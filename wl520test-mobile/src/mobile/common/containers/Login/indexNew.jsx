import React, { Component } from "react";
import PropTypes from 'prop-types'
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Mine } from "../components/Icon";
import { loginFunc, initUrlFromStore,loginByPhonCode, loginSuccess } from "../../actions/login";
import intl from "react-intl-universal";
import { Modal, List,  ActivityIndicator } from 'antd-mobile'
import { ToastMes as Toast } from '../../components/antd'
import queryString from 'query-string';
import { get, post } from '@request'
import { scanCode } from '@mtlMW'
import { getDomainPrefix, envGetConfig, getConfigInfoAsync, getBaseUrl } from '@utils';
import MobilePwdComp from './commonComp/mobilePwdComp'
import "./index.css";
import { loginModes, themeArry, addStyle } from '../../utils/thememArray'
import MobileCodeComp from "./commonComp/mobileCodeComp";
import EmailPwdComp from "./commonComp/emailPwdComp";
import ActivLoading from '../../components/utils/ActivLoading'

const DOMAIN_PREFIX = getDomainPrefix();
class index extends Component {
  static propTypes = {
    regionCode: PropTypes.string,
    envUrlList: PropTypes.array,
    envURL: PropTypes.string,
    userAvatar: PropTypes.string,
    loginFunc: PropTypes.func,
    loginByPhonCode: PropTypes.func,
    initUrlFromStore: PropTypes.func,
    loginSuccess: PropTypes.func,
    appName: PropTypes.string,
    envMode: PropTypes.number,
    configEnvURL: PropTypes.string,
    loginType: PropTypes.array,
    //theme: PropTypes.number,
    appIdConfig: PropTypes.string,
    showRememberPwd: PropTypes.number,
  }
  static defaultProps = {
    regionCode: '+86',
    envUrlList: [],
    envURL: '',
    userAvatar: '',
    appName: '',
    envMode: 0,
    configEnvURL: '',
    loginType: [0],
   // theme: 0,
    appIdConfig: '',
    showRememberPwd: 0,
    loginFunc: () => { },
    loginByPhonCode: ()=> {},
    initUrlFromStore: () => { },
    loginSuccess: () => {},
  }
  constructor(props) {
    super(props)
    let {
      envURL = props.envURL,
      theme = props.theme,
      showRememberPwd = props.showRememberPwd,
      loginType,
      envMode,
      appIdConfig,
    } = queryString.parse(this.props.location?.search)
    if (envURL) {
      this.props.initUrlFromStore({ envURL })
    }
    loginType = loginType?.split(',') || props.loginType
    this.props.initUrlFromStore({ theme: +theme, showRememberPwd: +showRememberPwd, loginType, envMode, appIdConfig})
    this.state = {
      envUrlList: props.envUrlList, 
      envURL: envURL ,
      isTel: true,
      isShow: false,
      username: '',
      password: '',
      urlLabel: '',
      userAvatar: props.userAvatar || window.localStorage.getItem("userAvatar"),
      appName: props.appName,
      regionCode: props.regionCode,
      envMode: envMode||props.envMode,
      showRememberPwd: +showRememberPwd,
      appIdConfig: appIdConfig,
      theme: theme,
      loginType: loginType,
      modalVisible: false,
      showPage: false,
    }
    
  }
 
  componentDidMount() {
    const { envUrlList, envURL, theme, appIdConfig } = this.state
    // 自定义主题样式
    // if(theme===undefined) { 
      getConfigInfoAsync(info=>{
        console.log("getConfigInfoAsync----info--------------", info);
        const data = { 
          theme: info.theme, 
          showRememberPwd: info.showRememberPwd, 
          loginType: info.loginType, 
          envURL: info.envURL, 
          appIdConfig: info.appId,
          appId: info.appId,
          appName: info.appName,
          envMode: info.envMode
        }
        this.setState({...data,...{showPage: true}})
        this.props.initUrlFromStore(data)
        addStyle(info.theme)
        const urlLabel = envUrlList.filter((item) => item.value === info.envURL)[0]?.label;
        this.setState({urlLabel,})
        // console.log('envURL-props :>> ', this.props.envURL);
        this.getAppInfo(info.envURL,info.appId);
      })
    // }else {
    //   console.log("else-------------", this.state);
    //   this.setState({showPage: true})
    //   addStyle(theme)
    //   const urlLabel = envUrlList.filter((item) => item.value === envURL)[0]?.label;
    //   this.setState({urlLabel,})
    //   // console.log('envURL-props :>> ', this.props.envURL);
    //   this.getAppInfo(envURL,appIdConfig);
    // }

    
    
  }

  getAppInfo(envURL, appIdConfig) {
    // const { envURL, appIdConfig } = this.state;
    get(envURL, { appId: appIdConfig }).then(data => {
      console.log('data :::::::>> ', data);
    })
    envGetConfig(
      { value: envURL }, { appId: appIdConfig }, (res)=> {
        console.log("envGetConfig========", res);
      // TODO res.scanLogin 判断是否显示扫码登录，为空不显示
      if (res && res.scanLogin) {
        this.setState({
          scanLoginUrl: res.scanLogin
        })
      }else {
        this.setState({
          scanLoginUrl: "https://build.yyuap.com/mobile-app/rest/v1/mobile/login/ybcode"
        })
      }
    })     
  }

  componentWillUnmount() {
    window.document.body.removeAttribute("style");
  }

  // 获取子组件
  getChild = e => {
    this.child = e
  }
  
  loginHandle = () => {
    const { loginFunc, loginByPhonCode } = this.props
    const { username, password, isRemeberMe, type, isTel, regionCode } = this.child.getChildData()
    // console.log(username, password, isRemeberMe, type, isTel, regionCode);
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
  // 关闭其他登录方式选项
  closeModal = key => {
    this.setState({
      [key]: false,
    })
  }
  // 登录组件切换显示
  loginModeChange = (higPri, showRememberPwd) => {
    switch (higPri) {
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
  // 切换方式展示
  logModeShow = (logModNum, overlap, showRememberPwd, theme) => {
    if (logModNum === 2) {
      if (overlap[0]?.key === 3) return <span onClick={this.loginByScan}>{intl.get(overlap[0]?.value)}</span>
      else return <Link className={"yo-link"} to={{ pathname: overlap[0]?.path, state: { loginType: overlap[0]?.key, showRememberPwd, theme } }}>{intl.get(overlap[0]?.value)}</Link>
    } else if (logModNum > 2) return <span onClick={() => this.setState({ modalVisible: true })}> {intl.get("otherLoginMode")}</span>
    else return null
  }
  // 其他登录方式modal显示内容
  modalChageLoginMode = (overlap, showRememberPwd, theme) => {
    return overlap?.map(item => {
      return (
        <List.Item>
          {
            item.key === 3 ? <span className={"yo-logchoose"} onClick={this.loginByScan}/* onClick={() => this.setState({ modalVisible: false })} */>{intl.get(item.value)}</span> :
              <Link className={"yo-logchoose"} to={{ pathname: item.path, state: { loginType: item.key, showRememberPwd, theme } }}>{intl.get(item.value)}</Link>
          }
        </List.Item>
      )
    })
  }

  /**
   * 扫描二维码登录
   */
  loginByScan = () => {
    // 关闭选择登陆方式弹窗
    this.setState({ modalVisible: false })
    const { loginSuccess } = this.props
    let params = {
      scanType: ["qrCode"],
      needResult: 1,
    };
    scanCode({
      params,
      success: (res) => {
        let result = res.resultStr;
        console.log("scancode====",res);
        // TODO: 通过扫描获取到的结果请求登录接口
        let { scanLoginUrl } = this.state
        if(!scanLoginUrl) {
          // 如果scanLoginUrl 没有
          // Toast.fail(intl.get("scanLoginNull"),1)
          // return 
          scanLoginUrl = "https://build.yyuap.com/mobile-app/rest/v1/mobile/login/ybcode"
        }
        console.log("扫码成功之后的请求：：：：：：",scanLoginUrl, result);
        //  COMMENT 请求格式：url?code=code
        Toast.loading(intl.get("loading"), 0, null, true)
        // post("https://build.yyuap.com/mobile-app/rest/v1/mobile/login/ybcode", {}, {params: {code: result}}).then(res => {
        post(scanLoginUrl, {}, {params: {code: result}}).then(res => {
          console.log("postscanUrl======", res);
          Toast.hide()
          // TODO: 返回正确的登录信息，处理登录成功逻辑
          loginSuccess(res.data, this.props.history)
        }).catch( err => {
          // TODO: 错误信息
          Toast.hide()
          Toast.fail(intl.get("loginerr"), 1);
          console.log("登录失败", err);
        })
      },
      fail: (err) => {
        Toast.hide()
        Toast.fail(intl.get("loginerr"), 1);
        console.log("登录失败", err);
        console.log('err :>> ', err);
      }
    })
  }
  /* 根据登录方式显示标题名称 */
  getTitleByType = (higPri) => {
    const value = loginModes.filter(item => item.key === higPri)[0]?.value
    if (value) return intl.get(value)
    else return null
  }

  render() {
    const {
      userAvatar,
      appName,
      urlLabel,
      envMode,
      showRememberPwd,
      theme,
      loginType,
      modalVisible,
      scanLoginUrl,
      showPage
    } = this.state;
    console.log("userAvatar====",userAvatar);
    // 获取优先级最高的登陆方式
    const higPri = Math.min(...loginType)
    // 获取两个数组中重叠的部分,同时去除当前优先级最高的选项
    // 如果 scanLoginUrl 不存在说明扫码登录不显示，需要去除
    // const overlap = loginModes.filter(v => loginType.filter(item => +item !== higPri)?.some(v2 => v.key == v2 ))
    const overlap = loginModes.filter(v => loginType.filter(item => scanLoginUrl?item !== higPri:(item !== higPri&&item !== 3))?.some(v2 => v.key == v2 ))
   // 获取登录方式的个数
   const logModNum = overlap.length + 1
    return showPage ? (
      /* 根据获取的theme 进行判断 '0': 红色 ; '1':蓝色 */
      <div className={`box`} id={"yo-box"}>
        <div className='login-layout-head'>
          <div className={"head-img"}>
            {!userAvatar || userAvatar === "" ? (
              <Mine></Mine>
            ) : (
              <img src={userAvatar} alt="" />
            )}
          </div>
          <div className={"line"} style={{ display: (+envMode) === 1 ? /* 'flex' */ 'table' : 'none', marginTop: (+envMode) === 1 ? '0.3rem' : '0' }}>
            <Link className={"line-link"} to={`${DOMAIN_PREFIX}/workbench/env`}>
              <span>
                {urlLabel}
              </span>
              <RightOutlined style={{ color: "#9e9e9e", lineHeight: "0.65rem" }} />
            </Link>
          </div>
        </div>
        <div className={"pt30"}>
          {intl.get("welcome")}{intl.get("come")}
          {appName}
        </div>
        <div className={"yo-logintype"}>{this.getTitleByType(higPri)}</div>
        {/* 登录组件切换: 0:手机密码；1：手机验证码, 3: 邮箱 */}
        {this.loginModeChange(higPri, showRememberPwd)}

        <div className="log-con">
          <button className={`log-button`} onClick={this.loginHandle}>
            {/* 登录 */}
            {intl.get("login")}
          </button>
        </div>
        <div className={"login-change"}>
          {/* logModNum > 2为其他方式登录， 否则为切换另一种登录方式 */}
          <span>
            {this.logModeShow(logModNum, overlap, showRememberPwd, theme)}
          </span>
          {/* 注册 */}
          {/* <Link className={"yo-link"} to={`${DOMAIN_PREFIX}/workbench/registerfirst`}>{intl.get("register")}</Link> */}
        </div>
        <Modal
          popup
          className="yo-logModes"
          visible={modalVisible}
          onClose={() => this.closeModal('modalVisible')}
          animationType="slide-up"
        // footer={[{ text: intl.get("cancel"), onPress: () => this.closeModal('modalVisible') }]}
        >
          <List renderHeader={() => <div><a onClick={() => this.closeModal('modalVisible')} className="close"></a>{intl.get("otherLoginMode")}</div>} className="popup-list">
            {
              overlap && overlap.length > 0 ? this.modalChageLoginMode(overlap, showRememberPwd, theme) : null
            }
          </List>
        </Modal>
      </div>
    ) : <ActivLoading size={"large"} text={"loading..."}/>
    // ) : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}> <ActivityIndicator size="large"  text="loading...." /> </div> 
  }
}

export default connect(
  (state) => {
    console.log('90909090', state.loginMessage)
    return {
      regionCode: state.loginMessage.regionCode,
      envUrlList: state.loginMessage.envUrlList,
      envURL: state.loginMessage.envURL,
      userAvatar: state.loginMessage.userAvatar,
      appName: state.loginMessage.appName,
      envMode: state.loginMessage.envMode,
      configEnvURL: state.loginMessage.configEnvURL,
      loginType: state.loginMessage.loginType,
      theme: state.loginMessage.theme,
      appIdConfig: state.loginMessage.appIdConfig,
      showRememberPwd: state.loginMessage.showRememberPwd,
    };
  },
  {
    initUrlFromStore: initUrlFromStore,
    loginFunc: loginFunc,
    loginByPhonCode: loginByPhonCode,
    loginSuccess: loginSuccess,
    envGetConfig,
  }
)(index);
