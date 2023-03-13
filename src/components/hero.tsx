import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../assets/hero.jpg";

export const Hero = () => {
  return (
    <div
      className="
      flex
      flex-wrap
      justify-between
      place-items-center
      lg:h-screen
    "
    >
      <div className="py-5 lg:w-3/5 sm:w-full">
        <h1 className="text-6xl font-black text-extra-color"><span className="text-secondary-color">Hello there!</span> <br /> I'm Mirza Mahad Baig</h1>
        <h2 className="text-4xl font-thin py-9">
          A passionate UX designer learning & exploring web3.0 development
        </h2>
        
          <Link className="btn" href={"#projects"}> See My Projects</Link>
        
      </div>
      <div className="pb-5">
        <Image
          src={hero}
          width="550"
          height="100"
          alt={"Mirza Mahad Baig, Passionate UX designer learning web3"}
          className="mt-5"
        />
      </div>
    </div>
  );
};
