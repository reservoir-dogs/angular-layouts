export interface ISimpleChange<T> {
  firstChange: boolean;
  previousValue: T;
  currentValue: T;
}
