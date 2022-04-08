import animationData from "../../assets/lottieJson/success.json";

import Lottie from "react-lottie";
function LottieFile() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={200} width={200} />;
}

export default LottieFile;
