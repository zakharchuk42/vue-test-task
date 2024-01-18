import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { IUser } from '@/utils/types';
import {phoneFormatter} from '@/utils/functions';
import {url} from '@/utils/constants';
import {userStore} from '@/modules/user';

export function useLogin() {
	const username = ref('');
	const phone = ref('');
	const loginError = ref('');
	const loading = ref(false);
	const router = useRouter();

	const login = async () => {
		const user = {
			username: username.value,
			phone: phone.value,
		};

		try {
			loading.value = true
			const { data } = await axios.get(`${url}/users`);

			const matchedUser = data.find((u: IUser) => {
				return u.username === user.username && u.phone.split(' ')[0] === phoneFormatter(user.phone);
			});

			if (matchedUser) {
				userStore.value = matchedUser
				await router.push('/dashboard');
				username.value = ''
				phone.value = ''
				loginError.value = ''
			} else {
				loginError.value = 'Login error';
			}
		} catch (err) {
			console.error('Error fetching user:', err);
			loginError.value = 'Error fetching user';
		} finally {
			loading.value = false
		}
	};

	return {
		username,
		phone,
		loginError,
		login,
		loading
	};
}
