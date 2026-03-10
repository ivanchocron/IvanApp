"use client";

import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n/types";
import versionData from "../../version.json";

export function Footer({ dict }: { dict: Dictionary }) {
  const pathname = usePathname();
  const version = versionData.version || "dev";

  // Hide on homepage (homepage has its own custom footer in page.tsx)
  const lang = pathname.split("/")[1] || "en";
  const isHomepage = pathname === `/${lang}` || pathname === `/${lang}/`;
  if (isHomepage) {
    return null;
  }

  return (
    <footer className="border-t border-slate-200 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-500">
        <div>&copy; {new Date().getFullYear()} {dict.metadata.title}. {dict.footer.rights}</div>
        {version !== "dev" && (
          <div className="mt-2 text-xs text-slate-400" data-site-version>
            {version}
          </div>
        )}
      </div>
    </footer>
  );
}
