import type { ApiAccess } from "payload/generated-types";
import type { MarkOptional } from "ts-essentials";

type ApiAccessData = MarkOptional<ApiAccess, "id" | "createdAt" | "updatedAt">

export const demoServer: ApiAccessData = {
  name: "frontend",
  enableAPIKey: true,
}
