import type { Field } from "payload/types";
import { validation } from "../utilities/validation";
import slug from "../../../../fields/slug";
import RowLabel from "../../../../components/RowLabel";

export const select: Partial<Field> = {
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
    {
      name: "options",
      label: "Options",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
      ],
      admin: {
        components: {
          RowLabel: RowLabel({
            default: "Option",
            property: "label",
          }),
        },
      },
      required: true,
    },
    validation({
      validators: ["required", "minLength", "maxLength", "pattern"],
    }),
  ],
};
