const VideoDialog = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="border-grey-50 shadow-dialog relative z-30 flex h-[80.25rem] w-[calc(100vw-2.5rem)] translate-y-[-4.125rem] items-center justify-center rounded-2xl border bg-white sm:rounded-4xl md:h-[90rem] md:translate-y-[-6.125rem] lg:h-[125.81rem] lg:w-[calc(100vw-5rem)] xl:w-[calc(100vw-32rem)]"
    >
      <iframe
        id="video-iframe"
        className="aspect-auto h-[20rem] w-full rounded-2xl sm:rounded-4xl md:h-[40rem]"
        src="https://www.youtube.com/embed/Phwrgb16oEM?autoplay=1&mute"
        title="New"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoDialog;
