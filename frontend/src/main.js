import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from "vue3-google-login";
import store from './store';


const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId:
    "151508142169-2mc0r9sra0b7bjfi0otpgrh88ghumdsq.apps.googleusercontent.com",
});

app.use(router)

app.use(store)


app.mount('#app')
