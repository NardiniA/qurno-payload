import type { GlobalConfig } from "payload/types";
import { hasPermissions } from "../../access/hasPermissions";
import RowLabel from "../../components/RowLabel";
import { link } from "../../fields/link";
import { linkGroup } from "../../fields/link/group";
import { slateEditor } from "@payloadcms/richtext-slate";

const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navigation",
  access: {
    read: hasPermissions("navigation", "read"),
    update: hasPermissions("navigation", "update"),
  },
  admin: {
    group: "Settings",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "navigation",
          label: "Navigation",
          fields: [
            {
              name: "items",
              label: "Navigation Items",
              type: "array",
              minRows: 1,
              maxRows: 6,
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: RowLabel({
                    default: "Link",
                    property: "label",
                  }),
                },
              },
              fields: [
                {
                  name: "type",
                  type: "radio",
                  admin: {
                    layout: "horizontal",
                  },
                  options: [
                    {
                      label: "Link",
                      value: "link",
                    },
                    {
                      label: "Sub-menu",
                      value: "subMenu",
                    },
                  ],
                  defaultValue: "link",
                  required: true,
                },
                {
                  name: "label",
                  label: "Label",
                  type: "text",
                  required: true,
                },
                {
                  name: "subMenu",
                  label: false,
                  type: "group",
                  admin: {
                    condition: (_, { type }) => type === "subMenu",
                  },
                  fields: [
                    // {
                    //   name: "sublink",
                    //   label: "Sub-link",
                    //   type: "array",
                    //   minRows: 1,
                    //   admin: {
                    //     initCollapsed: true,
                    //     components: {
                    //       RowLabel: RowLabel({
                    //         default: "Link",
                    //         property: ({ data }) => data?.link?.label,
                    //       }),
                    //     },
                    //   },
                    //   fields: [
                    //     link({
                    //       appearances: false,
                    //       overrides: {
                    //         label: false,
                    //         admin: {
                    //           hideGutter: true,
                    //         },
                    //       },
                    //     }),
                    //   ],
                    // }
                    linkGroup({
                      appearances: false,
                      overrides: {
                        name: "sublink",
                        label: "Sub-link",
                        admin: {
                          components: {
                            RowLabel: RowLabel({
                              default: "Sub-link",
                              property: ({ data }) => data?.link?.label,
                            }),
                          }
                        },
                      },
                      linkOverrides: {
                        admin: {
                          hideGutter: true,
                        },
                      },
                    }),
                  ],
                },
                link({
                  appearances: false,
                  disableLabel: true,
                  overrides: {
                    admin: {
                      condition: (_, { type }) => type === "link",
                    },
                  },
                }),
              ],
            },
          ],
        },
        {
          name: "footer",
          label: "Footer",
          fields: [
            {
              name: "subscription",
              label: "Subscription Form",
              type: "relationship",
              relationTo: "forms",
              hasMany: false,
              required: true,
            },
            {
              name: "copyright",
              label: "Copyright",
              type: "richText",
              editor: slateEditor({
                admin: {
                  leaves: ["bold", "italic", "underline", "strikethrough"],
                  elements: ["link"],
                },
              }),
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Navigation;
