import {Ref, ref} from 'vue';
import {ITodo} from '@/utils/types';

export const todosStore: Ref<ITodo[]> = ref([])

export function searchTodo(searchTodo: string): ITodo[] {
	return todosStore.value.filter((item: ITodo) => {
		if (item.title.includes(searchTodo.toLowerCase())) {
			return item;
		}
	})
}

export function addTodo(userId: string, text: string): void {
	todosStore.value.push({
		userId: +userId,
		id: +new Date(),
		title: text,
		completed: false
	})
}