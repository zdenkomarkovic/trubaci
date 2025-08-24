import React from "react";

const VideoCard = () => {
  return (
    <div className="py-16  bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-2 md:px-4 mx-auto py-5 md:py-10 space-y-5 md:space-y-10">
        <h3 className="text-3xl md:text-5xl gold-accent text-center pb-10">
          Sa nama je provod zagarantovan
        </h3>

        <section className="">
          <video controls autoPlay loop muted className="w-full">
            {" "}
            <source src="/trubaci.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </div>
  );
};

export default VideoCard;
