<script lang="ts" setup>
import {ITodo} from '@/utils/types';

defineProps({
	todo: {
		type: Object as () => ITodo,
		required: true,
	}
})
</script>

<template>
	<div class="todo-item">
		<div class="todo-item__left">
			<div>{{todo.userId}}</div>
			<div>{{todo.title}}</div>
		</div>
		<div>{{todo.completed}}</div>
	</div>
</template>

<style scoped>
	.todo-item {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		gap: 10px;
		cursor: pointer;
		transition: all .3s ease;
	}

	.todo-item:hover {
		background-color: #dedede;
	}

	.todo-item__left {
		display: flex;
		gap: 20px;
	}
</style>