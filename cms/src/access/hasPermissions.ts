import type { AccessArgs, AccessResult } from "payload/config";
import type { FieldAccess } from "payload/types";
import { ApiAccess, User } from "payload/generated-types";

type HasPermissionsResult = AccessResult | boolean;
type Permissions = User["permissions"] | ApiAccess["permissions"];

/**
 * simple access check
 * @param user
 * @param ...permissions
 * @returns {boolean | object}
 */
const handleAccess = (user: User, ...permissions: Permissions): HasPermissionsResult => {
  if (user) {
    if (user?.roles === "admin") return true;

    return !!user?.permissions?.some((p) => permissions?.includes(p));
  }

  return false;
}

export type HasPermissionsAccess = (...permissions: Permissions) => (args: AccessArgs<any, User>) => HasPermissionsResult;
export type HasPermissionsFieldAccess = (...permissions: Permissions) => (args: FieldAccess<any, User>["arguments"]) => HasPermissionsResult;

/**
 * simple permission check
 * @param permissions
 * @returns {boolean | object}
 */
export const hasPermissions: HasPermissionsAccess = (permissions) => ({ req: { user } }) => handleAccess(user, permissions);
/**
 * simple permission check for fields
 * @param permissions
 * @returns {boolean | object}
 */
export const hasPermissionsFieldLevel: HasPermissionsFieldAccess = (permissions) => ({ req: { user } }) => handleAccess(user, permissions);
