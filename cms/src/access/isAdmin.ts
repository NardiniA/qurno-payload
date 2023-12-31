import type { Access, FieldAccess } from "payload/types";
import type { ApiAccess, User } from "payload/generated-types";

export const isAdmin: Access<any, User | ApiAccess> = ({ req: { user } }) => user && user?.roles === "admin"

export const isAdminFieldLevel: FieldAccess<any, any, User | ApiAccess> = ({ req: { user } }) => user && user?.roles === "admin";

export type IsAdminView = (args?: any) => Promise<boolean> | boolean;

export const isAdminView: IsAdminView = ({ req: { user } }) => user && user?.roles === "admin";
