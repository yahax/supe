"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <div className="section-shell space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Portfolio</p>
        <h1 className="text-3xl font-bold">Immersive gallery.</h1>
        <p className="max-w-2xl text-white/70">Hover cards réactifs, previews 3D léger et micro-interactions pour sentir la matière.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {portfolioItems.map((item, idx) => (
          <motion.div
            key={item.title}
            className="soft-card group relative overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ rotateX: 2, rotateY: -2, translateY: -4 }}
            style={{ perspective: 1000 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={420}
              height={320}
              className="h-56 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
            />
            {/* TODO: Replace placeholder portfolio image */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs text-white/60">{item.tag}</p>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs">Voir l'étude</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
