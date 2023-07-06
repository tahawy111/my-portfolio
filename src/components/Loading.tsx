import {} from "react";
import { ScaleLoader } from "react-spinners";

interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <div
      className={`flex fixed w-full h-screen text-center justify-center items-center text-white top-0 left-0 z-[1]`}
      style={{ background: "#0007" }}
    >
      <ScaleLoader color="#fff" speedMultiplier={2} />
    </div>
  );
}
