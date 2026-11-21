import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const scenes = [
  { title: "THE BIG QUESTION", body: "Every useful idea starts with a question.", accent: "01" },
  { title: "THE EXPLANATION", body: "Break the idea into clear steps, and make each step easy to see.", accent: "02" },
  { title: "THE TAKEAWAY", body: "End with one memorable point the viewer can use.", accent: "03" }
];

export const Explainer = () => {
  const frame = useCurrentFrame();
  const sceneIndex = Math.min(2, Math.floor(frame / 180));
  const localFrame = frame % 180;
  const scene = scenes[sceneIndex];
  const opacity = interpolate(localFrame, [0, 18, 155, 180], [0, 1, 1, 0], { extrapolateRight: "clamp" });
  const y = interpolate(localFrame, [0, 24], [35, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#101827", color: "#f8fafc", justifyContent: "center", padding: 120, fontFamily: "Arial, sans-serif" }}>
      <div style={{ color: "#38bdf8", fontSize: 28, letterSpacing: 8, marginBottom: 34 }}>VIDEOGEN / FIELD NOTES</div>
      <div style={{ opacity, transform: `translateY(${y}px)` }}>
        <div style={{ color: "#94a3b8", fontSize: 32, marginBottom: 24 }}>{scene.accent} / 03</div>
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05, maxWidth: 1450 }}>{scene.title}</div>
        <div style={{ fontSize: 42, color: "#cbd5e1", marginTop: 42, maxWidth: 1250, lineHeight: 1.35 }}>{scene.body}</div>
      </div>
      <div style={{ position: "absolute", bottom: 70, left: 120, right: 120, height: 5, background: "#334155" }}>
        <div style={{ height: "100%", width: `${(frame / 539) * 100}%`, background: "#38bdf8" }} />
      </div>
    </AbsoluteFill>
  );
};
