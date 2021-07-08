import deepmerge from 'deepmerge'

import * as basic from './basic'
import * as toolbar from './toolbar'
import * as meta from './meta'

import yonbuilderMdfExtend from 'yonbuilder-mdf-extend/lib/unify'

const localExtend = {
  basic,
  toolbar,
  meta
}
const mergedExtend = deepmerge(localExtend, yonbuilderMdfExtend)
export default mergedExtend
