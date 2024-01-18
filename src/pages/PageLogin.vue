<script setup lang="ts">
import {useLogin} from '@/composables/useLogin';
import BaseInput from '@/components/BaseInput.vue';
import {EnumValidationType} from '@/utils/types';
import BaseButton from '@/components/BaseButton.vue';

const { username, phone, loginError, login, loading } = useLogin();
</script>

<template>
	<div class="wrapper">
		<div class="register-card">
			<div class="register-card__header">
				description
			</div>
			<div class="register-card__form-wrapper">
				<span class="register-card__description">description</span>
				<form @submit.prevent="login" class="register-card__form">
					<BaseInput required placeholder="Username" v-model="username" :type="EnumValidationType.TEXT"/>
					<BaseInput required placeholder="Phone Number" v-model="phone" :type="EnumValidationType.PHONE"/>
					<BaseButton type="submit" :disabled="loading" >
						Login
					</BaseButton>
					<div class="error" v-if="loginError">{{ loginError }}</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.register-card {
		display: flex;
		flex-direction: column;
		max-width: 447px;
		width: 100%;
		border-radius: 5px;
		overflow: hidden;
	}

	.register-card__header {
		color: #5F5F5F;
		background: #A5A5A5;
		padding: 15px;
		text-align: center;
		font-size: 17px;
	}

	.register-card__form-wrapper {
		display: flex;
		flex-direction: column;
		padding: 15px 25px;
		background: #C3C3C3;
	}

	.register-card__description {
		color: #5F5F5F;
		font-size: 15px;
		margin-bottom: 15px;
	}

	.register-card__form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.error {
		color: red;
	}
</style>