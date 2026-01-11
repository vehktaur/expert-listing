"use client";

import MenuTooltip from "./menu-tooltip";
import { CloseIcon, Calendar as Icon } from "@/assets/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { LucideArrowLeft } from "lucide-react";

const CalendarAction = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex">
        <MenuTooltip Icon={Icon}>Calendar</MenuTooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-100 max-w-[90%] h-[calc(100vh-12rem)] p-0 mt-2 bg-[#0D0D0D] border-none flex flex-col text-white">
        <header className="flex items-center justify-between clamp-[px,4,6] clamp-[py,2,3.25] bg-[#171717]">
          <h1 className="clamp-[text,sm,base] font-bold flex items-center gap-2">
            <button type="button" onClick={handleClose}>
              <LucideArrowLeft className="clamp-[size,4,5]" />
            </button>
            Calendar
          </h1>

          <button type="button" onClick={handleClose}>
            <CloseIcon className="clamp-[size,4,5]" />
          </button>
        </header>
        <Calendar className="w-full grow bg-transparent" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CalendarAction;
