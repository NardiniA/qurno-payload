import type { Field, ArrayField } from "payload/types";
import { deepMerge } from "../../utilities/deepMerge";
import { link } from ".";

type LinkGroupType = (options?: {
  overrides?: Partial<ArrayField>;
  appearances?: string[] | false;
}) => Field;

export const linkGroup: LinkGroupType = ({
  overrides = {},
  appearances,
} = {}) => {
  const generatedLinkGroup: Field = {
    name: "links",
    type: "array",
    maxRows: 2,
    fields: [
      link({
        appearances,
        overrides: {
          label: false,
        },
      }),
    ],
  };

  return deepMerge<Field, Partial<Field>>(generatedLinkGroup, overrides);
};
