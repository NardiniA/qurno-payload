import type { Field } from "payload/types";
import { ValidationGroupArgs, validation } from "../utilities/validation";
import slug from "../../../../fields/slug";
import { deepMerge } from "../../../../utilities/deepMerge";
import RowLabel from "../../../../components/RowLabel";

type DefaultField = (args?: {
  validation: ValidationGroupArgs,
  overrides?: Partial<Field>;
}) => Partial<Field> | Field;

export const defaultField: DefaultField = (args) => {
  const generatedField: Partial<Field> = {
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "label",
            label: "Label",
            type: "text",
            required: true,
          },
          {
            name: "placeholder",
            label: "Placeholder",
            type: "text",
            required: true,
          },
        ],
      },
      slug("label", {
        name: "name",
        label: "Name",
        unique: false,
        admin: {
          components: {
            Field: () => null,
          },
        },
      }),
      {
        type: "row",
        fields: [
          {
            name: "defaultValue",
            label: "Default Value",
            type: "text",
            required: true,
          },
          {
            name: "size",
            label: "Size",
            type: "select",
            options: [
              {
                label: "Full",
                value: "col-lg-12",
              },
              {
                label: "Half",
                value: "col-lg-6 col-md-12",
              },
              {
                label: "Third",
                value: "col-lg-4 col-md-6 col-12",
              },
              {
                label: "Quarter",
                value: "col-lg-3 col-md-6 col-12",
              },
            ],
            defaultValue: "col-lg-12",
            required: true,
          },
        ],
      },
      validation(args?.validation),
    ],
  };

  return deepMerge<Partial<Field>, Partial<Field>>(generatedField, args?.overrides);
}
