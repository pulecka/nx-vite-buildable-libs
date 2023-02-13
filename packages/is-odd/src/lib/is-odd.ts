import { isEven } from '@custompath/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
