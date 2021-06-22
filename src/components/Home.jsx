import HomeVideo from "../components/video/HomeVideo.mp4";

const Home = () => {
  const vidStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "50%",
    top: "50%",
    objectFit: "cover",
    transform: "translate(-50% ,-50%)",
    zIndex: "-100",
  };

  return (
    <>
      <video autoPlay loop muted playsInline style={vidStyle}>
        <source src={HomeVideo} type="video/mp4" />
      </video>
    </>
  );
};

export default Home;
