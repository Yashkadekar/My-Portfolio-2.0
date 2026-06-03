"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export const Background = () => {
  return (
    <div
      className="top-0 fixed -z-10 h-full w-full overflow-hidden pointer-events-none transform-gpu"
    >
      {/* Background Shaders */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#030014", "#1b153f", "#6366f1", "#4c1d95", "#000000"]}
        speed={0.15}
      />
    </div>
  );
};
