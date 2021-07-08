import NavBar from "antd-mobile/lib/nav-bar";
import "antd-mobile/lib/nav-bar/style";
import Icon from "antd-mobile/lib/icon";
import "antd-mobile/lib/icon/style";
import List from "antd-mobile/lib/list";
import "antd-mobile/lib/list/style";
import Radio from "antd-mobile/lib/radio";
import "antd-mobile/lib/radio/style";
import Toast from "antd-mobile/lib/toast";
import "antd-mobile/lib/toast/style";
import DatePicker from "antd-mobile/lib/date-picker";
import "antd-mobile/lib/date-picker/style";
import Picker from "antd-mobile/lib/picker";
import "antd-mobile/lib/picker/style";

import InputItem from "antd-mobile/lib/input-item";
import "antd-mobile/lib/input-item/style";

import WhiteSpace from "antd-mobile/lib/white-space";
import "antd-mobile/lib/white-space/style";
import Modal from "antd-mobile/lib/modal";
import "antd-mobile/lib/modal/style";
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style'

import ActivityIndicator from 'antd-mobile/lib/activity-indicator'
import 'antd-mobile/lib/activity-indicator/style'

import Checkbox from "antd-mobile/lib/checkbox";
import "antd-mobile/lib/checkbox/style";

import React from 'react'
import isPlainObject from 'lodash/isPlainObject'
import extend from 'lodash/extend'
import extendWith from 'lodash/extendWith'
import isUndefined from 'lodash/isUndefined'

// const ToastMes =  function (...args){
//   // 兼容旧的写法，参数推荐使用语义对象(option)
//     let option = {
//         title: '',
//     // type: info | success | error | warning | fail
//         type: 'info',
//         content: null,
//         duration: 2,
//         onClose: function () {
//             if (args[3]) {
//                 args[3]();
//             }
//         },
//         mask: true
//     }
//     if (isPlainObject(args[0]) && !React.isValidElement(args[0])) {
//         option = extend(option, args[0])
//     } else {
//         option = extendWith(option, { title: args[0], type: args[1], content: args[2] }, (objValue, srcValue) => {
//             return isUndefined(srcValue) ? objValue : srcValue
//         })
//     }

//     let { title, type, duration, onClose, mask } = option

//   // error -> fail
//     if (type === 'error' || type === 'fail') {
//         type = 'fail'
//         title = <div className='retail-toast'><i className='icon icon-cuowutishi' /><p>{title}</p></div>;
//     }
//     if (type === 'success') {
//         type = 'success'
//         title = <div className='retail-toast'><i className='icon icon-chenggongtishi' /><p>{title}</p></div>;
//     }
//   // warning -> info
//     if (type === 'warning' || type === 'info') {
//         type = 'info'
//         title = <div className='retail-toast'><i className='icon icon-tishi' /><p>{title}</p></div>;
//     }
//     if (type === 'loading') {
//         type = 'loading'
//       // title = <div className='retail-toast'><i className='icon icon-tishi' /><p>{title}</p></div>;
//     }

//     return Toast[type](title, duration, onClose, mask)
// }
const ToastMes = {
    fail: function(content){
        return Toast.fail(content, 2)
    },
    success: function(content){
        return Toast.success(content, 2)
    },
    info: function(content){
        return Toast.info(content, 2)
    },
    loading: function(content){
        return Toast.loading(content, 0, null, true)
    },
    hide: function(){
        return Toast.hide()
    }
}

export {
  Button,
  NavBar,
  Icon,
  List,
  Radio,
  Toast,
  DatePicker,
  Picker,
  InputItem,
  WhiteSpace,
  Modal,
  ActivityIndicator,
  Checkbox,
  ToastMes
};
