import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login";
import Question from "@/components/Question";
import Login2 from "@/components/Login2";
import AddUser from "@/components/AddUser";
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login },
    { path: '/login2', component: Login2},
    { path: '/question', component: Question},
    { path: '/addUser', component: AddUser, meta: {requireAuth: true}}
]



const router = createRouter({
    mode: 'history',
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router