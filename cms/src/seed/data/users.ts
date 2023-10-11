import type { User } from "payload/generated-types";
import type { MarkOptional } from "ts-essentials";

type UserData = MarkOptional<User, "id" | "createdAt" | "updatedAt">

export const demoUser: UserData = {
  name: "Demo User",
  email: "demo@antonionardini.com",
  password: "demo",
  roles: "admin",
};

export const demoEditor: UserData = {
  name: "Demo Editor",
  email: "editor@antonionardini.com",
  password: "editor",
  roles: "editor",
  permissions: {
    media: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
    posts: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
    tags: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
    authors: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
}
