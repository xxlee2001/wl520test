import { getDomainPrefix, getConfigInfo } from '@utils';
const DOMAIN_PREFIX = getDomainPrefix();
/* 定义自定义样式的数组 */
export const themeArry = [
    { key: 0, value: 'redness', file: 'less/redness.less' },
    { key: 1, value: 'blueness', file: 'less/blueness.less' },
]
/* 定义登陆方式 */
export const loginModes = [
    { key: 0, value: 'phonePwdLogin', path: `${DOMAIN_PREFIX}/workbench/otherlogin` },
    { key: 1, value: 'codeLogin', path: `${DOMAIN_PREFIX}/workbench/otherlogin` },
    // { key: 2, value: 'emailPwdLogin', path: `${DOMAIN_PREFIX}/workbench/otherlogin` },
    { key: 3, value: 'scanCodeLogin', path: '' },
]

export function addStyle(theme) {
    const file = themeArry.find(item => item.key == theme)?.file
    file ? require('../utils/'+file): null
}
