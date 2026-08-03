import { ArrowDownIcon } from "@/assets/icons/react/ArrowDown";
import { TranslateIcon } from "@/assets/icons/react/TranslateIcon";
import { APP_CONTENT } from "@/config/Content";
import { isLocale, switchLocalePath } from "@/i18n/utils";
import type { Locale } from "@/i18n/ui";
import cn from "@/utils/cn";

export const Translator = ({
  currentLocale,
  currentPath,
  position,
}: {
  currentLocale: Locale;
  currentPath: string;
  position: "header" | "footer";
}) => {
  return (
    <div
      className={cn(
        "bg-grey-300 text-grey-50 flex w-fit items-center gap-2 rounded-full px-4 py-3 text-xs font-medium md:w-full",
        position === "header" ? "text-grey-400 bg-white" : "md:w-full",
      )}
    >
      <TranslateIcon className="size-4" />

      <div className="relative flex-1">
        <select
          value={currentLocale}
          onChange={(e) => {
            const target = e.target.value;
            if (!isLocale(target)) return;
            window.location.assign(switchLocalePath(currentPath, target));
          }}
          className={cn(
            "text-grey-50 w-full cursor-pointer appearance-none bg-transparent pr-6 focus:outline-none",
            position === "header" ? "text-grey-400" : "",
          )}
        >
          {APP_CONTENT.LANGUAGES.filter((l) => l.supported).map((l) => (
            <option key={l.locale} value={l.locale}>
              {l.language}
            </option>
          ))}
        </select>
        <ArrowDownIcon className="pointer-events-none absolute top-1/2 right-2 size-3 -translate-y-1/2" />
      </div>
    </div>
  );
};
