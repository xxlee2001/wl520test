import React, { useEffect, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import "antd-mobile/lib/icon/style";
import Carousel from "antd-mobile/lib/carousel";
import "antd-mobile/lib/carousel/style/css";
// import Toast from "antd-mobile/lib/toast";
// import "antd-mobile/lib/toast/style/index.css";
import { ToastMes as Toast} from '../../components/antd'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import mtl from "mtl-js-sdk";
import intl from "react-intl-universal";
import { getAppId, getBaseUrl, } from '@utils';
import { getPlatform, } from "../../actions/utils";
import "./index.less";
import { initApps, tenantChange, unReadMsgListener } from "../../actions/appsAction";
import TodoIcon from "../../components/Icon/TodoIcon";
import MsgIcon from "../../components/Icon/MsgIcon";
import SpaceIcon from "./spaceIcon.png"


import notice from "mtl-js-sdk/lib/plugins/notice";
mtl.loadPlugin(notice);

import { getDomainPrefix } from '@utils';

const DOMAIN_PREFIX = getDomainPrefix();

const Work = ({
  initApps,
  appsList,
  // tenantId,
  tenantList,
  tenantChange,
  tenantName,
  unReadTodoCount,
  unMsgRead,
  unReadMsgListener,
  // loginMessObj,
  theme
}) => {
  console.log("unReadTodoCount");
  console.log(unReadTodoCount, unMsgRead);
  console.log("unReadTodoCount");
  const history = useHistory();
  const [selectShow, setSelectShow] = useState(false);
  const [spinF, setSpinF] = useState(false);
  const [banner, setBanner] = useState(0);
  const [bannerData, setBannerData] = useState({}); // 切换租户重新获取banner
  // const [notices,setNotices] = useState(0)
  // const [todo,setTodo] = useState(0)
  useEffect(() => {
    // console.log('----logout====', tenantList)

    console.log('====work_page_height_start_log=====')
    console.log('innerHeight:', window.innerHeight)
    console.log('bodyHeight:', window.document.body.clientHeight)
    console.log('====work_page_height_end_log=====')
    if (tenantList[0] === 'logout') {
      history.replace(`${DOMAIN_PREFIX}/workbench/login`);
    }
    if (
      mtl.platform.toLowerCase() === "qyandroid" ||
      mtl.platform.toLowerCase() === "qyios"
    ) {
      mtl.settingNavBar({
        hide: 1,
        success: function (res) {
          // window.document.body.style.height = window.innerHeight + "px";
          window.document.body.style.overflowY = "auto";
          // window.document.getElementById("container").style.height =
          // window.innerHeight + "px";
          console.log('settingNavBarSuccess', res)
        },
        fail: function (err) {
          console.log('settingNavBarErr', err)
        }
      })
    }
  })
  const hideSetting = ()=>{
    Toast.hide()
    if (mtl.platform.toLowerCase() === "qyandroid") {
      // mtl.getAppInfo({
      //   success: function (res) {
      //     let resObj;
      //     try {
      //       resObj = JSON.parse(res);
      //     } catch (error) {
      //       resObj = res;
      //     }
      mtl.getBannerList({
        url: getBaseUrl(),
        category: getAppId(),
        success: function (res) {
          setBannerData(res);
          // console.log('bannerData: ', bannerData);
        },
        fail: function (err) {
          console.log("getBannerList", err);
          // history.replace(`${DOMAIN_PREFIX}/workbench/login`);
          // window.localStorage.clear()
        },
      });
      // },
      // fail: function (err) {
      //   console.log("getAppInfo", err);
      //   if (err.message.includes("401")) {
      //     // history.replace(`${DOMAIN_PREFIX}/workbench/login`);
      //     //   window.localStorage.clear()
      //     history.replace(`${DOMAIN_PREFIX}/workbench/login`);
      //     // window.localStorage.clear()
      //   }
      // },
      // });
    }
  }
  // componentDidMount
  useEffect(() => {
    //  hideSetting()
     initApps(history);
    
    // window.location.assign(finalUrl);
    // 首次加载获取appList
    return function() {
      hideSetting()
    }
    
  }, [])
  useEffect(() => {
    // console.log('applist',mtl.platform.toLowerCase())
    if (
      mtl.platform.toLowerCase() === "qyandroid" ||
      mtl.platform.toLowerCase() === "qyios"
    ) {
      mtl.getBannerList({
        url: getBaseUrl(),
        category: getAppId(),
        success: function (res) {
          setBannerData(res);
        },
        fail: function (err) {
          console.log("getBannerList", err);
        },
      });
    }
    /**
     * 获取banner图列表信息
     * @author rongqb@yonyou.com
     * @date 20201022
     */
   /*  if (
      mtl.platform.toLowerCase() === "qyandroid" ||
      mtl.platform.toLowerCase() === "qyios"
    ) {
      // mtl.getAppInfo({
      //   success: function (res) {
      //     let resObj;
      //     try {
      //       resObj = JSON.parse(res);
      //     } catch (error) {
      //       resObj = res;
      //     }
      mtl.getBannerList({
        url: getBaseUrl(),
        category: getAppId(),
        success: function (res) {
          setBannerData(res);
          // console.log('bannerData: ', bannerData);
        },
        fail: function (err) {
          console.log("getBannerList", err);
          // history.replace(`${DOMAIN_PREFIX}/workbench/login`);
          // window.localStorage.clear()
        },
      });
      // },
      // fail: function (err) {
      //   console.log("getAppInfo", err);
      //   if (err.message.includes("401")) {
      //     // history.replace(`${DOMAIN_PREFIX}/workbench/login`);
      //     //   window.localStorage.clear()
      //     history.replace(`${DOMAIN_PREFIX}/workbench/login`);
      //     // window.localStorage.clear()
      //   }
      // },
      // });
    } */
    return function () {
      //   window.document.body.style.height = '';
      // window.document.body.style.overflowY = "";
    }
  }, [banner]);

  const selectHandle = (bool) => {
    setSelectShow(bool);
  };
  const selectAction = (item) => {
    // console.log(item);
    Toast.loading(intl.get("changing", 10000, true));
    tenantChange(
      item.tenantName,
      {
        terminalType: getPlatform(),
        tenantId: item.tenantId,
      },
      history,
      () => {
        // 请求结束之后关闭Toast 提示框
        Toast.hide()
        let oldBanner = banner;
        setBanner(++oldBanner);
      }
    );
  };
  // 跳转到app中心
  const goAppCenter = (data, appname, esnCode) => {
    // const finalUrl = "https://ys-u8c-daily.yyuap.com/approveCenter/index.html#/?auth_key=yhtToken&auth_value=bttWkpEeGFIMU9vM0M4dE9rNWY0UkJraTZ0VSszOXJibi82cGFic0tJKzYvYVVCME9JMWJ4NmNYWEN0UVh4UnlKQTlyQ2dpaDZJU0VkYisvRlcySHhxRnFZM3cyRDJvSjlIdS9za1ZQN0ZHRCtUWnNCV0NYWDNCUU1aTGRicllha2NfX3U4Yy1zc28tZGFpbHkueXl1YXAuY29t__69dae94530078d5c14496edfe03bb456_1617094979088&tenant_id=t69j1a5l"
    const tenantId = window.localStorage.getItem("tenantId");
    const yhtToken = window.localStorage.getItem("yhtToken");
    if (appname === '审批中心') {
      data = `${data}${/\?/.test(data) ? "&" : "?"}auth_key=yhtToken&auth_value=${yhtToken}&tenant_id=${tenantId}`
    } else {
      data = `${data}${/\?/.test(data) ? "&" : "?"}code=${esnCode}`;
    }
    mtl.navigateTo({
      page: data,
      url: data,
    })
    hideSetting()
    // window.location.assign(data);
    // window.open(data)
    // window.location.href = data
  }
  const goToHomePage = (data, appname) => {
    const wb_at = window.localStorage.getItem("wb_at");
    const tenantId = window.localStorage.getItem("tenantId");
    const yhtToken = window.localStorage.getItem("yhtToken");
    // console.log(data)
    if (!data || data === "") {
      Toast.fail(intl.get("noAppsAlt"), 1);
      return;
    }
    Toast.loading(intl.get("loading"))
    mtl.getEsnCode({
      // url: window.localStorage.getItem("baseUrl"),
      // url: 'https://yonbuilder.diwork.com',
      url: getBaseUrl(),
      wb_at: wb_at,
      tenantId: tenantId,
      yht_access_token: yhtToken,
      success: function (res) {
        Toast.hide();
        // const finalUrl = "https://ys-u8c-daily.yyuap.com/approveCenter/index.html#/?auth_key=yhtToken&auth_value=bttWkpEeGFIMU9vM0M4dE9rNWY0UkJraTZ0VSszOXJibi82cGFic0tJKzYvYVVCME9JMWJ4NmNYWEN0UVh4UnlKQTlyQ2dpaDZJU0VkYisvRlcySHhxRnFZM3cyRDJvSjlIdS9za1ZQN0ZHRCtUWnNCV0NYWDNCUU1aTGRicllha2NfX3U4Yy1zc28tZGFpbHkueXl1YXAuY29t__69dae94530078d5c14496edfe03bb456_1617094979088&tenant_id=t69j1a5l"
        const esnCode = res.data;
        // const finalUrl = `${data}${/\?/.test(data) ? "&" : "?"}code=${esnCode}`;
        // console.log("openURL", finalUrl);
        if (esnCode && esnCode !== "") {
          if (
            mtl.platform.toLowerCase() === "qyandroid" ||
            mtl.platform.toLowerCase() === "qyios") {
            mtl.settingNavBar({
              hide: 0,
              success: function (res) {
                console.log('settingNavBarSuccess', res)
              },
              fail: function (err) {
                console.log('settingNavBarErr', err)
              }
            })
          }
          // window.location.href = finalUrl;
          goAppCenter(data, appname, esnCode)
        } else {
          Toast.hide();
          Toast.fail(intl.get("getCodeErr"), 1);
        }
      },
      fail: function (err) {
        Toast.hide();
        Toast.fail(err.message, 1);
        //  COMMENT 失败只是说明没有协同环境，但是也是可以打开应用的
        // window.location.href=data;
        goAppCenter(data, appname, '')
      },
    });
    // window.location.href=data
  };
  const reloadHandle = () => {
    setSpinF(true);
    initApps(history);
    setTimeout(() => {
      setSpinF(false);
    }, 1000);
  };

  //注册消息/待办返回时的监听事件
  const registerBackListener = () => {
    mtl.notice.registerBackListener({
      success: function (res) {
        console.log('registerBackListener', res)
        mtl.notice.getTodoMsgCount({
          success: function (res) {
            let resObj;
            try {
              resObj = JSON.parse(res)
            } catch (error) {
              resObj = res
            }
            let { todoCount, unMsgRead } = resObj;
            console.log('xxxxunreadmsgcount', resObj, todoCount, unMsgRead);
            window.localStorage.setItem('unMsgRead', unMsgRead)
            window.localStorage.setItem('unReadTodoCount', todoCount)
            unReadMsgListener(todoCount, unMsgRead)
          }
        })
      }
    })
  }

  const openTodoList = () => {
    registerBackListener()
    const tenantId = window.localStorage.getItem("tenantId");
    mtl.notice.openTodoList({
      tenantId: tenantId,
      success: function (res) {
        // let data = res;
      },
      fail: function (err) {
        var message = err.message; // 错误信息
        Toast.info(intl.get("mtlerr"), 2);
        console.log("openTodoList", err);
      },
    });
  };
  const openNoticeList = () => {
    registerBackListener()
    const tenantId = window.localStorage.getItem("tenantId");
    mtl.notice.openNoticeList({
      tenantId: tenantId,
      success: function (res) {
        // let data = res;
      },
      fail: function (err) {
        var message = err.message; // 错误信息
        Toast.info(intl.get("mtlerr"), 2);
        console.log("openNoticeList", err);
      },
    });
  };
  const cutTenantName = (tenantName) => {
    if (tenantName.length > 20) {
      return `${tenantName.substring(0, 15)}...`
    } else {
      return tenantName
    }
  }

  // console.log(tenantList)
  return (
    <div className={`work-box`}>
      <div className={"work-tend"}>
        <span onClick={() => selectHandle(true)} className={"work-tend-name"}>
          <span className={"work-tend-name-t"}>{tenantName}</span>
        </span>
        {selectShow ? (
          <div
            onClick={() => selectHandle(false)}
            className={"work-tend-select"}
          >
            <ul className={"select-box"}>
              {/* <li onClick={selectAction}>1</li> */}
              {tenantList.map((item) => {
                return (
                  <li onClick={() => selectAction(item)}>
                    <p>
                      <img className={"select-box-icon"} src={SpaceIcon}></img>
                    </p>
                    {cutTenantName(item.tenantName)}
                    <span className={"select-box-spacetype"}>企业</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        <span className={"icon-list-a"}>
          <span onClick={openTodoList}>
            <TodoIcon></TodoIcon>
          </span>
          <span className={'todo-num m-r-25'}>{+unReadTodoCount > 99 ? '99+' : unReadTodoCount}</span>
          <span onClick={openNoticeList}>
            <MsgIcon />
          </span>
          <span className={'todo-num'}>{+unMsgRead > 99 ? '99+' : unMsgRead}</span>
        </span>
      </div>
      {/* <div className="work-title"><span>应用名称</span></div> */}
      {/* <div className="work-title"><span>{intl.get('appName')}</span></div> */}
      {bannerData.enable === true && bannerData?.images?.length > 0 && (
        <div className="work-banner">
          <Carousel
            autoplay={true}
            autoplayInterval={bannerData.interval}
            infinite
          >
            {bannerData?.images?.map(({ src, type, href } = {}) => (
              <div
                onClick={() => {
                  if (typeof href == "string" && href && type != "none") {
                    goToHomePage(href, '');
                  }
                }}
                className="banner-top-item"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
            ))}
          </Carousel>
        </div>
      )}
      <div className="work-main">
        {/* <div className="work-main-w"><span>所构建应用</span><SyncOutlined onClick={reloadHandle} spin={spinF} /></div> */}
        <div className="work-main-w">
          <span>{intl.get("buildApp")}</span>
          <SyncOutlined onClick={reloadHandle} spin={spinF} />
        </div>
        {/* <div> */}
        <Carousel autoplay={false} infinite>
          {appsList.length ? (
            appsList.map((item) => {
              return (
                <div key={item[0].id} className="work-main-c">
                  {item.map((inItem) => {
                    return (
                      <div
                        onClick={() => goToHomePage(inItem.url, inItem.appName)}
                        key={inItem.id}
                        className="work-m-item"
                      >
                        <dl>
                          <dt>
                            <img src={inItem.icon} />
                          </dt>
                          <dd>{inItem.appName}</dd>
                        </dl>
                      </div>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <div className="work-main-c-none">
              {/* <dl className={'none-icon'}><dt></dt><dd>暂无应用</dd></dl> */}
              <dl className={"none-icon"}>
                <dt></dt>
                <dd>{intl.get("noApp")}</dd>
              </dl>
            </div>
          )}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};
// export default (Work);
export default connect(
  (state) => {
    return {
      tenantId: state.loginMessage.tenantId,
      tenantName: state.loginMessage.tenantName,
      tenantList: state.loginMessage.tenantList,
      appsList: [...state.appsMessage.appList],
      pagesList: state.appsMessage.pagesList,
      loginMessObj: {
        access_token: state.loginMessage.access_token,
        userId: state.loginMessage.userId,
        tenantId: state.loginMessage.tenantId,
      },
      unReadTodoCount: state.loginMessage.unReadTodoCount,
      unMsgRead: state.loginMessage.unMsgRead,
      theme: state.loginMessage.theme,
    };
  },
  {
    initApps: initApps,
    // pageChage,
    tenantChange,
    unReadMsgListener,
  }
)(Work);
