import {
  DeepReadonly,
  InjectionKey,
} from 'vue';

export type ReadonlyInjectionKey<T> = InjectionKey<[Readonly<T> | DeepReadonly<T>, Closure]>
