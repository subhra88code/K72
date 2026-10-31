import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center ">
      <div className="uppercase text-[9.5vw] leading-[9vw] flex items-center justify-center">The spark for</div>
      <div className="uppercase text-[9.5vw] leading-[9vw] flex items-start justify-center " >
        all
        <div className="h-[7vw] w-[16vw] rounded-full mt-0.5 overflow-hidden  ">
            <Video className="rounded-full" />
        </div>
        things
       </div>
      <div className="uppercase text-[9.5vw] leading-[9vw] flex items-center justify-center">creative</div>
    </div>
  );
};

export default HomeHeroText;
