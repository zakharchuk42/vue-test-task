import {Ref, ref} from 'vue';
import axios from 'axios';
import {todosStore} from '@/modules/todo';
import {url} from '@/utils/constants';

interface Params {
	userId: string | null,
	completed: string | null
}

export function useFetchTodo(): {
	loading: Ref<boolean>
	fetchData: (params: Params) => void
	userId: Ref<string | null>
	completed: Ref<string | null>
	findText: Ref<string>
} {
	const loading = ref(false);
	const userId = ref(null)
	const completed = ref(null)
	const findText = ref('')

	async function fetchData(params: Params) {

		try {
			loading.value = true
			const { data } = await axios.get(`${url}/todos`, {
				params
			});
			todosStore.value = data
		} catch (err) {
			console.error('Error fetching user:', err);
		} finally {
			loading.value = false
		}
	}

	return {
		loading,
		fetchData,
		userId,
		completed,
		findText
	}
}