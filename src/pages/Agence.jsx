import React from "react";

const Agence = () => {
  return (
    <div className="text-black font-[font2]">
      <div className="mt-[55vh]">
        <h1 className="text-[20vw]  uppercase leading-[17vw] text-center">
          SEVEN7Y
          <br />
          TWO
        </h1>
      </div>
      <div className="pl-[40%] mt-7 ">
        <p className="text-6xl">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
          inquisitive and open-minded, and we make sure creativity crowds out
          ego from every corner. A brand is a living thing, with values, a
          personality and a story. If we ignore that, we can achieve short-term
          success, but not influence that goes the distance. We bring that
          perspective to every brand story we help tell.
        </p>
      </div>
      <div className="h-screen pt-[18vh]">
        <div className="h-[40vh]  px-[10vw] ">
          <div className="h-full  grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] text-xl gap-35">
            <div className="self-start justify-self-start">Expertise</div>
            <div className="self-start justify-self-start">
              <ul>
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </ul>
            </div>
            <div className="self-start justify-self-start"></div>
            <div className="self-start justify-self-start">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</div>
            <div className="self-start justify-self-start">Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</div>
            <div className="self-start justify-self-start">Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;
