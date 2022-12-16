import {ref} from "vue";

export default function usePosts() {
    const posts = ref({})
    const getPosts = async (page= 1) => {
        axios.get('/api/posts?page=' + page)
            .then(responses => posts.value = responses.data)
    }

    return {posts, getPosts}
}
