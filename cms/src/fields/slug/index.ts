import { Field } from "payload/types";
import { deepMerge } from "../../utilities/deepMerge";
import formatSlug from "./utilities/formatSlug";

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

// By dynamically building fields in code configurations are reusable and concise
const slug: Slug = (fieldToUse = "title", overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "slug",
      label: "Slug",
      type: "text",
      localized: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
    },
    // @ts-ignore
    overrides
  );

export default slug;
