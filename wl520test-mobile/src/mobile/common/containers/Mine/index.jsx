import React, { Fragment, useEffect, useState } from "react";
import { Editor, Space, Set, About, SetB, AboutB, Mine as MineIcon } from "../components/Icon";
// import { RightOutlined } from "@ant-design/icons";
import { Toast, Icon } from "../../components/antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import mtl from "mtl-js-sdk";
import intl from "react-intl-universal";
import notice from "mtl-js-sdk/lib/plugins/notice";

mtl.loadPlugin(notice);

import { getDomainPrefix } from '@utils';

const DOMAIN_PREFIX = getDomainPrefix();

const Mine = ({ total, userName, userAvatar, theme }) => {
    const [appVersion, setAppVersion] = useState("0");
  /**
   *  __temporary_annotation_
   */
  // const [platformF, setPlatformF] = useState(false);
    useEffect(() => {
        const platform = mtl.platform.toLowerCase();
    /**
     *  __temporary_annotation_
     */
    /**
     if (platform === "qyandroid" || platform === 'qyios') {
       setPlatformF(true);
     }
     */
        if (
      platform === "qyandroid" ||
      (platform === "qyios" && mtl.getSystemInfo)
    ) {
            mtl.getSystemInfo({
                success: function (data) {
                    console.log("getSystemInfo", data);
                    setAppVersion(data.YZVersion);
                },
                fail: function (err) {
                    console.log("getSystemInfo_err", err);
                },
            });
        }
    }, []);
  /**
   *  __temporary_annotation_
   */
  /*
  const handleClick = () => {
    mtl.notice.openTodoList({
      success: function (res) {
        // let data = res;
      },
      fail: function (err) {
        var message = err.message; // 错误信息
        Toast.info(intl.get('mtlerr'), 2);
        console.log('openTodoList',err)
      },
    });
  };
  const handleClicklist = () => {
    mtl.notice.openNoticeList({
      success: function (res) {
        // let data = res;
      },
      fail: function (err) {
        var message = err.message; // 错误信息
        Toast.info(intl.get('mtlerr'), 2);
        console.log('openNoticeList',err)
      },
    });
  };
  */
    return (
        <div className={`mine-box`}>
            <div className="mine-msg">
                <div className="mine-header">
                    {!userAvatar || userAvatar === "" ? <MineIcon></MineIcon> : (
                        <img src={userAvatar} alt="" />
          )}
                </div>
                <div>
                    <p className="mine-name">
                        <span>{userName}</span>
                        <div className="mine-ed">
                            {/* <Link to={`${DOMAIN_PREFIX}/workbench/editor`}>
                <Editor></Editor>
              </Link> */}
                        </div>
                    </p>
                    {/* <p className="mine-des">应用开发</p> */}
                    <p className="mine-des">{intl.get("appDevelop")}</p>
                </div>
            </div>
            {/* __todo: 暂时取消 应用开发和应用数量的显示  */}
            {/* <div className="mine-app-num">
        <div className="mine-a-n">
          <p className="mine-num">21</p>

          <p className="mine-w">{intl.get('appDevelop')}</p>
        </div>
        <div className="mine-a-n">
          <p className="mine-num">{total}</p>

          <p className="mine-w">{intl.get('appNum')}</p>
        </div>
      </div> */}
            <ul className="mine-list">
                <Link
                    style={{ color: "inherit" }}
                    to={`${DOMAIN_PREFIX}/workbench/config`}
        ></Link>
                {/* __temporary_annotation_ */}
                {/* {platformF ? (
          <Fragment>
            <li className="mine-list-c" onClick={handleClick}>
              <div className="mine-c-l">
                <Set></Set>
              </div>
              <div className="mine-c-r mine-c-r-l">
                <span>{intl.get('toDo')}</span>
                <Icon style={{ color: "#c8c8cd" }} type="right" />
              </div>
            </li>
            <li className="mine-list-c" onClick={handleClicklist}>
              <div className="mine-c-l">
                <Set></Set>
              </div>
              <div className="mine-c-r mine-c-r-l">
                <span>{intl.get('noticeList')}</span>
                <Icon style={{ color: "#c8c8cd" }} type="right" />
              </div>
            </li>
          </Fragment>
        ) : (
          ""
        )} */}
                <Link
                    style={{ color: "inherit" }}
                    to={`${DOMAIN_PREFIX}/workbench/setting`}
        >
                    <li className="mine-list-c">
                        <div className="mine-c-l">
                            <div className="yo-setting"></div>
                            {/* { theme==='0'?<Set></Set>:<SetB></SetB> } */}
                        </div>
                        <div className="mine-c-r mine-c-r-l mine-c-bm">
                            {/* <span>设置</span> */}
                            <span>{intl.get("set")}</span>
                            {/* <RightOutlined className="mine-ar" /> */}
                            <Icon style={{ color: "#c8c8cd" }} type="right" />
                        </div>
                    </li>
                </Link>
                {/* <li className="mine-list-c">
          <div className="mine-c-l">
            <About></About>
          </div>
          <div className="mine-c-r  mine-c-r-l">
            <span>{intl.get('version')}</span>
            <span className={'mine-version'}>v{ appVersion}</span>
          </div>
        </li> */}
                {mtl.platform.toLowerCase() === "qyios" ||
          mtl.platform.toLowerCase() === "ios" ? (
              <li className="mine-list-c">
                  <div className="mine-c-l">
                      <div className="yo-about"></div>
                      {/* { theme==='0'?<About></About>:<AboutB></AboutB> } */}
                  </div>
                  <div className="mine-c-r mine-c-r-l mine-c-bm">
                      <span>{intl.get("about")}</span>
                      <span className={"mine-version"}>v{appVersion}</span>
                  </div>
              </li>
        ) : (
            <Link
                style={{ color: "inherit" }}
                to={`${DOMAIN_PREFIX}/workbench/about`}
          >
                <li className="mine-list-c">
                    <div className="mine-c-l">
                        <div className="yo-about"></div>
                        {/* { theme==='0'?<About></About>:<AboutB></AboutB> } */}
                    </div>
                    <div className="mine-c-r mine-c-r-l mine-c-bm">
                        <span>{intl.get("about")}</span>
                        <div className="mine-c-r  mine-c-r-l mine-c-r-a">
                            <span className={"mine-version"}>v{appVersion}</span>
                            <Icon style={{ color: "#c8c8cd" }} type="right" />
                        </div>
                    </div>
                </li>
            </Link>
        )}
            </ul>

            {/* <ul className="mine-list">
        <li className="mine-list-c">
          <div className="mine-c-l">
            <About></About>
          </div>
          <div className="mine-c-r  mine-c-r-l">
            <span>{intl.get('version')}</span>
            <span className={'mine-version'}>v{ appVersion}</span>
          </div>
        </li>
      </ul> */}
        </div>
    );
};

export default connect((state) => {
    return {
        total: state.appsMessage.total,
        userName: state.loginMessage.userName,
        userAvatar: state.loginMessage.userAvatar,
        theme: state.loginMessage.theme,
    };
}, null)(Mine);
