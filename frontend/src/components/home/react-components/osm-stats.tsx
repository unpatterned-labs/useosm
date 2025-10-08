import { APP_CONTENT } from "@/config/Content";
import { useEffect, useRef, useState } from "react";
import OSMStatistics from "@/content/osm_stats.json";
import type { TOSMStats } from "src/types/content";
import { BezierCurveIcon } from "@/assets/icons/react/BezierCurveIcon";
import { CommandIcon } from "@/assets/icons/react/CommandIcon";
import { GlobeIcon } from "@/assets/icons/react/GlobeIcon";
import { LineSegmentIcon } from "@/assets/icons/react/LineSegment";
import { UsersIcon } from "@/assets/icons/react/UsersIcon";
import { formatNumber } from "@/utils/number-utils";
import { APP_CONFIG } from "@/config/Config";

const YEAR_RANGE = {
  startYear: APP_CONFIG.OSMFoundingYear,
  endYear: new Date().getUTCFullYear(),
};

const OSMStatsSlider = ({
  activeYear,
  setActiveYear,
}: {
  activeYear: number;
  setActiveYear: (year: number) => void;
}) => {
  const [dragValue, setDragValue] = useState<number>(activeYear);
  const sliderRef = useRef<HTMLInputElement>(null);
  const [thumbLeft, setThumbLeft] = useState<number>(0);

  useEffect(() => {
    if (sliderRef.current) {
      const range = YEAR_RANGE.endYear - YEAR_RANGE.startYear;
      const percent = (dragValue - YEAR_RANGE.startYear) / range;
      const sliderWidth = sliderRef.current.offsetWidth;
      const thumbWidth = 56; // w-14 in px
      const left = percent * (sliderWidth - thumbWidth) + thumbWidth / 2;
      setThumbLeft(left);
    }
  }, [dragValue]);

  const snapToNearestYear = () => {
    const start = dragValue;
    const target = Math.round(dragValue);
    const duration = 150; // ms
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const value = start + (target - start) * progress;
        setDragValue(value);
        requestAnimationFrame(animate);
      } else {
        setDragValue(target);
        setActiveYear(target);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="relative flex w-full flex-col items-center gap-y-8">
      {/* Thumb label inside wrapper */}
      <div
        className={`border-grey-50 text-base text-grey-400 pointer-events-none absolute top-1 flex h-10 w-16 cursor-pointer items-center justify-center rounded-4xl border bg-white font-medium shadow-xl transition-transform duration-150`}
        style={{
          left: thumbLeft,
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        {activeYear}
      </div>

      {/* Slider (hidden native thumb) */}
      <input
        ref={sliderRef}
        type="range"
        min={YEAR_RANGE.startYear}
        max={YEAR_RANGE.endYear}
        step={0.01}
        value={dragValue}
        onChange={(e) => setDragValue(Number(e.target.value))}
        onMouseUp={() => {
          snapToNearestYear();
        }}
        onTouchEnd={() => {
          snapToNearestYear();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
            const newYear = Math.max(
              YEAR_RANGE.startYear,
              Math.round(dragValue) - 1,
            );
            setDragValue(newYear);
            setActiveYear(newYear);
            e.preventDefault();
          }
          if (e.key === "ArrowRight" || e.key === "ArrowUp") {
            const newYear = Math.min(
              YEAR_RANGE.endYear,
              Math.round(dragValue) + 1,
            );
            setDragValue(newYear);
            setActiveYear(newYear);
            e.preventDefault();
          }
        }}
        className="bg-grey-50 ring-white-2 focus:outline-white-2 h-3 w-full cursor-pointer appearance-none rounded-4xl ring-4 [&::-moz-range-thumb]:size-12 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-none [&::-webkit-slider-thumb]:size-12 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-none"
      />

      {/* Marks */}
      <div className="text-grey-75 flex w-full justify-between text-base">
        <span>{YEAR_RANGE.startYear}</span>
        <span>
          {Math.round((YEAR_RANGE.startYear + YEAR_RANGE.endYear) / 2)}
        </span>
        <span>{YEAR_RANGE.endYear}</span>
      </div>
    </div>
  );
};

const OSMStatsInsights = ({ activeYear }: { activeYear: number }) => {
  // @ts-expect-error bad typing
  const stats = OSMStatistics[String(activeYear)] as TOSMStats | undefined;

  return (
    <div className="grid w-full grid-cols-2 justify-between gap-6 md:grid-cols-3 xl:flex">
      {[
        {
          title: "Changesets",
          value: stats?.changesets,
          icon: BezierCurveIcon,
        },
        {
          title: "Contributors",
          value: stats?.contributors,
          icon: UsersIcon,
        },
        {
          title: "Mapped Features",
          value: stats?.mappedFeatures,
          icon: LineSegmentIcon,
        },
        {
          title: "Countries Mapped",
          value: stats?.countries,
          icon: GlobeIcon,
        },
        {
          title: "Apps using OSM",
          value: stats?.apps,
          icon: CommandIcon,
        },
      ].map((stat, id) => (
        <div className="flex flex-col gap-y-6" key={`osm-stat-${id}`}>
          <div className="flex items-center gap-x-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-green-300 p-1 md:p-2 md:size-12">
              <stat.icon className="size-8 text-white md:size-12" />
            </div>
            <p className="text-grey-200 text-left text-sm md:text-base">
              {stat.title}
            </p>
          </div>
          <p className="text-grey-400 text-left text-3xl font-medium md:text-5xl">
            {formatNumber(Number(stat.value))}
          </p>
        </div>
      ))}
    </div>
  );
};

export const OSMStats = () => {
  const [activeYear, setActiveYear] = useState<number>(
    APP_CONFIG.OSMFoundingYear,
  );
  return (
    <section className="flex h-full w-full items-center justify-center bg-white px-4 py-32 md:px-12 lg:px-24">
      <div
        className="text-grey-300 flex w-full flex-col items-center justify-center gap-y-12 text-center"
        id="osm-stats"
      >
        <h2 className="max-w-[38.125rem] text-xl font-semibold sm:text-3xl">
          {APP_CONTENT.HOME_PAGE.OSMStats.title}
        </h2>
        <div className="hidden w-full md:block">
          <OSMStatsSlider
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />
        </div>
        <OSMStatsInsights activeYear={activeYear} />
        <div className="block w-full md:hidden">
          <OSMStatsSlider
            activeYear={activeYear}
            setActiveYear={setActiveYear}
          />
        </div>
      </div>
    </section>
  );
};
