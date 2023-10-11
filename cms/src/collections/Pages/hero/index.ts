import type { Field } from "payload/types";
import { PageHeader, page_header } from "./PageHeader";
import { SelectFieldOption } from "@payloadcms/plugin-form-builder/dist/types";
import { Banner, banner } from "./Banner";

const options: SelectFieldOption[] = [
  page_header,
  banner
];

export const hero: Field[] = [
  {
    name: "type",
    label: "Type",
    type: "select",
    options,
    defaultValue: options[0]?.value,
    required: true,
  },
  PageHeader,
  Banner,
];
