import type { AccessArgs, AccessResult } from "payload/config";
import type { FieldAccess } from "payload/types";
import type { ApiAccess, User } from "payload/generated-types";

type HasPermissionsResult = AccessResult | boolean;
type Permissions = User["permissions"] | ApiAccess["permissions"];
type CollectionPermissions = {
  [key: string]: boolean;
}

const handleAccess = (user: User | ApiAccess, collection: string, action: string) => {
  if (user) {
    // @ts-ignore
    if (user?.roles === "admin") return true;

    const userPermissions: CollectionPermissions = user?.permissions[collection];

    if (userPermissions) {
      return Boolean(userPermissions[action]);
    }
  }

  return false;
}

export type HasPermissionsAccess = (collection: string, action: string) => (args: AccessArgs<any, User | ApiAccess>) => HasPermissionsResult;
export type HasPermissionsFieldAccess = (collection: string, action: string) => (args: FieldAccess<any, User | ApiAccess>["arguments"]) => HasPermissionsResult;

export const hasPermissions: HasPermissionsAccess = (collection, action) => ({ req: { user } }) => handleAccess(user, collection, action);
export const hasPermissionsFieldLevel: HasPermissionsFieldAccess = (collection, action) => ({ req: { user } }) => handleAccess(user, collection, action);