import { ReactNode } from "react";

const MYButtonIconFirst = ({
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
      className={`text-sm md:text-base 2xl:text-[18px] rounded-md ${
        isOutline
          ? "border border-primary text-primary hover:text-primary/80"
          : "border border-primary dark:border-primary bg-primary text-black hover:bg-primary/90 "
      } duration-700 px-3.5 py-2 2xl:px-[18px] 2xl:py-[11px] flex gap-1 md:gap-2 items-center cursor-pointer`}
    >
      {icon}
      <span className="md:hidden">{mobileText}</span>
      <span className="hidden md:block">{desktopText}</span>
    </button>
  );
};

export default MYButtonIconFirst;
