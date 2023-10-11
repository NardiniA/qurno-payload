import type { Field } from "payload/types";
import { deepMerge } from "../../../../utilities/deepMerge"
import { actions } from "./actions";
import { access_config } from "../../config";

export type PermissionsField = (args?: { overrides?: Partial<Field> }) => Field;

const list: Field[] = access_config?.map((perm) => actions(perm));

export const permissions: PermissionsField = (args) => deepMerge<Field, Partial<Field>>(
  {
    name: "permissions",
    label: "Permissions",
    type: "group",
    fields: list,
  },
  args?.overrides,
);
