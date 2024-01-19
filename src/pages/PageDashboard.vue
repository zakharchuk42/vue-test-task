<script setup lang="ts">
import {useFetchTodo} from '@/composables/useFetchTodo';
import {computed, onMounted, watch} from 'vue';
import BaseSelect from '@/components/BaseSelect.vue';
import {todoStatus, usersId} from '@/utils/constants';
import BaseInput from '@/components/BaseInput.vue';
import {EnumValidationType} from '@/utils/types';
import TodoTable from '@/components/TodoTable.vue';
import {searchTodo} from '@/modules/todo';
import BaseLoading from '@/components/BaseLoading.vue';
import AddTodo from '@/components/AddTodo.vue';

onMounted(() => {
	fetchData({
		userId: null,
		completed: null
	})
})

const {loading, userId, completed, findText, fetchData} = useFetchTodo()

watch([userId, completed], ([newUserId, newCompleted]) => {

	fetchData({
		userId: newUserId === 'All users' ? null : newUserId,
		completed: newCompleted === 'All status' ? null : newCompleted,
	});
})

const todos = computed(() => searchTodo(findText.value))
</script>

<template>
	<div class="dashboard-wrapper">
		<div class="header-actions">
			<BaseInput placeholder="Find todo..." v-model="findText" />
			<BaseSelect placeholder="User ID"
			            :options="usersId"
			            @select="userId = $event"
			/>
			<BaseSelect placeholder="Task completed"
			            :options="todoStatus"
			            @select="completed = $event"
			/>
		</div>
		<div v-if="loading" class="loading-block">
			<BaseLoading />
		</div>
		<TodoTable v-else :todos="todos"/>
		<AddTodo />
	</div>
</template>

<style scoped>
	.dashboard-wrapper {
		max-width: 1200px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
	}

	.header-actions {
		display: flex;
		gap: 6px;
	}

	.loading-block {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	@media (max-width: 600px) {
		.header-actions {
			flex-direction: column;
		}
	}
</style>