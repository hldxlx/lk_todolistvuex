import Vue from 'vue';
import App from './App.vue';
import store from './store'
import './assets/css/base.css'

new Vue({
  el:"#app",
  // components:{
  //   App
  // },
  // template:"<App/>"
  store,
  render:h => h(App)
})
