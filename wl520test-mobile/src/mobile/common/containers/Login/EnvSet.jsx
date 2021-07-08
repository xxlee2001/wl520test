import React, { useState, useEffect } from "react";
import { NavBar, List, InputItem, Toast,Button } from "../../components/antd";
import intl from "react-intl-universal";
import { Link, useHistory,useParams } from "react-router-dom";
import { saveURL,changeUrl } from "../../actions/login";
import { connect } from "react-redux";
// import { MinusSquareOutlined } from '@ant-design/icons'
import axios from 'axios'
import mtl from 'mtl-js-sdk'
import { getDomainPrefix } from '@utils'; 

 const DOMAIN_PREFIX = getDomainPrefix();
const EnvSet = ({ envUrlList, saveURL,changeUrl }) => {
  const history = useHistory();
  const { id } = useParams()
  // console.log(id)
  const [label, setLabel] = useState("");
  const [oid, setOid] = useState("");
  const [value, setValue] = useState("");
  const [isSaveF, setIsSave] = useState(false)
  const [isRight,setIsRight] = useState(false)
  useEffect(() => {
    // console.log(id,envUrlList)
    if (id) {
      const [item] = envUrlList.filter(val => val.id === id)
      setValue(item.value || '')
      setLabel(item.label || '')
      setOid(id || '')
    }
  }, []);
  const cancel = () => {
    // setIsSet(false);
    history.replace(`${DOMAIN_PREFIX}/workbench/env`);
  };

  const openQR = () => {
    mtl.scanQRCode({
      scanType: ["qrCode"],
      needResult: 1,
      success: function(res) {
        var result = res.resultStr;
        setValue(result)
        mtl.closeScanQRCode();
      },
      fail: function(err) {
        var message = err.message; // 错误信息
      }
    });
  }
  const okSave = () => {
    if (isRight) {
      Toast.fail(intl.get("rightURL"), 2);
      return
    }
    if (!isSaveF) {
      Toast.fail(intl.get("envnosave"), 2);
      return
    }

    if (label.trim() === "") {
      Toast.fail(intl.get("inputLable"), 2);
      return;
    }
    if (value.trim() === "") {
      Toast.fail(intl.get("inputUrl"), 2);
      return;
    }

    // return
    if (oid !== '') {
      changeUrl({label, value, oid})
      history.replace(`${DOMAIN_PREFIX}/workbench/env`);
      return
    }

    if (envUrlList.some((v) => v.value === value ||v.label === label)) {
      Toast.fail(intl.get("addFail"), 2);
      return;
    }
    saveURL({ label, value,id:+new Date()+'' });
    history.replace(`${DOMAIN_PREFIX}/workbench/env`);
  };
  const testClick = () => {
    Toast.loading(intl.get("testing", 0, null, true))
    axios.get(value).then(res => {
      const { baseUrl } = res.data.data; // 返回数据
      console.log(res.data,baseUrl)
        if (baseUrl) {
          setIsSave(true)
          setIsRight(false)
          Toast.success(intl.get('envCanUse'), 1)
          return
        }
        Toast.fail(intl.get('envNoUse'),1)
        // envChange(i,dispatch)
        // Toast.hide()

    }).catch(err => {
      var message = err.message; // 错误信息
        setIsRight(true)
        Toast.fail(intl.get('envNoUse'),1)
    })
    // mtl.request({
    //   url: value,
    //   method: "get",
    //   success: function(res) {
    //     const {baseUrl} = res.data; // 返回数据
    //     if (baseUrl) {
    //       setIsSave(true)
    //       setIsRight(false)
    //     }
    //     // envChange(i,dispatch)
    //     // Toast.hide()
    //     Toast.success(intl.get('envCanUse'),1)
    //   },
    //   fail: function(err) {
    //     var message = err.message; // 错误信息
    //     setIsRight(true)
    //     Toast.fail(intl.get('envNoUse'),1)
    //   }
    // })
  }
  return (
    <div>
      <NavBar
        mode="light"
        icon={
          <span style={{ color: "#333" }} onClick={cancel}>
            {/* 取消 */}{intl.get('cancel')}
          </span>
        }
        rightContent={
          <span onClick={okSave} style={{ color: isSaveF?"#da6964":"#E14C46" }}>
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
            setLabel(e);
          }}
        ></InputItem>
        <InputItem
          clear
          placeholder={intl.get("inputUrl")}
          value={value}
          onChange={(e) => {
            // console.log(e);
            setValue(e);
          }}
          extra={<span className={'plat-icon qrcode-icon'} onClick={openQR} /> }
        ></InputItem>
      </List>
        <div className={'white-space-20'}></div>
        <Button className={'test-link-btn'} onClick={testClick}>{intl.get('testUrl')}</Button>
    </div>
  );
};

export default connect(
  (state) => ({
    envUrlList: state.loginMessage.envUrlList,
  }),
  {
    saveURL: saveURL,
    changeUrl:changeUrl
  }
)(EnvSet);
