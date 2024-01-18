<script lang="ts" setup>

defineProps({
	options: {
		required: true,
		type: Array,
	},
	placeholder: {
		required: true,
		type: String,
	},
	selected: {
		type: [Number, String],
	},
})

const emit = defineEmits(['select'])

function select(value: string | null) {
	emit('select', value)
}

</script>

<template>
	<select @change="select($event.target.value)"
	>
		<option disabled value="">
			{{ placeholder }}
		</option>
		<option
				v-for="{ value, label } in options"
				:key="value"
				:value="value"
				:selected="value === selected"
		>
			{{ label }}
		</option>
	</select>
</template>


<style scoped>
select {
	border-radius: 5px;
	outline: none;
	padding: 10px;
	border: none;
	color: #353535;
	font-size: 17px;
	width: 100%;
}
</style>