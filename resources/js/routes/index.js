import {createRouter, createWebHistory} from "vue-router";
import PostsIndex from "../components/Posts/Index.vue"
import PostsCreate from "../components/Posts/Create.vue"

const routes = [
    {
        path: '/',
        name: 'posts.index',
        component: PostsIndex
    },
    {
        path: '/posts/create',
        name: 'posts.create',
        component: PostsCreate
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
