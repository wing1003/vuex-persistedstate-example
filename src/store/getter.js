export default {
  loadingTxt:state => {
    return state.isLoading ? '已完成' : '加载中...'
  }
}
