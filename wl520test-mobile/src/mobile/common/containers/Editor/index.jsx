import React, { Fragment, useState } from "react";
import {NavBar,Icon,List,DatePicker,Picker } from '../../components/antd'
import "./index.css";
import { Link } from 'react-router-dom'
import BackIcon from '../../components/Icon/Back'
const PREFIX = process.env.__CLIENT__ ? (window._baseUrl || '') : (process.env.PREFIX || '');
const CLIENT = process.env.__CLIENT__;
let DOMAIN_PREFIX = CLIENT ? (window._baseUrl || '') : (PREFIX || '');
if (DOMAIN_PREFIX === undefined) {
  DOMAIN_PREFIX = ""
}


const Item = List.Item;
const Brief = Item.Brief;


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);


const genderList = [
  {
    label: '男',
    value: 'man',
  },
  {
    label: '女',
    value: 'woman',
  },
  {
    label: '保密',
    value: 'secret',
  },
]

const Editor = () => {
  const [date,setDate]=useState(now)
  return (
    <div className={'mineList'}>
      <NavBar
        mode="light"
        icon={<Link to={`${DOMAIN_PREFIX}/workbench/home/mine`} replace>
          {/* <Icon style={{ color: "#333" }} type="left" /> */}
          <BackIcon />
        </Link>}
      >
        我的信息
      </NavBar>
      <List renderHeader={() => ""}>
        <Item
          arrow="horizontal"
          extra={
            <div className={"headerL"}>
              <div className={"headerImg"}>
                <img src />
              </div>
            </div>
          }
        >
          头像
        </Item>
        <Item extra={"刘亭亭"}>用户名</Item>
        <Item extra={"17712341234"}>手机号</Item>
        <Item extra={"1212121@yonyou.com"}>邮箱</Item>
        <Picker data={genderList} cols={1}>
          <Item  arrow="horizontal">
            性别
          </Item>
        </Picker>

        <DatePicker
          mode="date"
          extra="Optional"
          value={date}
          onChange={date => setDate( date )}
        >
          <Item arrow="horizontal">
            生日
          </Item>
        </DatePicker>
      </List>
    </div>
  );
};

export default Editor;
