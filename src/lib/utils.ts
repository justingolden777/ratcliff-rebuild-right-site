import { siteConfig } from "@/content/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString();
}

export function isActivePath(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === href;
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}
