import React from "react";

const borderStyle: string = "3px solid"
const borderColor: string = "#FFFFFF"

function SpinnerLoader() {
  return (
    <div
      className="iw-h-6 iw-w-6 iw-rounded-full iw-animate-spin"
      style={{
        borderTop: `${borderStyle} ${borderColor}`,
        borderRight: `${borderStyle} ${borderColor}`,
        borderBottom: `${borderStyle} ${borderColor}`,
        borderLeft: `${borderStyle} transparent`
      }}
    >
    </div>
  )
};

export default SpinnerLoader;