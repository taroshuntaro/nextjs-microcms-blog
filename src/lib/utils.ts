import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
