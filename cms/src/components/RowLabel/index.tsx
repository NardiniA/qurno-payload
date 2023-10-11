import { RowLabelFunction, RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";


type RowLabelType = (args: {
  default?: string;
  property: string | ((args: RowLabelArgs) => string);
}) => RowLabelFunction;

const RowLabel: RowLabelType = (args) => {
  return function ({ data, index }) {
    if (typeof args?.property === "string" && data[args?.property]) return data[args?.property];
    if (typeof args?.property === "function") {
      const val = args?.property({ data, index } as RowLabelArgs);
      if (val) return val;
    }

    return `${args?.default || "Slide"} ${String(index).padStart(2, "0")}`;
  }
}

export default RowLabel;
