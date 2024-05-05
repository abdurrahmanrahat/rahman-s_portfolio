"use client";

import CodingLottie from "@/assets/coding.json";
import { Player } from "@lottiefiles/react-lottie-player";

const LottieShow = () => {
  return (
    <Player
      autoplay
      loop
      src={CodingLottie}
      style={{ height: "300px", width: "300px" }}
      // className="w-2/3 lg:w-full rounded"
    ></Player>
  );
};

export default LottieShow;
