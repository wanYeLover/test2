import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import { getLocalStorage } from "@/localStorge/localStorge";
import { HAVE_LOGIN } from "@/constant/constant";

const app = createApp(App);

/** 全局路由守护 */
router.beforeEach((to, from, next) => {
    // 只要登录过了，就可以访问页面，但是具体操作还是需要看是否登录
    const tag = getLocalStorage(HAVE_LOGIN);
    // 如果目标页面需要登录
    if(to.matched.some(record => record.meta.requireAuth)) {
        if(tag) {
            next();
        } else {
            if(to.path === '/') {
                next()
            } else {
                next({
                    path: '/login2'
                })
            }
        }
    }else {
        next()
    }

});

app.use(router);
app.mount('#app');


