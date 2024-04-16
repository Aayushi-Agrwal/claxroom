import { useState } from "react";

const LineProgress = () => {
  const [progress, setProgress] = useState(50);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setProgress((prevProgress) => {
  //         const nextProgress = prevProgress === 50 ? 70 : 50;
  //         return nextProgress;
  //       });
  //     }, 2000); // Change this value to adjust the transition interval

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="h-1 w-1/3 bg-white rounded-lg mb-8">
      <div
        className="h-1 bg-red-300 rounded-lg"
        style={{ width: `${progress}%`, transition: "width 1s ease-in-out" }}
      ></div>
    </div>
  );
};

export default LineProgress;
