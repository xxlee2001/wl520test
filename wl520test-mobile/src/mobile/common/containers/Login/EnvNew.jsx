import React, { Component, } from "react";
import PropTypes from 'prop-types'
import BackIcon from '../../components/Icon/Back'
import { NavBar, List, Radio, Modal, Toast } from "../../components/antd";
import intl from "react-intl-universal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { envChange, delEnv, } from "../../actions/login";
import { isEmpty } from 'lodash'
import { openHtml, getEnvUrlList, envGetConfig, setEnvUrl, } from "@utils";
import "./index.css";
import { addStyle } from '../../utils/thememArray'
const alert = Modal.alert;
const RadioItem = Radio.RadioItem;
const ListItem = List.Item;

import { getDomainPrefix } from '@utils';

const DOMAIN_PREFIX = getDomainPrefix();

class Env extends Component {
  static propTypes = {
    envList: PropTypes.array,
    envURL: PropTypes.string,
    appIdConfig: PropTypes.string,
    envChange: PropTypes.func,
    delEnv: PropTypes.func,
    envGetConfig: PropTypes.func,
    theme: PropTypes.number,
  }

  static defaultProps = {
    envList: [],
    envURL: '',
    appIdConfig: '',
    envChange: () => { },
    delEnv: () => { },
    envGetConfig: () => { },
    theme: 0,
  }

  constructor(props) {
    super(props)
    this.state = {
      envList: props.envList,
      envURL: props.envURL,
      theme: props.theme,
      isSet: false,
    }
    addStyle(props.theme)
  }

  componentDidMount() {
    getEnvUrlList((data) => {
      !isEmpty(data) && this.setState({
        envList: data
      })
    })

  }

  managerToggle = (isSet = false) => {
    this.setState({
      isSet
    })
  }

  switchEnv = (data) => {
    Toast.loading(intl.get("changing", 0, null, true))
    const { envGetConfig, appIdConfig, } = this.props;
    envGetConfig(data, { appId: appIdConfig }, () => {
      Toast.success(intl.get('changSuccess'), 1);
      setEnvUrl(data?.value, ()=>{
        openHtml(data?.value);
      })
    }, () => {

    });
  }

  delEnvAction = (data) => {
    const { delEnv } = this.props
    alert(' ', intl.get('delOk'), [
      { text: intl.get('cancel') },
      { text: intl.get('del'), onPress: () => delEnv(i) },
    ])
  }

  editor = (val) => {
    this.props.history.push({
      pathname: `${DOMAIN_PREFIX}/workbench/envset`,
      state: { id: val }
    })
  }

  render() {
    const { envList, envURL, isSet } = this.state;
    return (
      <div className={"env-content"}>
        <NavBar
          mode="light"
          icon={
            isSet ? (
              <span style={{ color: "#333" }} onClick={() => this.managerToggle(false)}>
                取消
              </span>
            ) : (
              <Link replace to={`${DOMAIN_PREFIX}/workbench/login`} replace>
                {/* <Icon style={{ color: "#333" }} type="left" /> */}
                {console.log('DOMAIN_PREFIX', DOMAIN_PREFIX)}
                <BackIcon />
              </Link>
            )
          }
          rightContent={
            isSet ? null : (
              <span onClick={() => this.managerToggle(true)}/*  style={{ color: "#E14C46" }} */>
                {intl.get("manage")}
              </span>
            )
          }
        >
          {intl.get("envChange")}
        </NavBar>
        <div className={'white-space-20'}></div>
        {
          isSet ? (
            <List>
              {envList.map((i) => (
                <ListItem
                  key={i.value}
                  extra={
                    i.noEditor ? null : (
                      <span>
                        <span className={'plat-icon editor-icon'} onClick={() => { this.editor(i.id) }} />{'　'}
                        <span className={'plat-icon del-icon'} onClick={() => this.delEnvAction(i)} />
                      </span>
                    )
                  }
                >
                  {i.label}
                </ListItem>
              ))}
            </List>
          ) : (
            <List>
              {/* {console.log(envList)} */}
              {envList.map((i) => (
                <RadioItem
                  key={i.value}
                  checked={envURL === i.value}
                  onChange={() => this.switchEnv(i)}
                >
                  {i.label}
                </RadioItem>
              ))}
              <ListItem onClick={() => {
                this.props.history.push(`${DOMAIN_PREFIX}/workbench/envset`)
              }}>
                <div className={"text-cen"}><span className={'plat-icon add-icon'} />{intl.get("add")}</div>
              </ListItem>
            </List>
          )
        }
      </div >
    )
  }
}

export default connect(
  (state) => {
    console.log('env_set_page-envUrlList:', state.loginMessage.envUrlList)
    return {
      envList: state.loginMessage.envUrlList,
      envURL: state.loginMessage.envURL,
      appIdConfig: state.loginMessage.appIdConfig,
      theme: state.loginMessage.theme

    }
  },
  {
    delEnv,
    envChange,
    envGetConfig,
  }
)(Env);
