import type { Access } from "payload/types";
import type { User } from "payload/generated-types";

export const isAdminOrSelf: Access<any, User> = ({ req: { user } }) => {
  if (user) {
    if (user?.roles === "admin") return true;

    return {
      id: {
        equals: user?.id,
      },
    }
  }

  return false;
}
