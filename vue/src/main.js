import { createApp } from 'vue'
import './style.css'
import store from './store'
import App from './App.vue'

createApp(App).mount('#app')
  .use(store)
  .mount('#app')
