"use client";

import React, { useEffect } from "react";

const PriventScreenShot: React.FC = () => {
  useEffect(() => {
    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener("contextmenu", preventRightClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);
  return <div></div>;
};

export default PriventScreenShot;
