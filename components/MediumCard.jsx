import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          
          className="rounded-xl"
          fill
          sizes="100vw 100vh"
        />
      </div>
      <div>
        <h2 className="mt-3 text-2xl text-center">{title}</h2>
      </div>
    </div>
  );
}

export default MediumCard;
