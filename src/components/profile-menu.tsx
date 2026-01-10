"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const ProfileMenu = () => {
  return (
    <Tooltip>
      <TooltipTrigger className="size-9 rounded-full bg-white flex items-center justify-center clamp-[text,lg,xl] text-primary font-medium hover:scale-109 transition-transform duration-200">
        D
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        align="end"
        className="px-4 py-2.5 mt-2 bg-white border border-light-gray rounded-lg shadow-lg"
        showArrow={false}
      >
        <p className="font-medium text-foreground text-sm">Dylan Frank</p>
        <p className="text-xs text-mid-gray">dylanfran96@gmail.com</p>
      </TooltipContent>
    </Tooltip>
  );
};
export default ProfileMenu;
