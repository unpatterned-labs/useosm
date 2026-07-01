import { Check } from "@/assets/icons/react/Check";
import { SpinnerGap } from "@/assets/icons/react/SpinnerGap";
import cn from "@/utils/cn";
import { formatTimeLineDate, parseDate } from "@/utils/formatDate";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

function getStatus(
  startDate: string,
  endDate: string,
): "done" | "active" | "pending" {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  end.setHours(23, 59, 59, 999);

  if (now > end) return "done";
  if (now >= start) return "active";
  return "pending";
}

const statusStyles: Record<string, string> = {
  done: "bg-green-200",
  active: "bg-grey-50",
  pending: "bg-grey-50",
};

const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <ul className="my-6 flex list-none flex-col gap-0 p-0">
      {items.map((item) => {
        const status = getStatus(item.startDate, item.endDate);

        return (
          <li
            key={item.title}
            className="grid grid-cols-[28px_1fr] items-start gap-x-3 sm:grid-cols-[140px_40px_1fr] sm:gap-x-2"
          >
            {/* Date — hidden on mobile, shown on sm+ */}
            <div className="text-grey-300 hidden text-base sm:block">
              {formatTimeLineDate(item.startDate, item.endDate)}
            </div>

            {/* Icon + line */}
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                  statusStyles[status],
                )}
              >
                {status === "done" ? (
                  <Check />
                ) : status === "active" ? (
                  <SpinnerGap className="animate-spin" />
                ) : null}
              </div>
              <hr className="bg-grey-50 h-[3.75rem] w-[1.2px] border-none" />
            </div>

            {/* Content */}
            <div className="space-y-1 pb-2">
              {/* Date shown inline on mobile only */}
              <p className="text-grey-400 text-sm sm:hidden">
                {formatTimeLineDate(item.startDate, item.endDate)}
              </p>
              <p className="text-grey-300 text-md font-semibold">
                {item.title}
              </p>
              <p
                className="text-grey-400 text-start text-base"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
