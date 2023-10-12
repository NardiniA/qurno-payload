import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../access/hasPermissions";
import { filterImages } from "../../utilities/filterImages";

const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename"],
    group: "Content",
  },
  access: {
    read: hasPermissions("media", "read"),
    create: hasPermissions("media", "create"),
    update: hasPermissions("media", "update"),
    delete: hasPermissions("media", "delete"),
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
      filterOptions: filterImages,
      required: true,
    },
  ],
}

export default Media;
