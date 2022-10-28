import React from 'react';
import { MutedMicrophone, HeadPhone, Setting } from './icons';

import discordPng from '../../public/servers/discord.png';

export default function BottomBar() {
  return (
    <div className="w-60 h-[52px] flex-shrink-0 px-2 mb-px bg-gray-850 flex items-center justify-between">
      {/* Left part */}
      <div className="flex flex-row -ml-0.5 mr-2 pl-0.5 w-[122px] items-center hover:cursor-pointer hover:bg-gray-650 rounded group">
        {/* Discord icon with a dot */}
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 overflow-hidden rounded-2xl bg-green-550">
            <img src={discordPng} alt="discord logo" />
          </div>
          <div className="absolute w-4 h-4 -bottom-[3px] -right-[3px] bg-gray-350 rounded-xl border-[3px] border-gray-850 group-hover:border-gray-650 flex items-center justify-center">
            <div className="w-[5px] h-[5px] rounded bg-gray-850 -translate-x-[0.5px] -translate-y-[0.5px] group-hover:bg-gray-650" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center py-1 pl-2">
          <div className="w-[76px] text-sm text-white leading-[18px] font-[600] truncate">Xuefeng Wu</div>
          <div className="w-[76px] text-[12px] font-[400] leading-[13px] text-gray-200">#????</div>
        </div>
      </div>
      {/* Right part */}
      <div className="flex items-center justify-center text-gray-200">
        <div className="relative flex items-center justify-center w-8 h-8 rounded group hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
          <div className="hidden opacity-0 absolute group-hover:block group-hover:opacity-100 px-3 py-2 shadow-lg text-[14px] font-[500] rounded-md leading-4 bg-gray-1000 text-gray-100 -top-10 hover:cursor-default w-max transition-all">Unmute</div>
          <div className="hidden opacity-0 absolute group-hover:block group-hover:opacity-100 border-[5px] -top-2 border-t-gray-1000 border-x-transparent border-b-transparent hover:cursor-default transition-all" />
          <MutedMicrophone className="w-5 h-5" />
        </div>
        <div className="relative flex items-center justify-center w-8 h-8 rounded group hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
          <div className="hidden opacity-0 absolute group-hover:block group-hover:opacity-100 px-3 py-2 shadow-lg text-[14px] font-[500] rounded-md leading-4 bg-gray-1000 text-gray-100 -top-10 hover:cursor-default w-max transition-all">Deafen</div>
          <div className="hidden opacity-0 absolute group-hover:block group-hover:opacity-100 border-[5px] -top-2 border-t-gray-1000 border-x-transparent border-b-transparent hover:cursor-default transition-all" />
          <HeadPhone className="w-5 h-5" />
        </div>
        <div className="relative flex items-center justify-center w-8 h-8 rounded group hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
          <div className="hidden opacity-0 absolute group-hover:block group-hover:opacity-100 px-3 py-2 shadow-lg text-[14px] font-[500] rounded-md leading-4 bg-gray-1000 text-gray-100 -top-10 hover:cursor-default w-max transition-all">User Settings</div>
          <div className="hidden opacity-0 absolute group-hover:block group-hover:opacity-100 border-[5px] -top-2 border-t-gray-1000 border-x-transparent border-b-transparent hover:cursor-default transition-all" />
          <Setting className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
