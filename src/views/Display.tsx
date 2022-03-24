import { useRecoilValue } from 'recoil';
import { counter, counterSelectState } from '../state/atoms';

export default function Display() {
  const number = useRecoilValue(counterSelectState);
  console.log(number)
  return (<p>{number}</p>)
}