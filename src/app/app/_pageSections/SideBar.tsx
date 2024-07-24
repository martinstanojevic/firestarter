'use client';

import { useState } from 'react';
import { Icons } from '@/components/Icons';

import { MainLogoText } from '@/components/MainLogo';

const SideBar = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div
      className={`${
        !isOpen ? 'w-20' : 'w-48'
      } hidden  md:flex flex-col items-center transition-all duration-300 border-r h-screen sticky top-0 p-2 `}
    >
      <div className="mb-4 my-4 flex items-start w-full pl-3">
        <Icons.Menu className="cursor-pointer mr-4" onClick={() => setOpen(!isOpen)} />
        <MainLogoText />
      </div>
      {/* <SideBarNav isOpen={isOpen} /> */}
      <div className="mt-auto"></div>
    </div>
  );
};

export default SideBar;
