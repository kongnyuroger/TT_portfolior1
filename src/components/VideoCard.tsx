"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoCardProps {
  thumbnail: string;
  views: string;
  title: string;
}

export default function VideoCard({ thumbnail, views, title }: VideoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-surface cursor-pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute top-4 right-4 glass px-2 py-1 rounded-md text-xs font-bold text-white z-10">
        {views} views
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-black shadow-lg shadow-brand-blue/20">
          <Play fill="black" size={32} />
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-semibold line-clamp-2">{title}</p>
      </div>
    </motion.div>
  );
}
