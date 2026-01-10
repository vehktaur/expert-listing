"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ActivityLog as Icon } from "@/assets/icons";

const SearchActivity = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Icon className="clamp-[size,5,7]" />
      </TooltipTrigger>
      <TooltipContent align="center" side="bottom" className="text-xs">
        Search Activity
      </TooltipContent>
    </Tooltip>
  );
};

export default SearchActivity;
