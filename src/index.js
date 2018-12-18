import Vue from 'vue'
import App from './App.vue'
import router from './router'
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})

console.log('i am  src index.js')