import { listings, overviewStats, salesMetrics } from "@/data";
import { JSX } from "react/jsx-dev-runtime";

export type SVGProps = React.SVGProps<SVGSVGElement>;

export type SalesMetric = (typeof salesMetrics)[number];

export type OverviewStat = (typeof overviewStats)["listings" | "users"];

export type Listing = (typeof listings)[number];

export type IconType = (props: SVGProps) => JSX.Element;
