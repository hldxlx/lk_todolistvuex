import {
  ADD_TODO,
  DEL_TODO,
  CHOOSE_ALL,
  DELHAS_FINISH
} from './mutation-types'
export default {
 addTodo({commit},todo){
   commit(ADD_TODO,{todo})
 },
  delTodo({commit},index){
    commit(DEL_TODO,{index})
  },
  chooseAll({commit},value){
    commit(CHOOSE_ALL,{value})
  },
  delHasFinish({commit}){
    commit(DELHAS_FINISH)
  }

}
