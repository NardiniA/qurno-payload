import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../../access/hasPermissions";
import slug from "../../../fields/slug";
import { filterImages } from "../../../utilities/filterImages";

const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title"],
    group: "Blog",
  },
  access: {
    read: hasPermissions("posts", "read"),
    create: hasPermissions("posts", "create"),
    update: hasPermissions("posts", "update"),
    delete: hasPermissions("posts", "delete"),
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "post",
          label: "Post",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "textarea",
              required: true,
            },
            {
              name: "thumbnail",
              label: "Thumbnail",
              type: "upload",
              relationTo: "media",
              filterOptions: filterImages,
              required: true,
            },
          ],
        },
        {
          name: "content",
          label: "Content",
          fields: [
            {
              name: "content",
              label: false,
              type: "richText",
              required: true,
            },
          ],
        },
      ],
    },
    slug("title", {
      admin: {
        position: "sidebar",
      },
    }),
    {
      name: "publishDate",
      label: "Publish Date",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
        },
      },
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "authors",
      admin: {
        position: "sidebar",
      },
      hasMany: false,
      required: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "relationship",
      relationTo: "tags",
      admin: {
        position: "sidebar",
        isSortable: true,
      },
      hasMany: false,
      required: true,
    },
  ],
}

export default Posts;
