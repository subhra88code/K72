const Video = ({ className = "" }) => {
  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      autoPlay
      loop
      muted
      playsInline
      src="/videos/bg-video.mp4"
    />
  );
};

export default Video;