const LineProgress = ({ progress }: { progress: number }) => {
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
