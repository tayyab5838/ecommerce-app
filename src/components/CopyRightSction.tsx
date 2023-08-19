import React from "react";

const CopyRight = () => {
  return (
    <div className=" border-t border-black mt-24 py-4">
      <div className="mx-16 flex-wrap flex gap-y-2 gap-x-4 justify-between items-center font-soraFont font-light text-[10px]">
        <div>Copyright © 2023 PIAIC</div>
        <div className="my-4">
          Design by.
          <span className="font-semibold">Weird Design Studio</span>
        </div>
        <div>
          Code by.<span className="font-semibold">Tayyab on github</span>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
