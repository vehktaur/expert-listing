"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { PayoutCenter as Icon } from "@/assets/icons";

const PayoutCenter = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Icon className="clamp-[size,5,7]" />
      </TooltipTrigger>
      <TooltipContent align="center" side="bottom" className="text-xs">
        Payout Center
      </TooltipContent>
    </Tooltip>
  );
};
export default PayoutCenter;
