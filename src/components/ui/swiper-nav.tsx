import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSwiper } from "swiper/react";

const buttons = [ArrowLeft, ArrowRight];

const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-between absolute top-1/2 px-4 -translate-y-1/2 z-10 inset-x-0">
      {buttons.map((Icon, index) => (
        <button
          key={index}
          type="button"
          className={cn(
            "opacity-0 group-hover:opacity-100 [&_svg]:size-5 size-7 text-gray flex items-center justify-center rounded-full bg-primary/50 hover:bg-primary/80 transition-[opacity,background-color] duration-200"
          )}
          onClick={() =>
            index === 0 ? swiper.slidePrev() : swiper.slideNext()
          }
        >
          <Icon />
        </button>
      ))}
    </div>
  );
};
export default SwiperNav;
