const VideoDialog = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="border-grey-50 bg-surface-10 shadow-dialog relative z-30 h-[16.25rem] w-[calc(100vw-2.5rem)] translate-y-[-4.125rem] rounded-2xl border sm:rounded-4xl md:h-[34rem] md:translate-y-[-6.125rem] lg:h-[125.81rem] lg:w-[calc(100vw-5rem)] xl:w-[calc(100vw-32rem)]"
    >
      <iframe
        id="video-iframe"
        className="h-full w-full rounded-2xl sm:rounded-4xl"
        src="https://www.youtube.com/embed/Phwrgb16oEM?autoplay=1&mute"
        title="New"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoDialog;
