import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// function to format large numbers with K, M, B suffixes
export const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};

// function to format currency values with commas
export const formatCurrency = (amount: number, currency?: string): string => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: currency ? "currency" : "decimal",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return currencyFormatter.format(amount);
};
