<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{finishCount}}件</span> / 总计{{allCount}}件
        </span>
    <button class="btn btn-warning" @click="delHasFinish()">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "Footer",
    computed:{
      ...mapGetters(['finishCount','allCount']),
      isCheck:{
          get(){
              return this.$store.getters.isCheckedAll
          },
          set(value){
             this.$store.dispatch("chooseAll",value);
          }
      }
    },
    methods:{
      delHasFinish(){
        this.$store.dispatch("delHasFinish");
      }
    }
  }
</script>

<style scoped>
  /*尾部*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
