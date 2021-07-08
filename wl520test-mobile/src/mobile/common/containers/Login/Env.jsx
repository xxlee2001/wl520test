import React, { useState, useEffect } from "react";
import BackIcon from '../../components/Icon/Back'
import { NavBar, Icon, List, Radio,Modal,Toast } from "../../components/antd";
import intl from "react-intl-universal";
import { Link ,useHistory} from "react-router-dom";
import { connect } from "react-redux";
import { envChange,delEnv } from "../../actions/login";
import "./index.css";
import { envGetConfig } from '@utils';
const alert = Modal.alert;
// import { }
const RadioItem = Radio.RadioItem;
const ListItem = List.Item;

import { getDomainPrefix } from '@utils'; 
const DOMAIN_PREFIX = getDomainPrefix();

const Env = ({ envList, envUrl, envChange, delEnv,envGetConfig }) => {
    const history = useHistory()

    const [isSet, setIsSet] = useState(false);
    const cancel = () => {
        setIsSet(false);
    };
    const maneger = () => {
        setIsSet(true);
    };
    const clickBandel = (i) => {
        Toast.loading(intl.get("changing", 0, null, true))
        envGetConfig(i)
    };
    const delBandel = (i) => {
        alert(' ', intl.get('delOk'), [
      { text: intl.get('cancel') },
      { text: intl.get('del'), onPress: () => delEnv(i) },
        ])
    }
    const editor = (val) => {
        history.push(`${DOMAIN_PREFIX}/workbench/envconfig/${val}`)
    }
    return (
        <div className={"env-content"}>
            <NavBar
                mode="light"
                icon={
          isSet ? (
              <span style={{ color: "#333" }} onClick={cancel}>
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
              <span onClick={maneger} style={{ color: "#E14C46" }}>
                  {intl.get("manage")}
              </span>
          )
        }
      >
                {intl.get("envChange")}
            </NavBar>
            <div className={'white-space-20'}></div>
            {isSet ? (
                <List>
                    {envList.map((i) => (
                        <ListItem
                            key={i.value}
                            extra={
                i.noEditor ? null : (
                    <span>
                        <span className={'plat-icon editor-icon'} onClick={() => {editor(i.id)}} />{'　'}
                        <span className={'plat-icon del-icon'} onClick={()=>delBandel(i)} />
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
                      checked={envUrl === i.value}
                      onChange={() => clickBandel(i)}
            >
                      {i.label}
                  </RadioItem>
          ))}
              <ListItem onClick={() => {
                  history.push(`${DOMAIN_PREFIX}/workbench/envset`)
              }}>
                  <div className={"text-cen"}><span className={'plat-icon add-icon'} />{intl.get("add")}</div>
              </ListItem>
          </List>
      )}
        </div>
    );
};
export default connect(
  (state) => {
      console.log('env_set_page-envUrlList:',state.loginMessage.envUrlList)
      return{
          envList: state.loginMessage.envUrlList,
          envUrl: state.loginMessage.envUrl,
      }
  },
    {
        envChange,
        delEnv,
        envGetConfig,
    }
)(Env);
