import type { CollectionConfig } from "payload/types";
import { hasPermissions } from "../../../access/hasPermissions";

const Submissions: Partial<CollectionConfig> = {
  labels: {
    singular: "Form Submission",
    plural: "Form Submissions",
  },
  access: {
    read: hasPermissions("submissions", "read"),
    create: hasPermissions("submissions", "create"),
    update: () => false,
    delete: hasPermissions("submissions", "delete"),
  },
  admin: {
    group: "Forms",
  },
}

export default Submissions;
