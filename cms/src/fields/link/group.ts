import type { Field, ArrayField } from "payload/types";
import { deepMerge } from "../../utilities/deepMerge";
import { link } from ".";

type LinkGroupType = (options?: {
  overrides?: Partial<ArrayField>;
  linkOverrides?: Partial<Field>;
  appearances?: string[] | false;
}) => Field;

export const linkGroup: LinkGroupType = ({
  overrides = {},
  linkOverrides = {},
  appearances,
} = {}) => {
  const generatedLinkGroup: Field = {
    name: "links",
    type: "array",
    fields: [
      link({
        appearances,
        overrides: {
          label: false,
          ...linkOverrides,
        },
      }),
    ],
  };

  return deepMerge<Field, Partial<Field>>(generatedLinkGroup, overrides);
};
