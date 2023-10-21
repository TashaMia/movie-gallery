import { useState } from "react";

export default function Switch() {
  const [slider, setSlider] = useState(true);
  return (
    <div
      className={`flex  cursor-pointer shadow-inner shadow-slate-300  relative w-12 h-6 bg-slate-200 rounded-xl duration-3000`}
      onClick={() => setSlider(!slider)}
    >
      <div
        className={`w-6 h-6 duration-150 bg-gradient-to-br from-blue-800 to-blue-400  absolute ${
          slider ? " left-0" : "left-6  "
        } bg-blue-400 rounded-full`}
      ></div>
    </div>
  );
}
