import {} from "react";
import { LineWave } from "react-loader-spinner";

interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <div
      className={`flex fixed w-full h-screen text-center justify-center items-center text-white top-0 left-0 z-[1]`}
      style={{ background: "#0007" }}
    >
      <LineWave
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
}
