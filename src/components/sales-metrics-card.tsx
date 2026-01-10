import { TrendIcon } from "@/assets/icons";
import { cn, formatCurrency } from "@/lib/utils";
import { SalesMetric } from "@/types";

const colors = {
  blue: "text-blue",
  teal: "text-teal-500",
  green: "text-[#12B76A]",
  red: "text-error",
};

const SalesMetricsCard = ({
  color,
  currency,
  value,
  label,
  change,
  trend,
}: SalesMetric) => {
  return (
    <article className="border border-light-gray rounded-xl ps-4 py-2">
      <p
        className={cn(
          "font-semibold clamp-[text,base,1.1875rem] mb-2",
          colors[color]
        )}
      >
        {currency}
        {formatCurrency(value)}
      </p>

      <div className="flex items-center gap-2 text-[0.625rem]">
        <h3 className="font-medium text-deep-gray">{label}</h3>

        <span className={cn("flex items-center gap-1", colors[color])}>
          <TrendIcon
            className={cn("size-3", trend === "down" && "rotate-180")}
          />
          {change}%
        </span>
      </div>
    </article>
  );
};
export default SalesMetricsCard;
