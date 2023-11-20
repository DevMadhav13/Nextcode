import {atom} from "recoil";

export const usersState = atom({
  key: 'userAtomState',
  default: {
    isLoading: true,
    userEmail: ""
  },
});