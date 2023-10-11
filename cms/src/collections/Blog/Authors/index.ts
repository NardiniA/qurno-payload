import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../../access/hasPermissions";
import slug from "../../../fields/slug";
import RowLabel from "../../../components/RowLabel";

const Authors: CollectionConfig = {
  slug: "authors",
  labels: {
    singular: "Author",
    plural: "Authors",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name"],
    group: "Blog",
  },
  access: {
    read: hasPermissions("authors", "read"),
    create: hasPermissions("authors", "create"),
    update: hasPermissions("authors", "update"),
    delete: hasPermissions("authors", "delete"),
  },
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      required: true,
    },
    {
      name: "profile",
      label: "Profile Picture",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    slug("name", {
      admin: {
        position: "sidebar",
      },
    }),
    {
      name: "social",
      label: "Social Media",
      type: "array",
      admin: {
        components: {
          RowLabel: RowLabel({
            default: "Account",
            property: "platform",
          }),
        },
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "platform",
              label: "Platform Name",
              type: "text",
              required: true,
            },
            {
              name: "url",
              label: "Account URL",
              type: "text",
              admin: {
                placeholder: "https://...",
              },
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Authors;
