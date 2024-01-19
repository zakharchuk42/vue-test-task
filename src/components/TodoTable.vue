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
		<TodoItem v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :class="`${index % 2 ? 'row-color' : 'row-color_secondary'} row`"/>
	</div>
</template>

<style scoped>
	.todo-table {
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		overflow: hidden;
		background: #FFF;
	}

	.row {
		border-bottom: 1px solid #A5A5A5;
	}

	.row-color {
		background: #FFF;
	}

	.row-color_secondary {
		background: #f5f5f5;
	}
</style>