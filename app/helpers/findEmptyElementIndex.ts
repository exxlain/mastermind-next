import { emptyElement } from '@/app/lib/constants';
const findEmptyElementIndex = (sequence: Array<string>): number=>sequence.findIndex(el=> el === emptyElement);

export default findEmptyElementIndex;
