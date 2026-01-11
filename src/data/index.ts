import images from "@/assets/images";

export const overviewStats = {
  listings: {
    title: "Listings Overview",
    total: 1800,
    metrics: [
      { label: "Active", value: 80 },
      { label: "Archived", value: 1000 },
    ],
  },
  users: {
    title: "Users Overview",
    total: 20700,
    metrics: [
      { label: "Riders", value: 8500 },
      { label: "Subscribers", value: 7500 },
    ],
  },
} as const;

export const salesMetrics = [
  {
    id: "total-inflow",
    label: "Total Inflow",
    value: 120000000,
    currency: "₦",
    change: 2.5,
    trend: "up",
    color: "blue",
  },
  {
    id: "mrr",
    label: "MRR",
    value: 50000000,
    currency: "₦",
    change: 2.5,
    trend: "up",
    color: "green",
  },
  {
    id: "commission",
    label: "Commission Revenue",
    value: 20000000,
    currency: "₦",
    change: 0.5,
    trend: "down",
    color: "teal",
  },
  {
    id: "gmv",
    label: "GMV",
    value: 100000000,
    currency: "₦",
    change: 0.5,
    trend: "down",
    color: "red",
  },
] as const;

export const listings = [
  {
    id: "1",
    category: "Most Clicked",
    title: "Urban Prime Plaza Premiere",
    images: Array.from({ length: 2 }, (_, i) => ({
      id: `most_clicked_${i + 1}`,
      url: images.most_clicked,
    })),
  },
  {
    id: "2",
    category: "Most WatchedList",
    title: "Urban Prime Plaza Premiere",
    images: Array.from({ length: 5 }, (_, i) => ({
      id: `most_watched_${i + 1}`,
      url: images.most_watched,
    })),
  },
  {
    id: "3",
    category: "Hottest Listing",
    title: "Urban Prime Plaza Premiere",
    images: Array.from({ length: 5 }, (_, i) => ({
      id: `hottest_listing_${i + 1}`,
      url: images.hottest_listing,
    })),
  },
];

export const chartData = [
  { month: "Jan", blue: 35, green: 27, red: 10 },
  { month: "Feb", blue: 5, green: 27, red: 10 },
  { month: "Mar", blue: 14, green: 6, red: 3 },
  { month: "Apr", blue: 14, green: 25, red: 10 },
  { month: "May", blue: 9, green: 2, red: 7 },
  { month: "Jun", blue: 36, green: 48, red: 7 },
  { month: "Jul", blue: 23, green: 36, red: 17 },
  { month: "Aug", blue: 23, green: 6, red: 17 },
  { month: "Sep", blue: 36, green: 33, red: 6 },
];
