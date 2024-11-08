import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import 'ant-design-vue/dist/reset.css';
import dropdown from './components/Dropdown.vue';

const app = createApp(App)

app.use(router)

app.use(Antd).component('Dropdown',dropdown ).mount('#app')


// 模拟复制CSS到剪贴板
