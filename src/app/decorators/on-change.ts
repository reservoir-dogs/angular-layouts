/* eslint-disable @typescript-eslint/naming-convention */
import { ISimpleChange } from './simple-change';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OnChange<TClass = any, TValue = any>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (that: TClass, change?: ISimpleChange<TValue>) => void): (target: any, key: PropertyKey) => void {
  const cachedValueKey: unique symbol = Symbol();
  const isFirstChangeKey: unique symbol = Symbol();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any, key: PropertyKey): void => {
    Object.defineProperty(target, key, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(value: any): void {
        this[isFirstChangeKey] = this[isFirstChangeKey] === undefined;

        if (this[isFirstChangeKey] || this[cachedValueKey] !== value) {
          // eslint-disable-next-line @typescript-eslint/typedef
          const oldValue = this[cachedValueKey];

          this[cachedValueKey] = value;

          const simpleChange: ISimpleChange<TValue> = {
            firstChange: this[isFirstChangeKey],
            previousValue: oldValue,
            currentValue: this[cachedValueKey],
          };

          callback.call(this, this, simpleChange);
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get(): any {
        return this[cachedValueKey];
      },
    });
  };
}
