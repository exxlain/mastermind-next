import { emptyElement } from '@/app/lib/constants';
const findEmptyElementIndex = (sequence: Array<string>)=>sequence.findIndex(el=> el === emptyElement);

export default findEmptyElementIndex;
