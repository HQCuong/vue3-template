import {
  provide,
  inject,
  readonly,
  shallowReadonly,
  isRef,
  InjectionKey,
} from 'vue';
import isObject from 'lodash/isObject';
import { logger } from '@/utils/logger';
import type { ReadonlyInjectionKey } from '@/symbols';

/* eslint-disable no-param-reassign */
/* eslint-disable max-params */

/**
 * Provides a readonly value to the Vue dependency injection system.
 * 
 * @param key - The injection key to provide the value under.
 * @param value - The value to be provided.
 * @param deep - Whether to make the value deeply readonly. Defaults to true.
 * @param mutator - A function to mutate the value. Defaults to a function that sets the value.
 */
export const provideReadonly = <T> (
  key: ReadonlyInjectionKey<T>,
  value: T,
  deep = true,
  mutator?: (v: T) => void,
) => {
  // Default mutator function if none is provided
  mutator = mutator || (v => (isRef(value) ? (value.value = v) : (value = v)));

  // Check if the value is an object
  if (!isObject(value)) {
    // Log a warning if the value cannot be made readonly
    logger.warn(`value cannot be made readonly: ${value}`);

    provide(key, [value, mutator]);
  } else {
    // Provide the value as readonly or shallowReadonly based on the deep flag
    provide(key, [
      deep
        ? readonly(value) as Readonly<T>
        : shallowReadonly(value) as Readonly<T>, mutator,
    ]);
  }
};

/**
 * Requires an injected value from the Vue dependency injection system.
 * 
 * @param key - The injection key to retrieve the value from.
 * @param defaultValue - An optional default value to use if the injection is not found.
 * @returns The injected value.
 * @throws {TypeError} If the injection is not found and no default value is provided.
 */
export const requireInjection = <T> (key: InjectionKey<T>, defaultValue?: T) => {
  // Attempt to retrieve the injected value using the provided key and default value
  const value = inject(key, defaultValue);

  if (typeof value === 'undefined') {
    throw new TypeError(`Missing injection: ${key.toString()}`);
  }

  // Return the injected value
  return value;
};
