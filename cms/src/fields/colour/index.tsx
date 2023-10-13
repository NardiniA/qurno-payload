import React from "react";
import type { Field } from "payload/types";
import { deepMerge } from "../../utilities/deepMerge";
import { default as InputField } from "./Field";
import type { ColorResult } from "react-color";
import { AvailablePickers } from "./Field/Picker";

type ColourField = (args?: {
  defaultColours?: string[];
  defaultValue?: ColorResult;
  picker?: AvailablePickers;
  pickerOverrides?: Object;
  overrides?: Partial<Field>;
}) => Field;

export const colour: ColourField = (args) => {
  const generatedField: Field = {
    name: "colour",
    type: "json",
    admin: {
      components: {
        Field: (props) => <InputField
          {...props}
          defaultColours={args?.defaultColours}
          defaultValue={args?.defaultValue}
          picker={args?.picker || "block"}
          pickerOverrides={args?.pickerOverrides}
        />
      },
    },
    required: true,
  }

  return deepMerge<Field, Partial<Field>>(generatedField, args?.overrides || {});
}
