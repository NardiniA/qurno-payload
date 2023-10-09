import type { User } from "payload/generated-types";

type TupleValues<T extends readonly any[]> = T[number];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never;

export type Permissions = TupleValues<UnionToIntersection<User["permissions"]>>;
