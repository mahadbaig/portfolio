import Image from "next/image";
import React from "react";
import hero from '../assets/hero.jpg'

export const About = () => {
  return (
    <div
      className="
    lg:w-3/4
    sm:w-full
    mt-8 mb-8
    "
    >
      <div>
      <h1 className="text-6xl font-bold mb-4">About Me:</h1>
      <p className="text-lg">
        As a freelance brand designer for over two years, I have honed my skills
        in visual communication and design aesthetics. However, in September
        2023, I shifted my focus towards UX/UI design, recognizing the
        importance of a seamless user experience in today's digital landscape.
        <br /><br />
        Alongside my design work, I am passionate about the emerging field of
        web3 development and Blockchain technology. I am actively learning and
        exploring this area, attending coding competitions, workshops, and
        seminars.
        <br /><br /> 
        Most recently, I attended a web3 awareness seminar organized
        by Systems Limited, further expanding my knowledge and expertise.
        I am committed to staying on the cutting edge of technology
        and design, while also putting the user at the center of my work. 
        <br /><br />
        My goal is to create designs that are not only visually appealing but also
        intuitive and user-friendly. I am always seeking new challenges and
        opportunities to grow as a designer and contribute to the ever-evolving
        digital landscape.
      </p>
      </div>
    </div>
  );
};
