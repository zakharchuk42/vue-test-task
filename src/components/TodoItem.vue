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
		<div>{{todo.title}}</div>
		<div>{{todo.completed}}</div>
	</div>
</template>

<style scoped>
	.todo-item {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border-radius: 5px;
		background-color: #fff;
		gap: 10px;
	}
</style>