/**
 * ys 扩展
 */
import collapsecontainer from './components/meta/CollapseContainer';
import * as basic from './extends/basic'
import * as toolbar from './extends/toolbar'

let extendComp = {
  basic,
  toolbar,
  meta: {
    NCCTreeRefer: '',
    collapsecontainer
  }
}
if(process.env.__THEMETYPE__ === 'ncc') {
  const {basic = {}, filter = {}, refer = {}} = require('@mdf/metaui-web-ncc').default;
  // 扩展 cControlType
  extendComp = {
    // 'basic': Object.assign({},{Input,Select,Refer,DatePicker,Filter,PageIcon,ReferToolbar,ReferModal,SearchTree}),
    basic: Object.assign({}, basic),
    filter: Object.assign({}, filter),
    refer: Object.assign({}, refer)
  }
}
export default extendComp;
