<script lang="ts" setup>
import BaseInput from '@/components/BaseInput.vue';
import {ref} from 'vue';
import {EnumValidationType} from '@/utils/types';
import BaseButton from '@/components/BaseButton.vue';
import {addTodo} from '@/modules/todo';

const userId = ref('');
const textTodo = ref('');

function handleClick() {
	addTodo(userId.value, textTodo.value)
	userId.value = ''
	textTodo.value = ''
}

</script>

<template>
	<div class="add-todo">
		<div class="container">
			<BaseInput required placeholder="User ID" v-model="userId" :type="EnumValidationType.PHONE"/>
			<BaseInput required placeholder="Text todo" v-model="textTodo"/>
			<BaseButton @click="handleClick"> Add </BaseButton>
		</div>
	</div>
</template>

<style scoped>
	.add-todo {
		border-top: 1px solid #545454;
		background: #474747;
		padding: 10px 0;
		min-height: 60px;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		display: flex;
		gap: 6px;
		max-width: 1200px;
		width: 100%;
		padding: 0 10px;
	}

	@media (max-width: 600px) {
		.container{
			flex-direction: column;
		}
	}
</style>