import type { Field } from "payload/types";
import { validation } from "../utilities/validation";

export const checkbox: Partial<Field> = {
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
          name: "defaultValue",
          label: "Default Value",
          type: "checkbox",
        },
      ],
    },
    validation({
      validators: ["required"],
    }),
  ],
}
