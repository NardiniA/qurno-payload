import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import type { Adapter } from "@payloadcms/plugin-cloud-storage/dist/types";

export const adapter = (bucket: string): Adapter => s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
    region: process.env.AWS_REGION as string,
  },
  bucket,
});
