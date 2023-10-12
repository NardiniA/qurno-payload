import type { RowField, TextField, Field } from "payload/types";
import { deepMerge } from "../../../../../utilities/deepMerge";

const messageField: TextField = {
  name: "message",
  label: "Error Message",
  type: "text",
  admin: {
    condition: (_, { value }) => !!value,
  },
  required: true,
}

export type ValidatorOptions = "required" | "min" | "max" | "minLength" | "maxLength" | "pattern";
type ValidationOpt = {
  label: string;
  field: RowField;
};

type ValidationOptions = {
  [key: string]: ValidationOpt
}

export const validationOptions: ValidationOptions = {
  required: {
    label: "Required",
    field: {
      type: "row",
      fields: [
        {
          name: "value",
          label: "Required",
          type: "checkbox",
        },
        messageField,
      ]
    },
  },
  min: {
    label: "Min",
    field: {
      type: "row",
      fields: [
        {
          name: "value",
          label: "Min",
          type: "number",
        },
        messageField,
      ],
    },
  },
  max: {
    label: "Max",
    field: {
      type: "row",
      fields: [
        {
          name: "value",
          label: "Max",
          type: "number",
        },
        messageField,
      ],
    },
  },
  minLength: {
    label: "Minimum Length",
    field: {
      type: "row",
      fields: [
        {
          name: "value",
          label: "Minimum Length",
          type: "number",
        },
        messageField,
      ],
    },
  },
  maxLength: {
    label: "Maximum Length",
    field: {
      type: "row",
      fields: [
        {
          name: "value",
          label: "Maximum Length",
          type: "number",
        },
        messageField,
      ],
    },
  },
  pattern: {
    label: "Pattern",
    field: {
      type: "row",
      fields: [
        {
          name: "value",
          label: "Pattern",
          type: "text",
        },
        messageField,
      ],
    },
  },
}

export type ValidationGroupArgs = {
  validators: ValidatorOptions[];
  overrides?: Partial<Field>;
};

export type ValidationGroup = (args?: ValidationGroupArgs) => Field;

export const validation: ValidationGroup = (args = { validators: ["required", "min", "max", "minLength", "maxLength", "pattern"], overrides: {} }) => {
  const validationFields: Field[] = args?.validators?.map((v) => {
    const { label, field }: ValidationOpt = validationOptions[v];

    if (!field) return null;

    const returnValue: Field = {
      label: label,
      type: "collapsible",
      fields: [
        {
          name: v,
          label: " ",
          type: "group",
          admin: {
            hideGutter: true,
          },
          fields: [field],
        },
      ],
    }

    return returnValue;
  })?.filter(Boolean);

  return deepMerge<Field, Partial<Field>>({
    label: "Validation",
    type: "collapsible",
    fields: [
      {
        name: "validation",
        label: " ",
        type: "group",
        fields: validationFields,
      }
    ],
  }, args?.overrides);
}
