import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../../access/hasPermissions";

const Redirects: Partial<CollectionConfig> = {
  admin: {
    group: "Admin",
  },
  access: {
    read: hasPermissions("redirects", "read"),
    create: hasPermissions("redirects", "create"),
    update: hasPermissions("redirects", "update"),
    delete: hasPermissions("redirects", "delete"),
  },
}

export default Redirects;
