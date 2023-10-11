import type { Config } from "payload/generated-types";

export type CollectionOptions = keyof Config["collections"];

export type PermissionsItem = {
  collection: CollectionOptions;
  availableActions?: {
    label: string;
    value: string;
  }[];
}

export const default_actions: PermissionsItem["availableActions"] = [
  {
    label: "Read",
    value: "read",
  },
  {
    label: "Create",
    value: "create",
  },
  {
    label: "Update",
    value: "update",
  },
  {
    label: "Delete",
    value: "delete",
  },
];

export const access_config: PermissionsItem[] = [
  { collection: "pages", },
  { collection: "media", },
  { collection: "posts", },
  { collection: "tags", },
  { collection: "authors", },
  { collection: "alerts", },
  { collection: "redirects", },
];
