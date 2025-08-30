import { SearchIcon } from "@/assets/icons/react/SearchIcon";
import { useState } from "react";
import cn from "src/utils/cn";

const Search = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (value: string) => void;
}) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="bg-surface-30 flex md:w-[25rem] w-full items-center gap-2 rounded-4xl border border-gray-300 p-3.5">
      <SearchIcon
        className={cn(
          "transition-all delay-150 ease-in-out",
          searchText.length > 0 ? "text-grey-300" : "text-grey-50",
        )}
      />
      <input
        placeholder={placeholder}
        className="placeholder:text-grey-100 text-grey-300 flex-auto bg-transparent font-medium outline-none"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
