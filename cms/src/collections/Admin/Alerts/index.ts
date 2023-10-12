import type { CollectionConfig } from "payload/types";
import { isAdmin, isAdminView } from "../../../access/isAdmin";
import { slateEditor } from "@payloadcms/richtext-slate";
import { linkGroup } from "../../../fields/link/group";
import RowLabel from "../../../components/RowLabel";
import { hasPermissions } from "../../../access/hasPermissions";

const Alerts: CollectionConfig = {
  slug: "alerts",
  labels: {
    singular: "Alert",
    plural: "Alerts",
  },
  access: {
    read: hasPermissions("alerts", "read"),
    create: hasPermissions("alerts", "create"),
    update: hasPermissions("alerts", "update"),
    delete: hasPermissions("alerts", "delete"),
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "placement", "theme"],
    group: "Admin",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "theme",
      label: "Theme",
      type: "select",
      options: [
        {
          label: "Informational",
          value: "info",
        },
        {
          label: "Success",
          value: "success",
        },
        {
          label: "Warning",
          value: "warning",
        },
        {
          label: "Error",
          value: "error",
        },
      ],
      admin: {
        isClearable: false,
        isSortable: false,
        position: "sidebar",
      },
      defaultValue: "info",
      required: true,
    },
    {
      name: "placement",
      label: "Placement",
      type: "radio",
      options: [
        {
          label: "Global",
          value: "global",
        },
        {
          label: "Individual pages or posts",
          value: "individual",
        },
      ],
      admin: {
        position: "sidebar",
        layout: "vertical",
      },
      defaultValue: "global",
      required: true,
    },
    {
      name: "documents",
      label: "Documents",
      type: "relationship",
      relationTo: ["pages", "posts"],
      admin: {
        position: "sidebar",
        condition: (_, { placement }) => placement === "individual",
      },
      hasMany: true,
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      editor: slateEditor({
        admin: {
          leaves: ["bold", "italic", "strikethrough", "underline"],
          elements: ["link"],
        },
      }),
      required: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          components: {
            RowLabel: RowLabel({
              default: "Link",
              property: ({ data }) => data?.link?.label,
            }),
          },
        },
      },
    }),
  ],
}

export default Alerts;
