import { CHANGE_LOADING } from './mutation-types'

export default {
  [CHANGE_LOADING](state){
    state.isLoading = !state.isLoading
  }
}
