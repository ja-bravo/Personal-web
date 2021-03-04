import React from 'react';
import Image from 'next/image';

const Tool = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className="transform hover:-translate-y-0.5 duration-300 transition-all relative p-2 md:p-4 bg-white w-12 h-12  md:w-16 md:h-16 rounded-full flex justify-center items-center">
        <div className="relative w-full h-full">
          <Image src={image} layout={'fill'} objectFit={'contain'} />
        </div>
      </div>
      <span className="text-center text-xs md:text-md lg:text-lg mt-2">{title}</span>
    </div>
  );
};

export default Tool;
