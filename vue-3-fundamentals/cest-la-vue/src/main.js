import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import UserPage from '@/views/UserPage.vue'

const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue')
        },
        {
            path: '/user',
            component: () => import('@/views/UserPage.vue')
        }
    ]
})

app.use(router)
app.mount('#app')
