import type { GlobalConfig } from "payload/types";
import { hasPermissions } from "../../access/hasPermissions";
import { filterImages } from "../../utilities/filterImages";
import RowLabel from "../../components/RowLabel";
import { colour } from "../../fields/colour";

const Settings: GlobalConfig = {
  slug: "settings",
  label: "Settings",
  access: {
    read: hasPermissions("settings", "read"),
    update: hasPermissions("settings", "update"),
  },
  admin: {
    group: "Settings",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "info",
          label: "Site Information",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "sitename",
                  label: "Site Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "siteURL",
                  label: "Site URL",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "sitelogo",
              label: "Site Logo",
              type: "upload",
              relationTo: "media",
              filterOptions: filterImages,
              required: true,
            },
          ],
        },
        {
          name: "seo",
          label: "SEO",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "metaTitle",
                  label: "Meta Title",
                  type: "text",
                  required: true,
                },
                {
                  name: "suffix",
                  label: "Meta Title Suffix",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              name: "metaAuthor",
              label: "Meta Author",
              type: "text",
              required: true,
            },
            {
              name: "metaDescription",
              label: "Meta Description",
              type: "textarea",
              required: true,
            },
            {
              name: "metaImage",
              label: "Meta Image",
              type: "upload",
              relationTo: "media",
              filterOptions: filterImages,
            },
            {
              name: "metaKeywords",
              label: "Meta Keywords",
              type: "array",
              minRows: 1,
              fields: [
                {
                  name: "word",
                  label: "Keyword",
                  type: "text",
                  required: true,
                },
              ],
              admin: {
                components: {
                  RowLabel: RowLabel({
                    default: "Keyword",
                    property: "word",
                  }),
                },
              },
              required: true,
            },
          ],
        },
        {
          name: "config",
          label: "Configuration",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "pgn",
                  label: "Pagination Limit",
                  type: "number",
                  required: true,
                },
                {
                  name: "deployHook",
                  label: "Deployment Hook",
                  type: "text",
                  required: true,
                },
              ],
            },
            {
              type: "row",
              fields: [
                colour({
                  picker: "twitter",
                  overrides: {
                    name: "primaryColour",
                    label: "Primary Colour",
                  },
                }),
                colour({
                  picker: "twitter",
                  overrides: {
                    name: "backgroundColour",
                    label: "Background Colour",
                  },
                }),
                colour({
                  picker: "twitter",
                  overrides: {
                    name: "darkBackgroundColour",
                    label: "Dark Mode - Background Colour",
                  },
                }),
              ],
            },
          ],
        },
      ],
    },

  ],
}

export default Settings;
