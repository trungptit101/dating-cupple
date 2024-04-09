import { createApp } from 'vue'
import pinia from '@/stores/init'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
import './assets/iconfonts/style.css'
import i18n from '@/i18n'
import { uppercaseTrim } from '@/constants/directive'

const app = createApp(App)
app.directive('uppercase-trim', uppercaseTrim)
app.use(pinia).use(i18n).use(router)
app.mount('#app')
