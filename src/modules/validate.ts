import {Ref, ref} from 'vue';

export const validateTextInput = () => {
	const errorText = ref('');

	const validate = (writeableComputed: Ref<string>) => {
		const inputValue = writeableComputed.value;
		const lettersOnlyRegex = /^[a-zA-Z]+$/;

		if (!lettersOnlyRegex.test(inputValue)) {
			errorText.value = 'Будь ласка, введіть тільки букви.';
			writeableComputed.value = inputValue.replace(/\d/g, '');
		} else {
			errorText.value = '';
		}
	}

	return {errorText, validate}
};


export const validatePhoneInput = () => {
	const errorText = ref('');

	const validate = (writeableComputed: Ref<string>) => {
		const inputValue = writeableComputed.value;
		const lettersOnlyRegex = /^\d+$/;

		if (!lettersOnlyRegex.test(inputValue)) {
			errorText.value = 'Будь ласка, введіть тільки цифри.';
			writeableComputed.value = inputValue.replace(/[^\d]/g, '');
		} else {
			writeableComputed.value = inputValue.slice(0, 11);
			errorText.value = '';
		}
	}

	return {errorText, validate}
};

export const withoutValidate = () => {
	const errorText = ref('');

	const validate = (writeableComputed: Ref<string>) => {
		const inputValue = writeableComputed.value;
		writeableComputed.value = inputValue.trim();
	}

	return {errorText, validate}
};