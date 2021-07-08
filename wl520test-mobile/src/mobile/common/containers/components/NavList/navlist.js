import React from 'react'
// import { Mine, Workbench } from "../Icon";
import intl from 'react-intl-universal'
import './index.css'

const PREFIX = process.env.__CLIENT__ ? (window._baseUrl || '') : (process.env.PREFIX || '');
const CLIENT = process.env.__CLIENT__;
let DOMAIN_PREFIX = CLIENT ? (window._baseUrl || '') : (PREFIX || '');
if (DOMAIN_PREFIX === undefined) {
  DOMAIN_PREFIX = ""
}
// console.log(DOMAIN_PREFIX,'0000000000')
export const navlist = ()=>[
  {
    Icon: ()=><div className={'nav-plt'}></div>,
    // title: '工作台',
    title: intl.get('work'),
    link:`${DOMAIN_PREFIX}/workbench/home/work`
  },
  {
    Icon: ()=><div className={'nav-mine'}></div>,
    // title: '我的',
    title: intl.get('mine'),
    link:`${DOMAIN_PREFIX}/workbench/home/mine`
  },
];
