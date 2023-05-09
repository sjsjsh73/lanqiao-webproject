import { createRouter, createWebHashHistory} from "vue-router"


const routes = [
    {
        path: '/',
        name: "Home",
        meta:{
            title: "Home",
        },
        component: Home,
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes,
    }
)