import { ReactNode } from "react";

const MyButton = ({
  mobileText,
  desktopText,
  isOutline,
  icon,
}: {
  mobileText: string;
  desktopText: string;
  isOutline: boolean;
  icon: ReactNode;
}) => {
  return (
    <button
      className={`md:text-[18px] rounded-md ${
        isOutline
          ? "border border-primary text-primary hover:text-primary/80"
          : "border border-primary bg-primary text-black hover:bg-primary/90"
      } duration-700 px-[20px] py-[12px] flex gap-2 items-center`}
    >
      <span className="lg:hidden">{mobileText}</span>
      <span className="hidden lg:block">{desktopText}</span>
      {icon}
    </button>
  );
};

export default MyButton;
