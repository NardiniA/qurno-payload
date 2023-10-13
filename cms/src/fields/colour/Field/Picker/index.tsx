import React, { Suspense, lazy } from "react";

export type AvailablePickers = keyof typeof availablePickers;

const availablePickers = {
  alpha: lazy(() => import("react-color/lib/components/alpha/Alpha")),
  block: lazy(() => import("react-color/lib/components/block/Block")),
  chrome: lazy(() => import("react-color/lib/components/chrome/Chrome")),
  circle: lazy(() => import("react-color/lib/components/circle/Circle")),
  compact: lazy(() => import("react-color/lib/components/compact/Compact")),
  github: lazy(() => import("react-color/lib/components/github/Github")),
  google: lazy(() => import("react-color/lib/components/google/Google")),
  hue: lazy(() => import("react-color/lib/components/hue/Hue")),
  material: lazy(() => import("react-color/lib/components/material/Material")),
  photoshop: lazy(() => import("react-color/lib/components/photoshop/Photoshop")),
  sketch: lazy(() => import("react-color/lib/components/sketch/Sketch")),
  slider: lazy(() => import("react-color/lib/components/slider/Slider")),
  swatches: lazy(() => import("react-color/lib/components/swatches/Swatches")),
  twitter: lazy(() => import("react-color/lib/components/twitter/Twitter")),
}

const Picker: React.FC<{ pickername: string, [key: string]: unknown; }> = ({ pickername, ...rest }) => {
  try {
    console.log(pickername);

    const ImportPicker: React.LazyExoticComponent<any> = availablePickers[pickername];

    console.log(ImportPicker);

    if (!ImportPicker) throw new Error("Error importing picker");

    return (
      <Suspense fallback={<div>Loading {pickername}...</div>}>
        <ImportPicker {...rest} />
      </Suspense>
    );
  } catch (error) {
    console.error(error);

    return (
      <div>Failed to load {pickername} colour picker.</div>
    )
  }
}

export default Picker;
