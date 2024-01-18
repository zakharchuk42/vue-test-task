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
	<div class="todo-table">
		<TodoItem v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :class="index % 2 ? 'row-color' : 'row-color_secondary'"/>
	</div>
</template>

<style scoped>
	.todo-table {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 25px 0;
	}

	.row-color {
		background: #A5A5A5;
	}

	.row-color_secondary {
		background: #C3C3C3;
	}
</style>