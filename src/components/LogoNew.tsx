"use client";
import { cn } from "@/utils/cn";

const LogoNew = () => {
  return (
    <div className="flex">
      <div className="w-[270px] h-[270px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
        {/* Set specific width and height with responsive values */}
        <div
          className={cn(
            "group w-full h-full cursor-pointer overflow-hidden relative card mx-auto flex justify-center items-center p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(/imgprofile.png)] bg-cover bg-center rounded-full",
            "shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]",
            "group-hover:shadow-[0_0_20px_10px_rgba(255,0,0,0.8)]",
            "transition-all duration-500"
          )}
        >
        </div>
      </div>
    </div>
  );
}

export default LogoNew;
