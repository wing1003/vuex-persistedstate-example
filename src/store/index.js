import vue from 'vue'
import vuex from 'vuex'
import mutations from './mutation'
import getters from './getter'
import createPersistedState from 'vuex-persistedstate'

vue.use(vuex)

const state = {
  isLoading:false
}

const vuexPersisted = new createPersistedState({
  key:'myVuex',
  storage: window.localStorage,
  reducer: state => ({
    isLoading:state.isLoading
  }),
  filter: mutation => (
    'CHANGE_LOADING' === mutation.type
  )
});

export default new vuex.Store({
  state,
  getters,
  mutations,
  plugins:[vuexPersisted]
})
