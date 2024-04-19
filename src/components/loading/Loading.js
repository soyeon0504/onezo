import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  const laodingCss = {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 999,
    width: "100%",
    height: "100%",
    background: "rgba(255,255,255,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={laodingCss}>
      <PulseLoader
        color="hsla(220, 67%, 53%, 1)"
        cssOverride={{}}
        loading
        margin={35}
        size={20}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loading;
