<script lang="ts" setup>
import {defineProps} from 'vue';
import {EnumButtonType} from '@/utils/types';

const props = defineProps({
	color: {
		type: String as () => EnumButtonType,
		default: EnumButtonType.GREEN
	}
});

const colorMap: Record<EnumButtonType, string> = {
	[EnumButtonType.GREEN]: 'green',
	[EnumButtonType.RED]: 'red'
}

const classes = `${colorMap[props.color]}`

</script>

<template>
	<button :class="classes"><slot /></button>
</template>

<style>
	button {
		border: none;
		color: white;
		border-radius: 5px;
		padding: 10px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		font-weight: 600;
	}

	.green {
		background: #519945;
	}

	.green:hover {
		background: #3e7535;
	}

	.red {
		background: #a2303d;
	}

	.red:hover {
		background: #812630;
	}
</style>