<script lang="ts" setup>

import {ITodo} from '@/utils/types';
import TodoItem from '@/components/TodoItem.vue';

defineProps({
	todos: {
		type: Array as () => ITodo[],
		required: true,
		default: () => []
	}
})

</script>

<template>
	<TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
</template>