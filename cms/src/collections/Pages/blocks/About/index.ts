import type { Block } from "payload/types";
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical";
import { ImageRow } from "./blocks/ImageRow";

export const About: Block = {
  slug: "about-block",
  labels: {
    singular: "About Block",
    plural: "About Blocks",
  },
  fields: [
    {
      name: "content",
      label: "Content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              ImageRow,
            ],
          }),
        ],
      }),
      required: true,
    },
  ],
}
