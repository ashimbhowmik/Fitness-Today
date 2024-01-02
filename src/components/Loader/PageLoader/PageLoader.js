import React from "react";
import { HashLoader } from "react-spinners";

const PageLoader = ({ text, color, loading, size }) => {
  return (
    <div>
      <span className="flex gap-1 items-center">
        {text}
        <HashLoader
          color={color}
          loading={loading}
          size={size || 130}
          data-testid="loader"
        />
      </span>
    </div>
  );
};

export default PageLoader;
