import { MyLoader } from "@/components/Ui/MyLoader";

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto h-screen">
      <MyLoader text="Loading..." />
    </div>
  );
};

export default LoadingPage;
