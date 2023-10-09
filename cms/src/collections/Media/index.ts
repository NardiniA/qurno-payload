import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../access/hasPermissions";

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename"],
  },
  access: {
    read: hasPermissions("pages", "blog", "settings", "forms"),
    create: hasPermissions("pages", "blog", "settings", "forms"),
    update: hasPermissions("pages", "blog", "settings", "forms"),
    delete: hasPermissions("pages", "blog", "settings", "forms"),
  },
  upload: {
    staticURL: process.env.PAYLOAD_PUBLIC_MEDIA_ENDPOINT,
    staticDir: "",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*", "video/*"],
  },
  fields: [
    {
      name: "alt",
      label: "Media Description",
      type: "text",
      required: true,
    },
    {
      name: "poster",
      label: "Poster",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: ({ mimeType }, _) => mimeType?.includes("video"),
      },
      filterOptions: () => {
        return {
          mimeType: {
            contains: "image",
          },
        }
      },
      required: true,
    },
  ],
}

export default Media;
