import {ref} from 'vue';
import {ITodo} from '@/utils/types';

export const todosStore = ref([])

export function searchTodo(searchTodo: string): ITodo[] {
	return todosStore.value.filter((item: ITodo) => {
		if (item.title.includes(searchTodo.toLowerCase())) {
			return item;
		}
	})
}