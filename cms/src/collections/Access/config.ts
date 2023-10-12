import type { Config } from "payload/generated-types";

export type CollectionOptions = keyof Config["collections"];

export type PermissionsItem = {
  collection: string;
  availableActions?: string[];
}

export type DefaultApproved = {
  [key: string]: {
    [key: string]: boolean;
  };
}

export const default_actions: PermissionsItem["availableActions"] = ["read", "create", "update", "delete"];

export const default_approved_actions: DefaultApproved = {
  media: {
    read: true,
    create: true,
    update: true,
    delete: true,
  },
  pages: {
    read: true,
  },
  posts: {
    read: true,
  },
  tags: {
    read: true,
  },
  authors: {
    read: true,
  },
  forms: {
    read: true,
  },
}

export const access_config: PermissionsItem[] = [
  { collection: "pages", },
  { collection: "media", },
  { collection: "posts", },
  { collection: "tags", },
  { collection: "authors", },
  { collection: "alerts", },
  { collection: "redirects", },
  { collection: "forms", },
  {
    collection: "submissions",
    availableActions: ["read", "create", "delete"],
  },
  {
    collection: "settings",
    availableActions: ["read", "update"],
  },
  {
    collection: "navigation",
    availableActions: ["read", "update"],
  },
];
