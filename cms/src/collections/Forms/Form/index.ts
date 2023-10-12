import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../../access/hasPermissions";

const Form: Partial<CollectionConfig> = {
  labels: {
    singular: "Form",
    plural: "Forms",
  },
  access: {
    read: hasPermissions("forms", "read"),
    create: hasPermissions("forms", "read"),
    update: hasPermissions("forms", "read"),
    delete: hasPermissions("forms", "read"),
  },
  admin: {
    defaultColumns: ["title", "fields"],
    group: "Forms",
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [],
  },
}

export default Form;
