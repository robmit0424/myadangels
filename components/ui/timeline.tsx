"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-br from-white via-pink-50 to-white font-sans px-4 sm:px-6 md:px-8 lg:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 max-w-4xl font-orbitron font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent leading-tight">
          Our Development Roadmap
        </h2>
        <p className="text-pink-700/80 text-base sm:text-lg md:text-xl max-w-3xl font-roboto leading-relaxed">
          From vision to reality: Key milestones in our journey to revolutionize digital marketing workspaces
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 sm:pt-12 md:pt-20 lg:pt-40 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 sm:h-10 sm:w-10 absolute left-2 sm:left-3 md:left-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center shadow-lg">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white border-2 border-pink-200" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 lg:pl-20 lg:text-xl xl:text-3xl 2xl:text-5xl font-bold text-pink-800 font-orbitron leading-tight">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-16 md:pl-4 pr-2 sm:pr-4 w-full">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 text-left font-bold text-pink-800 font-orbitron leading-tight">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 sm:left-7 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-pink-300 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,white_10%,white_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-white via-pink-500 to-white from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};