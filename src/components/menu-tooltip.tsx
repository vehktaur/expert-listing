import { IconType } from "@/types";
import { AppTooltip } from "./ui/tooltip";
import { ComponentProps } from "react";

const MenuTooltip = ({
  Icon,
  ...props
}: {
  Icon: IconType;
} & Omit<ComponentProps<typeof AppTooltip>, "trigger">) => {
  return (
    <AppTooltip {...props} trigger={<Icon className="clamp-[size,5,7]" />} />
  );
};
export default MenuTooltip;
