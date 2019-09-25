export default {
  //已完成的数量
  finishCount(state){
    return state.todos.reduce((total,item) => total + (item.finished ? 1 : 0),0)
  },
  //总计多少件
  allCount(state){
    return state.todos.length;
  },
  isCheckedAll(state,getter){
    return getter.finishCount === state.todos.length && state.todos.length > 0;
  }
}
