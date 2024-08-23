"use client";
import { cn } from "@/utils/cn";

const LogoNew = () => {
  return (
    <div className="flex flex-row space-x-4"> {/* Flex container with row direction */}
      <div className="w-[300px] h-[300px]"> {/* Set specific width and height */}
        <div
          className={cn(
            "group w-full h-full cursor-pointer overflow-hidden relative card mx-auto flex justify-center items-center p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(/imgprofile.png)] bg-cover bg-center rounded-full", // Make the image circular
            "shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]", // Initial red glow
            "group-hover:shadow-[0_0_20px_10px_rgba(255,0,0,0.8)]", // Intense red glow on hover
            "transition-all duration-500"
          )}
        >
        </div>
      </div>
    </div>
  );
}

export default LogoNew;
