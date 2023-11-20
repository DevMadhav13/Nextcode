import { atom } from "recoil";

interface CoursState {
  isLoading?: boolean;
  course: any[]; // Or the specific type of your courses
}

export const courseState = atom<CoursState>({
  key: 'courseAtomState',
  default: {
    isLoading: true,
    course: []
  }
});

export const Ecourse= atom<CoursState>({
  key: 'ecourse',
  default: {
    course: []
  }
});
