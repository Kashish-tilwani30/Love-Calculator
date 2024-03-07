import React, { useState } from 'react';
import { Button } from '../ui/button';
import { FaChevronLeft } from "react-icons/fa6";
import { TbClover } from "react-icons/tb";
import { TbFriends } from "react-icons/tb";
import { GiCarrier } from "react-icons/gi";
import { GiTargetPrize } from "react-icons/gi";
import Love from './Love';

const Sidebarcom = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className={`flex flex-col w-60 border-r border-gray-200 bg-gray-100/50 dark:border-gray-800 dark:bg-gray-950 ${isSidebarOpen ? '' : 'hidden'}`}>
        <div className="flex h-14 items-center border-b border-gray-200 px-4 bg-white dark:bg-gray-950/90">
          <a className="text-xl font-bold" href="#">
            Love💖 Calculator
          </a>
        </div>
        <div className=" overflow-auto grid gap-8 p-4">
          <div className="grid gap-2">
            <a
              className="flex items-center rounded-lg bg-gray-100 p-2 text-sm font-medium gap-2 transition-all hover:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
              href="#"
            >
              <TbClover className="w-4 h-4" />
              Love
            </a>
            <a
              className="flex items-center rounded-lg p-2 text-sm font-medium gap-2 transition-all hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              href="#"
            >
              <TbFriends className="w-4 h-4" />
              Friendship
            </a>
            <a
              className="flex items-center rounded-lg p-2 text-sm font-medium gap-2 transition-all hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              href="#"
            >
              <GiCarrier className="w-4 h-4" />
              Career
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0 w-full">
        <div className="flex w-full h-14 items-center border-b border-gray-200 px-4 bg-white dark:bg-gray-950/90">
          <Button className="mr-4 md:hidden" size="icon" variant="outline" onClick={toggleSidebar}>
            <FaChevronLeft className="w-4 h-4" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <a className="text-xl font-bold" href="#">
            Love💖 Calculator
          </a>
        </div>
        <div className="flex-1 flex flex-col min-h-0 w-full">
          <Love />
        </div>
      </div>
    </div>
  );
};

export default Sidebarcom;
