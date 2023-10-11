import type { Block } from "payload/types";

export const ImageRow: Block = {
  slug: "image-row",
  labels: {
    singular: "Image Row Block",
    plural: "Image Row Blocks",
  },
  fields: [
    {
      name: "images",
      label: "Images",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
}
