import type { Field } from "payload/types";
import { About } from "./About";
import { Relation } from "./Relation";

export const blocks: Field = {
  name: "sections",
  label: "Sections",
  type: "blocks",
  blocks: [
    About,
    Relation({
      name: "post",
      label: "Post",
      collection: "posts",
    }),
    Relation({
      name: "tags",
      label: "Tags",
      collection: "tags",
    }),
    Relation({
      name: "authors",
      label: "Authors",
      collection: "authors",
    })],
  required: true,
}