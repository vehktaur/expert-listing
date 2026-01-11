import { Home2, Profile } from "@/assets/icons";
import Listing from "@/components/listing";
import { MonthlyOverviewChart } from "@/components/overview-chart";
import OverviewStatsCard from "@/components/overview-stats-card";
import SalesMetricsCard from "@/components/sales-metrics-card";
import { listings, overviewStats, salesMetrics } from "@/data";

const icons = {
  listings: Home2,
  users: Profile,
};

export default function Home() {
  return (
    <main className="px-5 pt-3 pb-5">
      <div className="max-w-7xl mx-auto ">
        <h1 className="font-bold clamp-[text,base,xl] mb-4">Welcome, Ahmed</h1>

        <div className="flex flex-col xl:flex-row items-stretch gap-5 w-full *:w-full mb-5.5">
          <section className="border border-stroke-card rounded-2xl bg-white pt-5.5 pb-5.25">
            <header className="pb-3 border-b border-light-gray px-5">
              <div className="flex items-stretch gap-4 flex-wrap mb-4">
                <div>
                  <h2 className="font-semibold clamp-[text,lg,2xl] mb-3">
                    Sales Overview
                  </h2>
                  <p className="text-xs text-mid-gray">
                    Showing overview Jan 2022 - Sep 2022
                  </p>
                </div>

                <button className="ms-auto text-xs font-medium border border-gray-300 rounded-full clamp-[px,6,10] py-2 hover:bg-gray-50 transition-colors duration-200">
                  View Transactions
                </button>
              </div>

              <div className="flex items-center justify-end gap-3 text-sm *:px-4.5 *:py-1.75 *:rounded-lg text-deep-gray *:hover:bg-gray *:transition-colors *:duration-200">
                <button>1 Week</button>
                <button>1 Month</button>
                <button className="font-semibold bg-gray">1 Year</button>
              </div>
            </header>

            <div className="mt-4 pe-5 flex flex-col xl:flex-row w-full gap-5">
              {/* Chart Placeholder */}
              <MonthlyOverviewChart />

              <div className="grid grid-cols-[repeat(auto-fill,minmax(min(11.8125rem,100%),1fr))]  gap-y-3 clamp-[gap-x,2,4] w-full">
                {salesMetrics.map((metric) => (
                  <SalesMetricsCard key={metric.id} {...metric} />
                ))}
              </div>
            </div>
          </section>
          <section className="xl:max-w-101.5 flex flex-col sm:flex-row xl:flex-col justify-between gap-5">
            {Object.entries(overviewStats).map(([key, data]) => {
              const Icon = icons[key as keyof typeof icons];
              return <OverviewStatsCard key={key} Icon={Icon} {...data} />;
            })}
          </section>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {listings.map((listing) => (
            <Listing key={listing.id} {...listing} />
          ))}
        </div>
      </div>
    </main>
  );
}
