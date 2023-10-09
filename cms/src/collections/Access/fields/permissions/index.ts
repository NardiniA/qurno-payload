import type { Field } from "payload/types";
import { deepMerge } from "../../../../utilities/deepMerge"
import { Config } from "payload/generated-types";
import { actions } from "./actions";

export type CollectionOptions = keyof Config["collections"];
export type PermissionsField = (args?: { overrides?: Partial<Field> }) => Field;
export type PermissionsItem = {
  collection: CollectionOptions;
  availableActions: {
    label: string;
    value: string;
  }[];
}

const permission_list: PermissionsItem[] = [
  {
    collection: "media",
    availableActions: [
      {
        label: "Read",
        value: "read",
      },
      {
        label: "Create",
        value: "create",
      },
      {
        label: "Update",
        value: "update",
      },
      {
        label: "Delete",
        value: "delete",
      },
    ],
  },
];

const list: Field[] = permission_list?.map((perm) => actions(perm));

export const permissions: PermissionsField = (args) => deepMerge<Field, Partial<Field>>(
  {
    name: "permissions",
    label: "Permissions",
    type: "group",
    fields: list,
  },
  args?.overrides,
);
