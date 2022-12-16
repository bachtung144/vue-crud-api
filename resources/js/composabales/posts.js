import {ref} from "vue";

export default function usePosts() {
    const posts = ref([])
    const getPosts = async () => {
        axios.get('/api/posts')
            .then(responses => posts.value = responses.data)
    }

    return {posts, getPosts}
}
