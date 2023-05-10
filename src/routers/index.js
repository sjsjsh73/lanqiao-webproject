import { createRouter, createWebHashHistory} from "vue-router"

const Home = () => import("@/pages/Home");
const Detail = () => import("@/pages/Detail")

const routes = [
    {
        path: '/',
        name: "Home",
        mate: {
            title: "Home",
        },
        component: Home,
    },
    {
        path: '/shop/:id',
        name: "Detail",
        mate: {
            title: "Detail",
        },
        component: Detail,
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes,
    }
)

export default router;