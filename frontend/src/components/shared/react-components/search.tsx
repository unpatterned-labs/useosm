import { SearchIcon } from "@/assets/icons/react/SearchIcon";
import { XIcon } from "@/assets/icons/react/XIcon";
import cn from "src/utils/cn";

const Search = ({
  placeholder,
  onChange,
  value,
}: {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}) => {
  return (
    <div className="bg-surface-30 flex w-full items-center gap-2 rounded-4xl border border-gray-300 p-3.5 md:w-[25rem]">
      <SearchIcon
        className={cn(
          "transition-all delay-150 ease-in-out",
          value.length > 0 ? "text-grey-300" : "text-grey-50",
        )}
      />
      <input
        placeholder={placeholder}
        className="placeholder:text-grey-100 text-grey-300 flex-auto bg-transparent text-sm font-medium outline-none md:text-base"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {/* Clear input button */}
      {value.length > 0 && (
        <XIcon
          className="size-6 cursor-pointer text-red-200 transition-all delay-150 ease-in-out hover:text-red-100"
          onClick={() => onChange("")}
        />
      )}
    </div>
  );
};

export default Search;
