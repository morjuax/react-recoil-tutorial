import { atom, selector } from 'recoil';

export const counter = atom({
  key: "counter",
  default: "0"
});


export const counterSelectState = selector({
  key: 'counterState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    return get(counter);
  },
});