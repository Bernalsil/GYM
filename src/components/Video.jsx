import video1 from "./media/video.mp4";

const Video = () => {
  return (
    <div className="mx-auto text-center">
      <video src={video1} controls></video>
    </div>
  );
};

export default Video;
