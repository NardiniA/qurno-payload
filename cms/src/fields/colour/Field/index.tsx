"use client";

import React, { useState } from "react";
import { BlockPicker, Color, ColorResult, SketchPicker, TwitterPicker } from "react-color";

import { useFieldType } from "payload/components/forms";

import { Label, FieldDescription } from "payload/components/forms";

import type { Props as TextProps } from "payload/components/fields/Text";
import type { Props as JsonProps } from "payload/components/fields/Json";

import "./styles.scss";
import Picker, { AvailablePickers } from "./Picker";

const baseClass = "colour-field";

type InputFieldType = (TextProps | JsonProps) & { defaultColours?: string[]; picker: AvailablePickers; pickerOverrides?: Object; };

const Field: React.FC<InputFieldType> = (props) => {
  const [displayColourPicker, setDisplayColourPicker] = useState<boolean>(false);

  const {
    path,
    label,
    admin,
    required,
    picker,
    pickerOverrides,
    defaultValue,
    defaultColours,
  } = props;

  const {
    value = defaultValue || {},
    setValue,
  } = useFieldType<ColorResult>({
    path,
  });

  const handleChange = (color) => {
    setValue(color);
  }

  const handleClose = () => {
    setDisplayColourPicker(false);
  }

  return (
    <div className={baseClass}>
      <Label htmlFor={path} label={label} required={required} />

      <span className={`${baseClass}__colour`} style={{ backgroundColor: value["hex"] || "#ffffff" }} role="button" onClick={() => setDisplayColourPicker(!displayColourPicker)}>
        {value["hex"]}
      </span>

      {displayColourPicker ? (
        <>
          <div className={`${baseClass}__cover`} onClick={handleClose}></div>
          <div className={`${baseClass}__container`}>
            <div className={`${baseClass}__popover`}>
              <Picker presetColors={defaultColours || undefined} colors={defaultColours || undefined} {...pickerOverrides} onChange={handleChange} pickername={picker} color={value as Color} />
            </div>
          </div>
        </>
      ) : null}

      <FieldDescription description={admin?.description} />
    </div>
  );
}

export default Field;
