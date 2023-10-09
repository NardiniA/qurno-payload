import type { Field } from "payload/types";
import { deepMerge } from "../../../../utilities/deepMerge";

export type PermissionsField = (args?: { overrides?: Partial<Field> }) => Field;

export const permissions: PermissionsField = (args) => deepMerge<Field, Partial<Field>>(
  {
    name: "permissions",
    label: "Permissions",
    type: "select",
    options: [
      {
        label: "Pages",
        value: "pages",
      },
      {
        label: "Blog",
        value: "blog",
      },
      {
        label: "Settings",
        value: "settings",
      },
      {
        label: "Forms",
        value: "forms",
      },
    ],
    hasMany: true,
    required: false,
  },
  args?.overrides,
);
