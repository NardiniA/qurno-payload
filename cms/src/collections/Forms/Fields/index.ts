import { FieldsConfig } from "@payloadcms/plugin-form-builder/dist/types";
import { checkbox } from "./checkbox";
import { select } from "./select";
import { defaultField } from "./text";

const Fields: FieldsConfig = {
  select,
  text: defaultField(),
  textarea: defaultField(),
  number: defaultField({
    validation: {
      validators: ["required", "min", "max", "pattern"],
    },
  }),
  email: defaultField({
    validation: {
      validators: ["required", "pattern"],
    },
  }),
  checkbox,
  message: true,
  country: false,
  state: false,
};

export default Fields;