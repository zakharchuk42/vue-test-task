<script lang="ts" setup>
import {userStore} from '@/modules/user';

</script>

<template>
	<div class="header">
		<div v-if="!!userStore" class="user-info">
			<div>
				<strong>Name:</strong> {{userStore.name}}
			</div>
			<div>
				<strong>Username:</strong> {{userStore.username}}
			</div>
			<div>
				<strong>Email:</strong> {{userStore.email}}
			</div>
			<div>
				<strong>Phone:</strong> {{userStore.phone}}
			</div>
			<div>
				<strong>Website:</strong> {{userStore.website}}
			</div>
		</div>
	</div>
</template>

<style scoped>
	.header {
		background: #474747;
		padding: 10px;
		min-height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.user-info {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		color: #c7c7c7;
		font-size: 17px;
	}

	@media (max-width: 600px) {
		.user-info {
			flex-direction: column;
		}
	}
</style>