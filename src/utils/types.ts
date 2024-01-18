import {Ref} from 'vue';

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

interface IValidationType {
	errorText: Ref<string>;
	validate: (writeableComputed: Ref<string>) => void;
}

export interface Validations {
	[EnumValidationType.TEXT]: IValidationType;
	[EnumValidationType.PHONE]: IValidationType;
}

export const enum EnumValidationType {
	TEXT = 'text',
	PHONE = 'phone',
}

export const enum EnumButtonType {
	GREEN = 'green',
	RED = 'red',
}
