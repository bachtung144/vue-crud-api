import {ref} from "vue";

export default function useCategories() {
    const categories = ref({})
    const getCategories = async () => {
        axios.get('/api/categories')
            .then(responses => categories.value = responses.data.data)
    }

    return {categories, getCategories}
}
