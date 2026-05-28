"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants, useInView } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  Star,
  BadgeCheck,
} from "lucide-react";

// --- Custom Animated Counter Component ---
const AnimatedCounter = ({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * (target - start) + start;
      setValue(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default function Bestsellers() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Strongly typed Variants fix
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatDelayedVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
    },
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Drag-to-scroll logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      className="min-h-screen bg-[#f9f9ff] text-[#151c29] selection:bg-[#98f5d2] selection:text-[#007257]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative flex min-h-[716px] items-center overflow-hidden bg-gradient-to-br from-[#f0f9f6] to-[#f9f9ff] px-6 pb-16 pt-10 md:px-16">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-12 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="space-y-6 lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#98f5d2] px-3 py-1.5 text-sm font-semibold text-[#007257]">
                <Star className="h-4 w-4 fill-[#007257]" />
                Most Loved by Customers
              </div>
              <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-[#00502c] md:text-5xl lg:text-6xl">
                The products everyone keeps{" "}
                <span className="italic text-[#006c52]">coming back</span> for
              </h1>
              <p className="max-w-lg text-lg text-[#3f4941]">
                Discover our most-purchased pantry staples and fresh harvest.
                Curated daily based on millions of happy households.
              </p>
              <div className="flex flex-wrap gap-6 pt-3">
                <button className="relative overflow-hidden rounded-full bg-[#00502c] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00502c]/20 transition-all duration-300 hover:scale-105 active:scale-95">
                  Shop All Bestsellers
                </button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="relative flex h-[500px] items-center justify-center lg:col-span-6"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                  alt="Organic Produce"
                />
              </div>

              {/* Floating Glass Cards */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -right-6 -top-6 flex items-center gap-3 rounded-2xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-md"
              >
                <div className="rounded-xl bg-[#9df5bb] p-3">
                  <BadgeCheck className="h-6 w-6 text-[#00502c]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#151c29]">
                    5.0 Rating
                  </p>
                  <p className="text-xs text-[#3f4941]">Verified Freshness</p>
                </div>
              </motion.div>

              <motion.div
                variants={floatDelayedVariants}
                animate="animate"
                className="absolute -left-10 bottom-10 max-w-[200px] space-y-2 rounded-2xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-md"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#7cd8b7] text-[#7cd8b7]"
                    />
                  ))}
                </div>
                <p className="text-xs italic text-[#151c29]">
                  "Always so fresh, simply the best in town!"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="border-y border-[#bec9be]/30 bg-white px-6 py-10"
        >
          <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center gap-16 md:gap-[120px]">
            <div className="group text-center">
              <p className="text-4xl font-extrabold text-[#00502c] transition-transform duration-300 group-hover:scale-110">
                <AnimatedCounter target={5} suffix="M+" />
              </p>
              <p className="text-sm font-semibold text-[#3f4941]">
                Orders Delivered
              </p>
            </div>
            <div className="group text-center">
              <p className="text-4xl font-extrabold text-[#00502c] transition-transform duration-300 group-hover:scale-110">
                <AnimatedCounter target={99.9} decimals={1} suffix="%" />
              </p>
              <p className="text-sm font-semibold text-[#3f4941]">
                Freshness Guarantee
              </p>
            </div>
            <div className="group text-center">
              <p className="text-4xl font-extrabold text-[#00502c] transition-transform duration-300 group-hover:scale-110">
                <AnimatedCounter target={10} suffix="min" />
              </p>
              <p className="text-sm font-semibold text-[#3f4941]">
                Average Delivery
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mx-auto max-w-[1280px] px-6 py-16 md:px-16"
        >
          <div className="mb-10 flex items-end justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-[#151c29] md:text-4xl">
                Curated Essentials
              </h2>
              <p className="text-[#3f4941]">
                Top rated items by the Snapcart community
              </p>
            </div>
            <div className="hidden gap-3 md:flex">
              <button className="rounded-full border border-[#bec9be] p-3 transition-all hover:bg-[#e8eeff] active:scale-90">
                <Filter className="h-5 w-5 text-[#3f4941]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Grid Card 1 */}
            <div className="group overflow-hidden rounded-3xl border border-[#bec9be]/20 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00502c]/5">
              <div className="relative aspect-square overflow-hidden p-6">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80"
                  alt="Avocados"
                />
                <div className="absolute left-6 top-6 flex items-center gap-1 rounded-full border border-white/30 bg-white/70 px-3 py-1 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-[#98f5d2] text-[#98f5d2]" />
                  <span className="text-xs font-bold text-[#151c29]">
                    4.9 (2k+)
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#00502c] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#00502c]/40 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-1 px-6 pb-6">
                <p className="text-[10px] font-bold tracking-widest text-[#006c52] uppercase">
                  Fruits & Vegetables
                </p>
                <h3 className="text-lg font-semibold text-[#151c29]">
                  Organic Haas Avocados
                </h3>
                <p className="text-xs text-[#3f4941]">3 units • 12 min delivery</p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-lg font-bold text-[#151c29]">
                    $5.40
                  </span>
                  <span className="text-sm text-[#3f4941] line-through">
                    $6.90
                  </span>
                </div>
              </div>
            </div>

            {/* Grid Card 2 */}
            <div className="group overflow-hidden rounded-3xl border border-[#bec9be]/20 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00502c]/5">
              <div className="relative aspect-square overflow-hidden p-6">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
                  alt="Sourdough"
                />
                <div className="absolute left-6 top-6 flex items-center gap-1 rounded-full border border-white/30 bg-white/70 px-3 py-1 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-[#98f5d2] text-[#98f5d2]" />
                  <span className="text-xs font-bold text-[#151c29]">
                    5.0 (800)
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#00502c] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#00502c]/40 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-1 px-6 pb-6">
                <p className="text-[10px] font-bold tracking-widest text-[#006c52] uppercase">
                  Bakery
                </p>
                <h3 className="text-lg font-semibold text-[#151c29]">
                  Artisanal Sourdough
                </h3>
                <p className="text-xs text-[#3f4941]">500g • 15 min delivery</p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-lg font-bold text-[#151c29]">
                    $4.50
                  </span>
                  <span className="text-sm text-[#3f4941] line-through">
                    $5.20
                  </span>
                </div>
              </div>
            </div>

            {/* Grid Card 3 */}
            <div className="group overflow-hidden rounded-3xl border border-[#bec9be]/20 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00502c]/5">
              <div className="relative aspect-square overflow-hidden p-6">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80"
                  alt="Yogurt"
                />
                <div className="absolute left-6 top-6 flex items-center gap-1 rounded-full border border-white/30 bg-white/70 px-3 py-1 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-[#98f5d2] text-[#98f5d2]" />
                  <span className="text-xs font-bold text-[#151c29]">
                    4.8 (1.5k)
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#00502c] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#00502c]/40 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-1 px-6 pb-6">
                <p className="text-[10px] font-bold tracking-widest text-[#006c52] uppercase">
                  Dairy & Eggs
                </p>
                <h3 className="text-lg font-semibold text-[#151c29]">
                  Premium Greek Yogurt
                </h3>
                <p className="text-xs text-[#3f4941]">500ml • 10 min delivery</p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-lg font-bold text-[#151c29]">
                    $6.20
                  </span>
                </div>
              </div>
            </div>

            {/* Grid Card 4 */}
            <div className="group overflow-hidden rounded-3xl border border-[#bec9be]/20 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00502c]/5">
              <div className="relative aspect-square overflow-hidden p-6">
                <img
                  className="h-full w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80"
                  alt="Tomatoes"
                />
                <div className="absolute left-6 top-6 flex items-center gap-1 rounded-full border border-white/30 bg-white/70 px-3 py-1 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-[#98f5d2] text-[#98f5d2]" />
                  <span className="text-xs font-bold text-[#151c29]">
                    4.9 (3k+)
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#00502c] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#00502c]/40 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-1 px-6 pb-6">
                <p className="text-[10px] font-bold tracking-widest text-[#006c52] uppercase">
                  Fruits & Vegetables
                </p>
                <h3 className="text-lg font-semibold text-[#151c29]">
                  Red Vine Tomatoes
                </h3>
                <p className="text-xs text-[#3f4941]">500g • 12 min delivery</p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-lg font-bold text-[#151c29]">
                    $3.80
                  </span>
                  <span className="text-sm text-[#3f4941] line-through">
                    $4.50
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Trending Now Carousel */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-[#f1f3ff] py-16"
        >
          <div className="mx-auto mb-6 flex max-w-[1280px] items-center justify-between px-6 md:px-16">
            <h2 className="text-3xl font-extrabold text-[#151c29] md:text-4xl">
              Trending Now
            </h2>
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bec9be] transition-all hover:bg-[#f9f9ff] active:scale-90"
              >
                <ChevronLeft className="h-5 w-5 text-[#3f4941]" />
              </button>
              <button
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bec9be] transition-all hover:bg-[#f9f9ff] active:scale-90"
              >
                <ChevronRight className="h-5 w-5 text-[#3f4941]" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="no-scrollbar flex cursor-grab snap-x gap-6 overflow-x-auto px-6 pb-6 active:cursor-grabbing md:pl-16 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Carousel Item 1 */}
            <div className="group flex min-w-[280px] snap-start items-center gap-6 rounded-2xl border border-[#bec9be]/30 bg-[#f9f9ff] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
                <img
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=200&q=80"
                  alt="Farm Fresh Milk"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#151c29]">
                  Farm Fresh Milk
                </h4>
                <p className="text-xs text-[#3f4941]">15% surge in orders</p>
                <p className="mt-1 font-bold text-[#00502c]">$2.50</p>
              </div>
            </div>

            {/* Carousel Item 2 */}
            <div className="group flex min-w-[280px] snap-start items-center gap-6 rounded-2xl border border-[#bec9be]/30 bg-[#f9f9ff] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
                <img
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80"
                  alt="Wild Rocket Mix"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#151c29]">
                  Wild Rocket Mix
                </h4>
                <p className="text-xs text-[#3f4941]">Top for 3 days</p>
                <p className="mt-1 font-bold text-[#00502c]">$3.90</p>
              </div>
            </div>

            {/* Carousel Item 3 */}
            <div className="group flex min-w-[280px] snap-start items-center gap-6 rounded-2xl border border-[#bec9be]/30 bg-[#f9f9ff] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
                <img
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&w=200&q=80"
                  alt="Young Asparagus"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#151c29]">
                  Young Asparagus
                </h4>
                <p className="text-xs text-[#3f4941]">Bestseller candidate</p>
                <p className="mt-1 font-bold text-[#00502c]">$4.20</p>
              </div>
            </div>

            {/* Carousel Item 4 */}
            <div className="group flex min-w-[280px] snap-start items-center gap-6 rounded-2xl border border-[#bec9be]/30 bg-[#f9f9ff] p-3 transition-all duration-300 hover:shadow-lg">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
                <img
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1614088058728-46c9bcbd6e60?auto=format&fit=crop&w=200&q=80"
                  alt="Salted Dark Cacao"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#151c29]">
                  Salted Dark Cacao
                </h4>
                <p className="text-xs text-[#3f4941]">Viral Snack</p>
                <p className="mt-1 font-bold text-[#00502c]">$5.00</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Social Proof */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mx-auto max-w-[1280px] px-6 py-16 md:px-16"
        >
          <h2 className="mb-10 text-center text-3xl font-extrabold text-[#151c29] md:text-4xl">
            What our community says
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="space-y-6 rounded-3xl border border-[#98f5d2]/20 bg-white/70 p-10 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl">
              <div className="flex gap-1 text-[#006c52]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#006c52]" />
                ))}
              </div>
              <p className="text-base italic leading-relaxed text-[#3f4941]">
                "The quality of the organic avocados I receive through Snapcart
                is consistently superior to any premium store I've visited. Truly
                a game changer."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#dce2f5]"></div>
                <div>
                  <p className="text-sm font-bold text-[#151c29]">Eleanor P.</p>
                  <p className="text-[10px] text-[#3f4941]">Verified Member</p>
                </div>
              </div>
            </div>

            <div className="relative space-y-6 rounded-3xl border border-[#98f5d2]/20 bg-white/70 p-10 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl md:-translate-y-4">
              <div className="flex gap-1 text-[#006c52]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#006c52]" />
                ))}
              </div>
              <p className="text-base italic leading-relaxed text-[#3f4941]">
                "Snapcart Plus has paid for itself within the first month. The
                10-minute delivery for fresh greens is something I now can't
                live without."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#dce2f5]"></div>
                <div>
                  <p className="text-sm font-bold text-[#151c29]">Marcus L.</p>
                  <p className="text-[10px] text-[#3f4941]">Snapcart Elite</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 rounded-3xl border border-[#98f5d2]/20 bg-white/70 p-10 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-xl">
              <div className="flex gap-1 text-[#006c52]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#006c52]" />
                ))}
              </div>
              <p className="text-base italic leading-relaxed text-[#3f4941]">
                "Their artisanal bread section is spectacular. The sourdough
                arrives warm sometimes! It's better than my local boutique bakery."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#dce2f5]"></div>
                <div>
                  <p className="text-sm font-bold text-[#151c29]">
                    Sophia Chen
                  </p>
                  <p className="text-[10px] text-[#3f4941]">Food Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Brand Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-white py-16"
        >
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <p className="mb-10 text-[10px] font-bold tracking-widest text-[#3f4941] uppercase">
              Powered by Premium Producers
            </p>
            <div className="flex flex-wrap items-center justify-center gap-16 opacity-40 grayscale transition-all duration-700 hover:grayscale-0 hover:opacity-100">
              <div className="cursor-default text-2xl font-bold text-[#151c29] transition-colors hover:text-[#00502c]">
                Whole Farms
              </div>
              <div className="cursor-default text-2xl font-bold tracking-tight text-[#151c29] transition-colors hover:text-[#00502c]">
                Nature's Choice
              </div>
              <div className="cursor-default text-2xl font-bold italic text-[#151c29] transition-colors hover:text-[#00502c]">
                Organic Valley
              </div>
              <div className="cursor-default text-2xl font-bold text-[#151c29] transition-colors hover:text-[#00502c]">
                Dairy Elite
              </div>
              <div className="cursor-default text-2xl font-bold text-[#151c29] transition-colors hover:text-[#00502c]">
                Baker's Guild
              </div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mx-auto max-w-[1280px] px-6 py-16 md:px-16"
        >
          <div className="relative space-y-6 overflow-hidden rounded-[40px] bg-[#00502c] p-16 text-center">
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#006c52]/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#006b3d]/20 blur-3xl"></div>
            
            <h2 className="relative z-10 mx-auto max-w-2xl text-3xl font-extrabold text-white md:text-4xl">
              The Snapcart Digest
            </h2>
            <p className="relative z-10 mx-auto max-w-lg text-white/70">
              Weekly recipes, seasonal harvest alerts, and exclusive bestseller
              pre-orders delivered to your inbox.
            </p>
            <div className="relative z-10 mx-auto flex max-w-md flex-col gap-3 pt-6 md:flex-row">
              <input
                type="email"
                placeholder="Your premium email address"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#006c52]"
              />
              <button className="relative overflow-hidden rounded-full bg-[#006c52] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#98f5d2] hover:text-[#007257] active:scale-95">
                Join The Circle
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}