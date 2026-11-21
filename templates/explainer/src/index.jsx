import React from "react";
import { Composition, registerRoot } from "remotion";
import { Explainer } from "./video.jsx";

const Root = () => (
  <Composition
    id="Explainer"
    component={Explainer}
    durationInFrames={540}
    fps={30}
    width={1920}
    height={1080}
  />
);
registerRoot(Root);
