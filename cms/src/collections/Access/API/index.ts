import type { CollectionConfig } from "payload/types";
import { permissions } from "../fields/permissions";
import { isAdmin, isAdminView } from "../../../access/isAdmin";

const API: CollectionConfig = {
  slug: "api-access",
  labels: {
    singular: "API Access",
    plural: "API Access",
  },
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    admin: isAdminView,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name"],
    group: "Access",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      unique: true,
      required: true,
    },
    permissions(),
  ],
}

export default API;
