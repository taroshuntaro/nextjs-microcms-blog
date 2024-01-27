import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 記事詳細画面のパスを生成
 * @param postId
 * @return 記事詳細画面のパス
 */
export const getPostDetailPath = (postId: string) => {
  return "/post/" + postId;
};

export const convertJST = (utcDate: string): string => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return dayjs.utc(utcDate).tz("Asia/Tokyo").format("YYYY-MM-DD");
};
