import type { GroupField } from "payload/types";

export const banner = {
  label: "Banner",
  value: "banner",
}

export const Banner: GroupField = {
  name: banner?.value,
  label: false,
  type: "group",
  admin: {
    condition: (_, { type }) => type === banner?.value,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
  ],
}