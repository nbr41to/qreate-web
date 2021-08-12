import { atom } from 'recoil';
import { User } from 'src/type';

export const userState = atom<User>({
  key: 'user-state',
  default: null,
});

type ModalState = {
  type: string;
  message?: string;
  clicked?: () => void;
};
export const modalState = atom<ModalState>({
  key: 'modal-state',
  default: {
    type: '',
    message: '',
    clicked: () => {},
  },
});
