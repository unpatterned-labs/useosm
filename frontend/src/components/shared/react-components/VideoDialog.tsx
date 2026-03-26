"use client";

import { PlayCircle } from "@/assets/icons/react/PlayCircle";
import { useState } from "react";
import OSMLogo from "@/assets/images/osm.svg";

const VideoDialog = ({ id }: { id: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      id={id}
      className="border-grey-50 shadow-dialog absolute -top-16 z-30 mx-auto flex h-[20.25rem] w-full max-w-screen-xl -translate-y-[6%] items-center justify-center rounded-2xl border bg-white sm:rounded-4xl md:h-[30rem] md:-translate-y-[10%] lg:h-[45rem]"
      style={{ overflow: "hidden" }}
    >
      {/* Thumbnail / Play Button Overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-white"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsPlaying(true)}
        >
          <div className="relative flex flex-col items-center gap-12">
            <img
              src={OSMLogo.src}
              alt="OpenStreetMap Logo"
              className="h-20 w-20 md:h-auto md:w-auto"
            />
            <div className="play-btn group shadow-dialog relative flex h-14 w-14 items-center justify-center rounded-full bg-green-300 transition-all duration-300 hover:scale-110 md:h-14 md:w-14">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-10"
                style={{ animationDuration: "1.8s" }}
              />
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-5"
                style={{ animationDuration: "2.2s", animationDelay: "0.2s" }}
              />

              <PlayCircle className="text-white" />
            </div>
          </div>
        </div>
      )}

      <iframe
        id="video-iframe"
        className="aspect-auto h-full w-full rounded-2xl sm:rounded-4xl"
        src={
          isPlaying
            ? "https://www.youtube.com/embed/Phwrgb16oEM?autoplay=1"
            : "about:blank"
        }
        title="OpenStreetMap introduction video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      />
    </div>
  );
};

export default VideoDialog;
