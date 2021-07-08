import React, { Component, } from "react";
import PropTypes from 'prop-types'
import { NavBar, List, InputItem, Toast, Button } from "../../components/antd";
import intl from "react-intl-universal";
import { Link, useHistory, useParams } from "react-router-dom";
import { saveURL, changeUrl } from "../../actions/login";
import { connect } from "react-redux";
// import { MinusSquareOutlined } from '@ant-design/icons'
import mtl from 'mtl-js-sdk';
import { isEmpty } from 'lodash';
import { get } from '@request';

import { getDomainPrefix } from '@utils';
import { scanCode } from '@mtlMW';
import { URLSearchParams } from "url";
import { FastForwardFilled } from "@ant-design/icons";
import { addStyle } from '../../utils/thememArray'

import './index.css'
const DOMAIN_PREFIX = getDomainPrefix();

class Index extends Component {
  static propTypes = {
    envUrlList: PropTypes.array,
    appIdConfig: PropTypes.string,
    saveURL: PropTypes.func,
    changeUrl: PropTypes.func,
    theme: PropTypes.number
  }
  static defaultProps = {
    envUrlList: [],
    appIdConfig: '',
    saveURL: () => { },
    changeUrl: () => { },
    theme: 0
  }
  constructor(props) {
    super(props)
    let id = props?.location?.state?.id || '';
    this.state = {
      label: '',
      id,
      url: '',
      isSaveF: false,
      isRight: false,
    }
    addStyle(props.theme)
  }
  componentDidMount() {
    const { id } = this.state

    if (!isEmpty(id)) {
      const { envUrlList } = this.props;
      const [item] = envUrlList.filter(value => value.id === id);
      this.setState({
        label: item?.label || '',
        url: item?.value || '',
      })
    }
  }

  cancel = () => {
    this.props.history.replace(`${DOMAIN_PREFIX}/workbench/env`);
  }
  okSave = () => {
    const {
      isRight,
      isSaveF,
      label,
      url,
      id,
    } = this.state;
    const { envUrlList } = this.props;
    // if (isRight) {
    //   Toast.fail(intl.get("rightURL"), 2);
    //   return
    // }
    // if (!isSaveF) {
    //   Toast.fail(intl.get("envnosave"), 2);
    //   return
    // }

    if (isEmpty(label)) {
      Toast.fail(intl.get("inputLable"), 2);
      return;
    }
    if (isEmpty(url)) {
      Toast.fail(intl.get("inputUrl"), 2);
      return;
    }

    // return
    if (id !== '') {
      this.props.changeUrl({ label, value: url, id })
      this.props.history.replace(`${DOMAIN_PREFIX}/workbench/env`);
      return
    }

    if (envUrlList.some((v) => v.value === url || v.label === label)) {
      Toast.fail(intl.get("addFail"), 2);
      return;
    }
    this.props.saveURL({ label, value: url, id: +new Date() + '' });
    this.props.history.replace(`${DOMAIN_PREFIX}/workbench/env`);
  };

  openQR = () => {
    let data =  {
      scanType: ["qrCode"],
      needResult: 1,
    };
    scanCode({
      data,
      success: (res) => {
        let result = res.resultStr;
        this.setState({
          url: result,
        })
      },
      fail: (err) => {
        console.log('err :>> ', err);
      }
    });
  }

  testClick = () => {
    Toast.loading(intl.get("testing", 0, null, true))
    get(value, { appId: this.props.appIdConfig }).then(res => {
      const { baseUrl } = res.data.data; // 返回数据
      console.log(res.data, baseUrl)
      if (baseUrl) {
        this.setState({
          isSaveF: true,
          isRight: false,
        })
        Toast.success(intl.get('envCanUse'), 1)
        return
      }
      Toast.fail(intl.get('envNoUse'), 1)
      // envChange(i,dispatch)
      // Toast.hide()

    }).catch(err => {
      // var message = err.message; // 错误信息
      this.setState({
        isRight: true,
      })
      Toast.fail(intl.get('envNoUse'), 1)
    })
  }

  render() {
    const {
      isSaveF,
      label,
      url,
    } = this.state
    return (
      <div className="env-content">
        <NavBar
          mode="light"
          icon={
            <span style={{ color: "#333" }} onClick={this.cancel}>
              {/* 取消 */}{intl.get('cancel')}
            </span>
          }
          rightContent={
            <span onClick={this.okSave} /* style={{ color: isSaveF ? "#da6964" : "#E14C46" }} */>
              {intl.get("save")}
            </span>
          }
        >
          {intl.get("envInfo")}
        </NavBar>
        <div className={'white-space-20'}></div>
        <List>
          <InputItem
            clear
            placeholder={intl.get("inputLable")}
            value={label}
            onChange={(e) => {
              // console.log(e);
              this.setState({
                label: e
              })
            }}
          ></InputItem>
          <InputItem
            clear
            placeholder={intl.get("inputUrl")}
            value={url}
            onChange={(e) => {
              // console.log(e);
              this.setState({
                url: e
              })
            }}
            extra={<span className={'plat-icon qrcode-icon'} onClick={this.openQR} />}
          ></InputItem>
        </List>
        <div className={'white-space-20'}></div>
        <Button className={'test-link-btn'} onClick={this.testClick}>{intl.get('testUrl')}</Button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    envUrlList: state.loginMessage.envUrlList,
    appIdConfig: state.loginMessage.appIdConfig,
    theme: state.loginMessage.theme
  }),
  {
    saveURL,
    changeUrl
  }
)(Index);
