import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function BackgroundAnimation() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/bg.json")              // bg.json lives in public/
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%vw",
        height: "100%vh",
        zIndex: -1,            // keep it behind everything
        pointerEvents: "none", // clicks pass through
      }}
    >
      <Lottie
        animationData={data}
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}