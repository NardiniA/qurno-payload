import type { FilterOptions } from "payload/types";

export const filterImages: FilterOptions = () => {
  return {
    mimeType: {
      contains: "image",
    },
  }
}
