import React, { useState, useEffect } from "react";
import YInput from "../../components/Input";
import { Link } from "react-router-dom";
// import Change from "../../static/imgs/change.svg";
import { Change, Triangle } from "../../components/Icon";
import { LeftOutlined } from "@ant-design/icons";
import intl from 'react-intl-universal'
// import
import "./index.css";
// import Password from "antd/lib/input/Password";
const LoginCode = () => {
  const [isTel, setIsTel] = useState(true);
  const [isClick, setIsClick] = useState(false);
  const [btnVal, setBtnVal] = useState(intl.get('getCode'));
  // const { loginVal } = useParams()
  const userNameChange = () => {
    setIsTel(!isTel);
  };
  // const showChang = () => {
  //   setIsShow(!isShow);
  // };
  let interval = 0;
  const getCode = () => {
    if (isClick) return;
    setIsClick(true);
    let i = 10;
    setBtnVal(i);
    interval = setInterval(() => {
      i--;
      setBtnVal(i);
      if (i === 0) {
        setIsClick(false);
        setBtnVal(intl.get('getCode'));
        clearInterval(interval);
      }
    }, 1000);
  };
  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={"box"}>
      <div>
        <Link className={"yo-link"} to={"/login"} replace>
          <LeftOutlined className={"arrow-left"} />
        </Link>
      </div>
      <div className={"pt108"}>{intl.get('codeLogin')}</div>
      <div className="form">
        <div className={"line"}>
          {isTel ? (
            <div className={"fir"}>
              <span>+86 </span>
              <span className={"tri"}>
                <Triangle></Triangle>
              </span>
            </div>
          ) : null}
          <YInput
            className={`${isTel ? "mid-input" : "long-input"}`}
            type={isTel ? "tel" : "email"}
            label={isTel ? intl.get('phoneNum') : intl.get('email')}
          />
          <Change onClick={userNameChange}></Change>
        </div>
        <div className={"line"}>
          <YInput
            className={"shot-input"}
            type={"text"}
            label={intl.get('code')}
          ></YInput>
          <button className={"get-code"}>
            <span onClick={getCode}>{btnVal}</span>
          </button>
        </div>
      </div>
      <div className="log-con-next">
        <button className={"log-button"}>下一步</button>
      </div>
    </div>
  );
};

export default LoginCode;
