"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Calendar as Icon } from "@/assets/icons";

const Calendar = () => {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <Icon className="size-7" />
        </TooltipTrigger>
        <TooltipContent align="center" side="bottom" className="text-xs">
          Calendar
        </TooltipContent>
      </Tooltip>
    </>
  );
};

export default Calendar;
