import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../access/hasPermissions";
import slug from "../../fields/slug";
import { blocks } from "./blocks";
import createBreadcrumbsField from "@payloadcms/plugin-nested-docs/dist/fields/breadcrumbs";
import createParentField from "@payloadcms/plugin-nested-docs/dist/fields/parent";
import { hero } from "./hero";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: hasPermissions("pages", "read"),
    create: hasPermissions("pages", "create"),
    update: hasPermissions("pages", "update"),
    delete: hasPermissions("pages", "delete"),
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
    group: "Content",
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
      admin: {
        position: "sidebar",
      },
      required: true,
    },
    slug("title", {
      admin: {
        position: "sidebar",
      },
    }),
    createParentField("pages", {
      maxDepth: 0,
      index: true,
      admin: {
        position: "sidebar",
      },
    }),
    createBreadcrumbsField("pages", {
      admin: {
        disabled: true,
      },
    }),
    {
      type: "tabs",
      tabs: [
        {
          name: "hero",
          label: "Hero",
          fields: hero,
        },
        {
          name: "layout",
          label: "Layout",
          fields: [
            blocks,
          ],
        },
        {
          name: "seo",
          label: "SEO",
          fields: [
            {
              name: "metaTitle",
              label: "Meta Title",
              type: "text",
              // admin: {
              //   description: "",
              // },
              required: true,
            },
            {
              name: "metaDescription",
              label: "Meta Description",
              type: "textarea",
              // admin: {
              //   description: "",
              // },
              required: true,
            },
            {
              name: "metaImage",
              label: "Meta Image",
              type: "upload",
              relationTo: "media",
              // admin: {
              //   description: "",
              // },
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Pages;
