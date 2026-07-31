import { ArrowDownIcon } from "@/assets/icons/react/ArrowDown";
import { TranslateIcon } from "@/assets/icons/react/TranslateIcon";
import { APP_CONTENT } from "@/config/Content";
import { isLocale, switchLocalePath } from "@/i18n/utils";
import type { Locale } from "@/i18n/ui";

export const Translator = ({
  currentLocale,
  currentPath,
}: {
  currentLocale: Locale;
  currentPath: string;
}) => {
  return (
    <div className="bg-grey-300 text-grey-50 flex w-fit items-center gap-2 rounded-full px-4 py-3 text-xs font-medium md:w-full">
      <TranslateIcon className="size-4" />

      <div className="relative flex-1">
        <select
          value={currentLocale}
          onChange={(e) => {
            const target = e.target.value;
            if (!isLocale(target)) return;
            window.location.assign(switchLocalePath(currentPath, target));
          }}
          className="text-grey-50 w-full cursor-pointer appearance-none bg-transparent pr-6 focus:outline-none"
        >
          {APP_CONTENT.LANGUAGES.filter((l) => l.supported).map((l) => (
            <option key={l.locale} value={l.locale}>
              {l.language}
            </option>
          ))}
        </select>
        <ArrowDownIcon className="text-grey-50 pointer-events-none absolute top-1/2 right-2 size-3 -translate-y-1/2" />
      </div>
    </div>
  );
};
