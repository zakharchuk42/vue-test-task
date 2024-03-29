<script setup lang="ts">
import {computed, defineProps} from 'vue';
import {validatePhoneInput, validateTextInput, withoutValidate} from '@/modules/validate';
import {EnumValidationType, Validations} from '@/utils/types';

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
	},
	required: {
		type: Boolean,
		default: false
	},
	type: {
		type: String as () => EnumValidationType,
		default: EnumValidationType.WITHOUT
	}
});

const validateMap: Validations = {
	text: validateTextInput(),
	phone: validatePhoneInput(),
	without: withoutValidate(),
}

const emit = defineEmits(['update:modelValue'])

const writeableComputed = computed<string>({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value.trim())
	},
})

const {errorText, validate} = validateMap[props.type]

function validateInput() {
	validate(writeableComputed)
}

</script>

<template>
	<div v-if="!type" class="input-wrapper">
		<input type="text"
		       :required="required"
		       :placeholder="placeholder"
		       v-model="writeableComputed"
		/>
	</div>
	<div v-else class="input-wrapper">
		<input type="text"
		       :required="required"
		       :placeholder="placeholder"
		       v-model="writeableComputed"
		       @input="validateInput"/>
		<p class="error-text" v-show="errorText">
			{{errorText}}
		</p>
	</div>
</template>

<style scoped>
	.input-wrapper {
		position: relative;
		display: flex;
		width: 100%;
	}

	input {
		border-radius: 5px;
		outline: none;
		padding: 10px;
		border: none;
		color: #353535;
		font-size: 17px;
		width: 100%;
	}

	.error-text {
		position: absolute;
		bottom: -28px;
		font-size: 12px;
		color: red;
	}
</style>