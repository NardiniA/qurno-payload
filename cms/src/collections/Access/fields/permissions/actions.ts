import type { Field } from "payload/types";
import { PermissionsItem } from ".";
import { capitalise } from "../../../../utilities/capitalise";

type ActionsField = (args: PermissionsItem) => Field;

export const actions: ActionsField = (args) => {
  const options: Field[] = args?.availableActions?.map((action) => ({
    name: action?.value,
    label: action?.label,
    type: "checkbox",
    defaultValue: action?.value === "read" ? true : false,
    required: false,
  }));

  return {
    label: capitalise(args?.collection),
    type: "collapsible",
    fields: [
      {
        name: args?.collection,
        label: false,
        type: "group",
        admin: {
          hideGutter: true,
        },
        fields: [
          {
            type: "row",
            fields: options,
          },
        ],
      },
    ],
  }
}