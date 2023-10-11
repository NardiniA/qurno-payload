import type { Field } from "payload/types";
import { PermissionsItem, default_actions } from "../../config";
import { capitalise } from "../../../../utilities/capitalise";

type ActionsField = (args: PermissionsItem) => Field;

export const actions: ActionsField = ({ availableActions = default_actions, collection }) => {
  const options: Field[] = availableActions?.map((action) => ({
    name: action?.value,
    label: action?.label,
    type: "checkbox",
    defaultValue: action?.value === "read" ? true : false,
    required: false,
  }));

  return {
    label: capitalise(collection),
    type: "collapsible",
    fields: [
      {
        name: collection,
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