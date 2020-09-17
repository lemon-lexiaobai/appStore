import * as types from './mutations-types'

const mutations = {
  [types.SET_CATEGORY] (state, category) {
    state.category = category
  }
}
export default mutations
