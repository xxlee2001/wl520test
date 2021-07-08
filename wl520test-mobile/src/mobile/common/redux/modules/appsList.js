import { APPS_INIT,APPS_PAGE, RESET } from '../../actions/appsAction'
// import { R } from '../../actions/login'
// import { fromJS }  from 'immutable'
import {arrTrans } from '../../actions/utils'
const defaultState = {
  total: 0, //app 数量
  appList: window.localStorage.getItem('appsList')?arrTrans(20,JSON.parse(window.localStorage.getItem('appsList'))):[],
  pagesList:[0]
}
export default (state = defaultState,{type,payload}) => {
  switch (type) {
    case RESET:
      return {
        total: 0, //app 数量
        appList: [],
        pagesList:[0]
      }
    case APPS_PAGE:
      // console.log('payload',payload)
      return {
        ...state,
        appList:new Map([...state.appList.set(payload.pageIndex,payload.list)])
    }
    case APPS_INIT:
      // let appsMap=new Map(),pagesList = [], nums = payload.total / 20 ;
      // for (let i = 0; i < nums; i++){
      //   appsMap.set(i, [])
      //   pagesList.push(i)
      // }
      // appsMap.set(0,payload.list)
      return {...state,total:payload.total,appList:[...payload.list],total:payload.total}
  }
  return state
}

