import type { Block } from "payload/types";
import type { Config } from "payload/generated-types";
import { deepMerge } from "../../../../utilities/deepMerge";

export type RelationBlock = (args: { name: string, label: string, collection: keyof Config["collections"], overrides?: Partial<Block> }) => Block;

export const Relation: RelationBlock = ({ name, label, collection, overrides }) => deepMerge<Block, Partial<Block>>(
  {
    slug: `${name}-block`,
    labels: {
      singular: `${label} Block`,
      plural: `${label} Blocks`,
    },
    fields: [
      {
        name: "title",
        label: "Section Title",
        type: "text",
        required: false,
      },
      {
        type: "row",
        fields: [
          {
            name: "type",
            label: "Type",
            type: "radio",
            options: [
              {
                label: "Automatic",
                value: "auto",
              },
              {
                label: "Manual",
                value: "custom",
              },
            ],
            defaultValue: "auto",
            required: true,
          },
          {
            name: "limit",
            label: "Limit",
            type: "number",
            admin: {
              condition: (_, { type }) => type === "auto",
            },
            defaultValue: 6,
            min: 1,
            required: true,
          },
          {
            name: "custom",
            label: `Choose ${label}`,
            type: "relationship",
            relationTo: collection,
            admin: {
              isSortable: true,
              condition: (_, { type }) => type === "custom",
            },
            hasMany: true,
            required: true,
          },
        ],
      },
    ],
  },
  overrides,
);