"use client";

import { Fragment } from "react/jsx-runtime";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Users, Tag, MessageSquare, MapPin, Lock, LogOut } from "lucide-react";

const menuItems = [
  { label: "Teams", href: "#", icon: Users },
  { label: "Snagging", href: "#", icon: Tag },
  { label: "Feedback", href: "#", icon: MessageSquare },
  { label: "Geo-Bucket", href: "#", icon: MapPin },
  { label: "Change password", href: "#", icon: Lock },
];

const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Tooltip>
          <TooltipTrigger
            asChild
            className="size-9 rounded-full bg-white flex items-center justify-center clamp-[text,lg,xl] text-primary font-medium hover:scale-109 transition-transform duration-200"
          >
            <span>D</span>
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
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="clamp-[w,60,70] p-2 mt-2 bg-white border border-light-gray rounded-lg shadow-lg"
        sideOffset={8}
      >
        {/* User Info Section */}
        <div className="flex items-center gap-3 px-3 py-3 mb-2 rounded-md bg-primary/10 border">
          <div className="size-10 rounded-full bg-primary flex items-center justify-center clamp-[text,lg,xl] text-white font-medium">
            D
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground clamp-[text,sm,base] truncate">
              Dylan Frank
            </p>
            <p className="clamp-[text,xs,sm] text-mid-gray truncate">
              dylan96@mail.com
            </p>
          </div>
        </div>

        {/* Menu Items */}
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Fragment key={item.label}>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-md hover:bg-light-gray/30 focus:bg-light-gray/30 transition-colors font-medium">
                <Icon
                  className="clamp-[size,4,5] text-foreground/70"
                  strokeWidth={2}
                />

                {item.label}
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-light-gray my-0.5" />
            </Fragment>
          );
        })}

        {/* Logout */}
        <DropdownMenuItem
          className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-md hover:bg-red-50 focus:bg-red-50 transition-colors font-medium"
          variant="destructive"
        >
          <LogOut className="clamp-[size,4,5]" strokeWidth={2} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileMenu;
