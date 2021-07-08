import React from "react";
import BackIcon from '../../components/Icon/Back'
import { NavBar, List } from "../../components/antd";
import { useHistory } from "react-router-dom";
import intl from "react-intl-universal";
import "./index.css";
import { connect } from "react-redux";
import { regionChange } from '../../actions/login'
import { getDomainPrefix } from '@utils'; 

const DOMAIN_PREFIX = getDomainPrefix();

const Item = List.Item;
const ReginCode = ({regionChange}) => {
    const history = useHistory()
    return (
        <div>
            <NavBar
                mode="light"
                icon={
                    <a onClick={()=>history.goBack()}>
                        {/* <Icon style={{ color: "#333" }} type="left" /> */}
                        <BackIcon />
                    </a>
                }
            >
                {/* 选择国家或地区 */}
                {intl.get("regionCode")}
            </NavBar>
            <List renderHeader={() => ""}>
                {/* <Item extra={<span className={"deff-font"}>+86</span>}>用户名</Item> */}
                {intl.get("regionList").map((item) => {
                    return (
                        <Item onClick={() => {
                            // 将数据保存，为了和记住密码中的regecode区分
                            regionChange({ regionCode: item.value })
                            window.localStorage.setItem("regionchangeCode",item.value)
                            history.goBack()
                            //history.replace(`${DOMAIN_PREFIX}/workbench/login`)
                        }} key={item.value} extra={<span className={"deff-font"}>{item.value}</span>}>{item.label}</Item>
                    );
                })}
            </List>
        </div>
    );
};

export default connect(null, {
    regionChange:regionChange
})(ReginCode);
