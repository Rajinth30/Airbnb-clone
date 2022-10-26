import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className=" relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        fill
        sizes="100vw 100vh"
        alt='image'
        
      />
      <div className="absolute top-[40%] w-full text-center">
        <p className="sm:text-lg font-bold text-2xl">
          Not sure where to go? Perfect.
        </p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-cyan-400 shadow-md transition duration-150 hover:shadow-lg active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
