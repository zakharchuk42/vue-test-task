<script setup lang="ts">
import MainLayout from '@/Layouts/MainLayout.vue';
</script>

<template>
	<MainLayout>
		<router-view />
	</MainLayout>
</template>

<style>
body {
	margin: 0;
}

#app {
	display: flex;
	min-height: 100vh;
}
</style>