import { ChevronRight } from "@/assets/icons";
import { formatNumber } from "@/lib/utils";
import { OverviewStat } from "@/types";

type Props = OverviewStat & {
  Icon: typeof ChevronRight;
};

const OverviewStatsCard = ({ title, Icon, total, metrics }: Props) => {
  return (
    <article className="rounded-2xl border border-stroke-card w-full overflow-clip">
      <header className="flex items-center justify-between bg-hc-bg w-full px-4 py-3.25  font-medium border-b border-stroke-card">
        <h2 className="text-sm flex items-center gap-2.5 text-gray-800">
          <Icon className="size-5 text-blue" />
          {title}
        </h2>
        <button className="text-xs text-blue flex items-center gap-1.5">
          View All
          <ChevronRight className="size-4" />
        </button>
      </header>

      <div className="px-4 py-5 grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-gray-600 font-medium text-sm mb-2">Total</h3>
          <p className="font-semibold clamp-[text,lg,2xl]">
            {formatNumber(total)}
          </p>
        </div>
        {metrics.map(({ label, value }) => (
          <div key={label}>
            <h3 className="text-gray-600 font-medium text-sm mb-2">{label}</h3>
            <p className="font-semibold clamp-[text,lg,2xl]">
              {formatNumber(value)}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
};
export default OverviewStatsCard;
