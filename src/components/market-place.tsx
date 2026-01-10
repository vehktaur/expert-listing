"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Marketplace as Icon } from "@/assets/icons";

const MarketPlace = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Icon className="size-7" />
      </TooltipTrigger>
      <TooltipContent align="center" side="bottom" className="text-xs">
        Marketplace
      </TooltipContent>
    </Tooltip>
  );
};
export default MarketPlace;
