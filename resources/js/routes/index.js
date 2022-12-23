import {createRouter, createWebHistory} from "vue-router";
import PostsIndex from "../components/Posts/Index.vue"
import PostsCreate from "../components/Posts/Create.vue"
import PostsEdit from "../components/Posts/Edit.vue"
import AuthenticatedLayout from "../layouts/Authenticated.vue";
import GuestLayout from "../layouts/Guest.vue";
import LoginLayout from "../components/Login.vue";

const routes = [
    {
        component: GuestLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: LoginLayout
            }
        ]
    },
    {
        component: AuthenticatedLayout,
        children: [
            {
                path: '/posts',
                name: 'posts.index',
                component: PostsIndex,
                meta: { title: 'Posts' }
            },
            {
                path: '/posts/create',
                name: 'posts.create',
                component: PostsCreate,
                meta: { title: 'Create Posts' }
            },
            {
                path: '/posts/edit/:id',
                name: 'posts.edit',
                component: PostsEdit,
                meta: { title: 'Edit Posts' }
            },
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
