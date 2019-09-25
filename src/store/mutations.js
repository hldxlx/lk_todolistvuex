import {
  ADD_TODO,
  DEL_TODO,
  CHOOSE_ALL,
  DELHAS_FINISH
} from './mutation-types'
export default {
  [ADD_TODO](state,{todo}){
    state.todos.unshift(todo)
  },
  [DEL_TODO](state,{index}){
    state.todos.splice(index,1)
  },
  [CHOOSE_ALL](state,{value}){
    state.todos.forEach(todo =>{
      todo.finished = value;
    })
  },
  [DELHAS_FINISH](state){
    state.todos =  state.todos.filter(todo => !todo.finished)
  }
}
