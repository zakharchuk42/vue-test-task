<script lang="ts" setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheBody from '@/components/TheBody.vue';
</script>

<template>
	<div class="main">
		<TheHeader />
		<TheBody>
			<slot />
		</TheBody>
		<TheFooter />
	</div>
</template>

<style scoped>
	.main {
		display: flex;
		flex-direction: column;
		width: 100vw;
	}
</style>

