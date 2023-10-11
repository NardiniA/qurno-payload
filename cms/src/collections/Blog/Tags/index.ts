import type { CollectionConfig } from "payload/dist/exports/types";
import { hasPermissions } from "../../../access/hasPermissions";
import slug from "../../../fields/slug";

const Tags: CollectionConfig = {
  slug: "tags",
  labels: {
    singular: "Tag",
    plural: "Tags",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "updatedAt"],
    group: "Blog",
  },
  access: {
    read: hasPermissions("tags", "read"),
    create: hasPermissions("tags", "create"),
    update: hasPermissions("tags", "update"),
    delete: hasPermissions("tags", "delete"),
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    slug("name"),
  ],
}

export default Tags;
