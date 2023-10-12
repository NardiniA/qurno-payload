import type { Field } from "payload/types";
import { PermissionsItem, default_actions, default_approved_actions } from "../../config";
import { capitalise } from "../../../../utilities/capitalise";

type ActionsField = (args: PermissionsItem) => Field;

export const actions: ActionsField = ({ availableActions = default_actions, collection }) => {
  const options: Field[] = availableActions?.map((action) => ({
    name: action,
    type: "checkbox",
    defaultValue: default_approved_actions[collection] ? !!(default_approved_actions[collection][action] || false) : false,
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