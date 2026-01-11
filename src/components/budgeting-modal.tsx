"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Bars, Calculator as Icon, Settings, TrendUp } from "@/assets/icons";
import Image from "next/image";
import images from "@/assets/images";
import MenuTooltip from "./menu-tooltip";

const budgetFeatures = [
  {
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
    icon: Settings,
  },
  {
    title: "Track actuals vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
    icon: TrendUp,
  },
  {
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    icon: Bars,
  },
];

const BudgetingModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <MenuTooltip Icon={Icon} triggerProps={{ onClick: handleOpen }}>
        Budgeting
      </MenuTooltip>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader className="sr-only">
          <DialogTitle>Budgeting</DialogTitle>
          <DialogDescription>
            Set up budgeting parameters and track your expenses effectively.
          </DialogDescription>
        </DialogHeader>

        <DialogContent
          className="sm:max-w-109.5 max-w-[calc(100%-4rem)] rounded-[0.625rem] p-0 overflow-hidden"
          showCloseButton={false}
        >
          <div className="relative h-53.25">
            <div className="absolute inset-0 z-0">
              <Image
                src={images.budgeting}
                alt="Budgeting Illustration"
                className="size-full object-cover scale-101"
              />

              <Icon className="clamp-[size,16,20] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="px-5">
            <div className="py-6 max-w-86 mx-auto w-full">
              <ul className="flex flex-col w-full clamp-[gap,3,5] mb-6">
                {budgetFeatures.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center clamp-[gap,3,4]"
                  >
                    <item.icon className="size-8 text-gray-600 shrink-0" />
                    <div>
                      <h3 className="font-semibold clamp-[text,sm,base] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-mid-gray">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <DialogClose className="bg-gray-900 rounded-full text-white font-medium clamp-[text,sm,base] w-full px-4 py-3">
                Create Budget
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BudgetingModal;
