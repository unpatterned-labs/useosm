import { ArrowDownIcon } from "@/assets/icons/react/ArrowDown";
import { TranslateIcon } from "@/assets/icons/react/TranslateIcon";
import { APP_CONTENT } from "@/config/Content";
import { useState } from "react";

// TODO - Detect language preference and store in Global Context.
// We'll do this in the future when we start to translate contents to other languages.
export const Translator = () => {
  const [selectedLang, setSelectedLang] = useState<string>(
    APP_CONTENT.LANGUAGES[0].language,
  );

  return (
    <div className="bg-grey-300 text-grey-50 flex w-fit items-center gap-2 rounded-full px-4 py-3 text-xs font-medium md:w-full">
      <TranslateIcon className="size-4" />

      <div className="relative flex-1">
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="text-grey-50 w-full cursor-pointer appearance-none bg-transparent pr-6 focus:outline-none"
        >
          {APP_CONTENT.LANGUAGES.filter((l) => l.supported).map((l) => (
            <option key={l.language} value={l.language}>
              {l.language}
            </option>
          ))}
        </select>
        <ArrowDownIcon className="text-grey-50 pointer-events-none absolute top-1/2 right-2 size-3 -translate-y-1/2" />
      </div>
    </div>
  );
};
