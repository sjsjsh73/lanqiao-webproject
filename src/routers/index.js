import { createRouter, createWebHashHistory} from "vue-router"

const Home = () => import("@/pages/Home");

const routes = [
    {
        path: '/',
        name: "Home",
        mate:{
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

export default router;