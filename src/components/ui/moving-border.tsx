import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

// Define the MovingBorder component
export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "10%",
  ry = "10%",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);

  // Update the progress based on the time
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength() ?? 0;
    const pxPerMillisecond = length / duration;
    progress.set((time * pxPerMillisecond) % length);
  });

  // Define transform values
  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  );

  const transform = `translateX(${x}px) translateY(${y}px)`;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
          stroke="white"
          strokeWidth="2" // Adjust thickness if needed
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
