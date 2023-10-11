import type { Field } from "payload/types";
import { deepMerge } from "../../utilities/deepMerge";

export const appearanceOptions = {
  text: {
    label: "Text",
    value: "text",
  },
  primaryButton: {
    label: "Primary Button",
    value: "primaryButton",
  },
  secondaryButton: {
    label: "Secondary Button",
    value: "secondaryButton",
  },
};

type LinkType = (
  options?: {
    appearances?: string[] | false;
    disableLabel?: boolean;
    overrides?: Record<string, unknown>;
  }
) => Field;

export const link: LinkType = ({
  appearances,
  disableLabel = false,
  overrides = {}
} = {}) => {
  const generatedLink: Field = {
    name: "link",
    type: "group",
    fields: [
      {
        name: "type",
        type: "radio",
        options: [
          {
            label: "Internal link",
            value: "reference",
          },
          {
            label: "Custom URL",
            value: "custom",
          },
        ],
        defaultValue: "reference",
        admin: {
          layout: "horizontal",
        },
      },
    ],
  };

  const linkOptions: Field = {
    type: "row",
    fields: [
      {
        name: "reference",
        label: "Document to link to",
        type: "relationship",
        relationTo: ["pages", "posts"],
        required: true,
        maxDepth: 1,
        admin: {
          condition: (_, { type }) => type === "reference",
        },
        hooks: {
          beforeChange: [
            ({ siblingData, value }) => (siblingData?.type !== "reference" ? null : value),
          ],
        },
      },
      {
        name: "url",
        label: "Custom URL",
        type: "text",
        admin: {
          condition: (_, { type }) => type === "custom",
        },
        required: true,
      },
    ],
  };

  if (!disableLabel) {
    linkOptions.fields.unshift(
      {
        name: "label",
        label: "Label",
        type: "text",
        admin: {
          width: "50%",
        },
        required: true,
      },
    );

    linkOptions.fields[1].admin.width = "50%";
    linkOptions.fields[2].admin.width = "50%";
    generatedLink.fields[0].admin.width = "50%";
    generatedLink.fields.push(linkOptions);
  } else {
    generatedLink.fields.push(linkOptions);
  };

  generatedLink.fields.push({
    name: "newTab",
    label: "Open In New Tab",
    type: "checkbox",
  });

  if (typeof appearances === "undefined") {
    generatedLink.fields.unshift({
      name: 'appearance',
      type: 'select',
      defaultValue: 'text',
      options: [
        appearanceOptions.text,
        appearanceOptions.primaryButton,
        appearanceOptions.secondaryButton,
      ],
    });
  }

  if (appearances) {
    generatedLink.fields.unshift({
      name: "appearance",
      type: "select",
      defaultValue: appearances[0],
      options: appearances.map((appearance) => appearanceOptions[appearance]),
    });
  };

  return deepMerge<Field, Partial<Field>>(generatedLink, overrides);
};
