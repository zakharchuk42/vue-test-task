import {Ref, ref} from 'vue';
import {IUser} from '@/utils/types';

export const userStore:Ref<IUser | null> = ref(null)