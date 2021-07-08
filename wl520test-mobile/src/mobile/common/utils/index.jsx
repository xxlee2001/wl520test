import mtl from 'mtl-js-sdk';
import intl from "react-intl-universal";
import { ToastMes as Toast } from '../components/antd'
/* 手机号验证 */
function testPhoneNumber(phoneNuber = '') {
    let reg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
    return reg.test(phoneNuber.trim());
}
/* 台湾手机号验证 */
function testPhoneNumberTw(phoneNumber = '') {
    let reg = /(^[1][3-8]\d{9}$|^([6|9])\d{7}$|^[0][9]\d{8}$|^6\d{5}$)/;
    return reg.test(phoneNumber.trim());

}
/* 验证邮箱 */
function tsetEmail(email = '') {
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    return reg.test(email.trim())
}

//记住手机号展示的时候，给手机号加空格
function formatPhone (value){
    value = value.replace(/\s*/g, "");
    var result = [];
    for(var i = 0; i < value.length; i++){
        if (i==3||i==7){
            result.push(" " + value.charAt(i));
        }else{
            result.push(value.charAt(i));
        }
    }
    value = result.join(""); 
    return value
}

// 验证邮箱密码是否正确
function testPhoneOrEmail(username, isTel, regionCode){
    username = username.replace(/\s*/g, "")
    if(isTel){
        if(username.trim() === "") {
            Toast.fail(intl.get("writePlease")+ intl.get("phoneNum"))
            return false
        }
        // 台湾手机号
        if(regionCode.trim() === '+886') {
            if(!testPhoneNumberTw(username.trim())) {
                Toast.fail(intl.get("phoneNumberTips"), 1)
                return false
            }
        }else if (!testPhoneNumber(username.trim())) { // 非台湾手机号验证
            Toast.fail(intl.get("phoneNumberTips"), 1)
            return false
        }
    }else {
        if(username.trim() === "") {
            Toast.fail(intl.get("writePlease")+intl.get("email"))
            return false
        }
        if (!tsetEmail(username.trim())) {
            Toast.fail(intl.get("emailTips"), 1)
            return false;
        }
    }
    return true
}

export {
    testPhoneNumber,
    testPhoneNumberTw,
    tsetEmail,
    formatPhone,
    testPhoneOrEmail
}