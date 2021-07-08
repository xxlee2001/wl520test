import React, { useState } from "react";
import {List,Picker,InputItem,NavBar,WhiteSpace,Toast} from '../../components/antd'

import "./index.css";
import { Link, useHistory, useParams } from "react-router-dom";

import { connect } from "react-redux";
import { reSetAction } from '../../../common/actions/appsAction'
import { getDomainPrefix } from '@utils'; 

const DOMAIN_PREFIX = getDomainPrefix();
const reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/;
const https = "https://"
const dataList = [
    {
        label: "yonBIP正式环境",
        value: `${https}yonbuilder.diwork.com`,
    // value: "https://yonbuilder.diwork.com",
    },
    {
        label: "yonBIP预发布环境",
        value: `${https}yonbuilder-pre.diwork.com`,
    // value: "https://yonbuilder-pre.diwork.com",
    },
    {
        label: "yonBIP日常环境",
        value: `${https}build.yyuap.com`,
    // value: "https://build.yyuap.com",
    },
    {
        label: "yonBIP私有云配置",
        value: "YBip",
    },
];

const Confs = ({reSetAction}) => {
    const [confData, setConfData] = useState([]);
    const [url, setUrl] = useState("");
    const history = useHistory()
    const { id } = useParams()
  // console.log('ddddd',params)
    const changConf = (e) => {
    // console.log(e);
        setConfData(e);
        setUrl('')
    };
    const urlChange = (e) => {
        setUrl(e);
    // console.log(e);
    };
    const clickHandle = () => {
    // window.localStorage.clear()
        if (!confData[0]) {
            Toast.info('请选择的url', 2)
            return
        }
        if (confData[0] === 'YBip') {
            if (!reg.test(url)) {
        // console.log(confData,!reg.test(confData),!reg.test(url))
                Toast.info('请填写正确的url', 2)
                return
            }
      // window.localStorage.setItem('envUrlList',url)
        } else {
      // console.log(confData[0])
      // window.localStorage.setItem('envUrlList',confData[0])
        }
    // console.log('选择环境')
        history.replace(`${DOMAIN_PREFIX}/workbench/login`)
        reSetAction()
    }
    return (
        <div className={"conf-cont"}>
            <NavBar mode="light">配置</NavBar>
            {/* <List.Item align={'middle'}>配置</List.Item> */}
            <WhiteSpace size="xl"></WhiteSpace>
            <Picker data={dataList} value={confData} cols={1} onChange={changConf}>
                <List.Item arrow="horizontal">选择环境</List.Item>
            </Picker>
            <WhiteSpace size="xl"></WhiteSpace>
            {confData[0] === "YBip" ? (
                <InputItem value={url} onChange={urlChange} placeholder={"输入环境URL"}>
          环境URL
        </InputItem>
      ) : null}
            <WhiteSpace size="xl"></WhiteSpace>
            <WhiteSpace size="xl"></WhiteSpace>
            <div className={"conf-mid"}>
                <button className={"log-button "} onClick={clickHandle}>确定</button>
            </div>
            <WhiteSpace size="xl"></WhiteSpace>
            {id === 'config'?null:<div className={"conf-mid"}>
                <Link to={`${DOMAIN_PREFIX}/workbench/home/mine`}>
                    <button className={"log-button log-button-cancel"}>取消</button>
                </Link>
            </div>}
        </div>
    );
};

export default connect(null, {
    reSet:reSetAction
})(Confs);
