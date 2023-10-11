import type { GroupField } from "payload/types";

export const page_header = {
  label: "Page Header",
  value: "page_header",
}

export const PageHeader: GroupField = {
  name: page_header?.value,
  label: false,
  type: "group",
  admin: {
    condition: (_, { type }) => type === page_header?.value,
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