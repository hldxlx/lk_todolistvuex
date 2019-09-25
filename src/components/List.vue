<template>
  <ul class="todo-main">
      <Item v-for="(todo,index) in $store.state.todos"
            :todo="todo"
            :key="index"
            :index="index"
      />
  </ul>
</template>

<script>
    import Item from './Item.vue'
    export default{
        name:"List",
        data(){
          return {

          }
        },
        components:{
          Item
        }
    }
</script>

<style scoped>
  /*列表*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }
</style>
