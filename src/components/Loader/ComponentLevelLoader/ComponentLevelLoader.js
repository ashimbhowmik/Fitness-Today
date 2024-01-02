import React from "react";
import { PulseLoader } from "react-spinners";

const ComponentLevelLoader = ({ text, color, loading, size }) => {
  return (
    <span>
      {text}
      <PulseLoader
        color={color}
        loading={loading}
        size={size || 10}
        data-testid="loader"
      />
    </span>
  );
};

export default ComponentLevelLoader;
