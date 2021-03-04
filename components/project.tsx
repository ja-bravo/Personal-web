import React from 'react';
import Image from 'next/image';

const Project = ({ image, title, children }) => {
  return (
    <div className="w-full flex flex-col md:flex-row mb-12">
      <p className="text-3xl text-center block md:hidden font-bold mb-4">{title}</p>
      <div className="mb-4 mx-auto">
        <Image src={image} width={203} height={203} className="rounded-2xl" objectFit={'cover'} />
      </div>
      <div className="w-8/12 md:w-content mx-auto md:ml-8">
        <p className="text-3xl hidden md:inline-flex font-bold mb-2 mt-4">{title}</p>
        {children}
      </div>
    </div>
  );
};

export default Project;
