import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import 'ant-design-vue/dist/reset.css';
import dropdown from './components/Dropdown.vue';
import comment from './components/comment.vue';
import float from './components/float.vue';


const app = createApp(App)
app.use(Antd);

// 全局注册组件
app.component('Dropdown', dropdown)
   .component('Comment', comment)
   .component('Float', float)

// 使用 Vue Router
app.use(router);

// 挂载 Vue 应用
app.mount('#app');