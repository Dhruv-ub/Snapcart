"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe,
  Instagram,
  Leaf,
  Mail,
  Nfc,
  Play,
  Plus,
  Share2,
  ShieldCheck,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState({ h: "00", m: "00", s: "00" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          h: Math.floor(diff / 3600000)
            .toString()
            .padStart(2, "0"),
          m: Math.floor((diff % 3600000) / 60000)
            .toString()
            .padStart(2, "0"),
          s: Math.floor((diff % 60000) / 1000)
            .toString()
            .padStart(2, "0"),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Horizontal Scroll with Mouse Wheel
  useEffect(() => {
    const el = scrollContainerRef.current;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el?.scrollBy({ left: e.deltaY });
      }
    };
    el?.addEventListener("wheel", onWheel, { passive: false });
    return () => el?.removeEventListener("wheel", onWheel);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

// Reusable animation config for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const }, // <-- Add 'as const' here
    },
  };

  return (
    <div
      className="min-h-screen bg-[#faf8ff] text-[#141b2b] selection:bg-[#e6f0eb] selection:text-[#006e2e]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <main className="mx-auto w-[95%] max-w-[1280px] md:w-[90%] pt-28 pb-16">
        
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="relative mb-16 md:mb-20"
        >
          <div className="relative flex h-[500px] md:h-[600px] items-center overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#00422b]/90 via-[#00422b]/50 to-transparent"></div>
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=2000&auto=format&fit=crop"
              alt="Fresh organic vegetables"
            />
            <div className="relative z-20 w-full px-8 md:w-2/3 md:px-16">
              <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full bg-[#f1f3ff] px-4 py-1.5 text-sm font-semibold tracking-wide text-[#006e2e]">
                <Zap className="h-4 w-4 fill-[#006e2e]" />
                MEGA SAVINGS WEEK
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                Unbeatable Deals on Fresh Essentials.
              </h1>
              <p className="mb-8 max-w-lg text-lg text-white/80">
                Get up to 60% off on organic produce, premium dairy, and pantry
                staples. Limited time offer ending soon.
              </p>
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <button className="rounded-xl bg-[#006e2e] px-8 py-4 text-xl font-bold text-white shadow-lg transition-transform hover:scale-105">
                  Shop Mega Sale
                </button>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/60">
                    Ending in
                  </span>
                  <div className="flex gap-3 text-2xl font-bold text-white md:text-3xl">
                    <span>{timeLeft.h}</span>
                    <span className="text-white/30">:</span>
                    <span>{timeLeft.m}</span>
                    <span className="text-white/30">:</span>
                    <span>{timeLeft.s}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute bottom-6 right-6 z-20 hidden flex-col gap-4 md:flex lg:bottom-12 lg:right-12">
              <div className="flex rotate-3 items-center gap-4 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ba1a1a] font-bold text-white">
                  -60%
                </div>
                <div>
                  <div className="text-xl font-bold text-[#006e2e]">
                    Flash Offer
                  </div>
                  <div className="text-[#3d4a3d]">Heirloom Greens</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Flash Sales */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-16 md:mb-20"
        >
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#141b2b] md:text-3xl">
                Flash Sales
              </h2>
              <p className="text-[#3d4a3d]">Grab them before they're gone!</p>
            </div>
            <button className="flex items-center gap-2 font-bold text-[#006e2e] hover:underline">
              View All <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Flash Card 1 */}
            <div className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,110,46,0.15)]">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[#f9fafb]">
                <span className="absolute left-2 top-2 rounded-md bg-[#ba1a1a] px-2 py-0.5 text-xs font-semibold text-white">
                  Save ₹40
                </span>
                <img
                  className="h-32 w-32 object-contain transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80"
                  alt="Organic Strawberries"
                />
                <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f3ff] text-[#006e2e] shadow-md active:scale-95">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="mb-1 text-[12px] font-semibold uppercase text-[#006e2e]">
                FRUITS
              </div>
              <h3 className="mb-2 truncate text-lg font-bold text-[#141b2b]">
                Organic Strawberries
              </h3>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹80</span>
                <span className="text-[#3d4a3d]/50 line-through">₹120</span>
              </div>
              <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e6f0eb]">
                <div
                  className="h-full bg-[#006e2e] transition-all duration-1000 ease-out"
                  style={{ width: "15%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[12px] font-semibold text-[#3d4a3d]">
                <span>15% left</span>
                <span className="font-bold text-[#ba1a1a]">
                  Expires in 02:45:10
                </span>
              </div>
            </div>

            {/* Flash Card 2 */}
            <div className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,110,46,0.15)]">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[#f9fafb]">
                <span className="absolute left-2 top-2 rounded-md bg-[#ba1a1a] px-2 py-0.5 text-xs font-semibold text-white">
                  Save ₹25
                </span>
                <img
                  className="h-32 w-32 object-contain transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80"
                  alt="Fresh Whole Milk"
                />
                <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f3ff] text-[#006e2e] shadow-md active:scale-95">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="mb-1 text-[12px] font-semibold uppercase text-[#006e2e]">
                DAIRY
              </div>
              <h3 className="mb-2 truncate text-lg font-bold text-[#141b2b]">
                Fresh Whole Milk
              </h3>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹45</span>
                <span className="text-[#3d4a3d]/50 line-through">₹70</span>
              </div>
              <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e6f0eb]">
                <div
                  className="h-full bg-[#006e2e] transition-all duration-1000 ease-out"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[12px] font-semibold text-[#3d4a3d]">
                <span>45% left</span>
                <span className="font-bold text-[#ba1a1a]">
                  Expires in 01:12:05
                </span>
              </div>
            </div>

            {/* Flash Card 3 */}
            <div className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,110,46,0.15)]">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[#f9fafb]">
                <span className="absolute left-2 top-2 rounded-md bg-[#ba1a1a] px-2 py-0.5 text-xs font-semibold text-white">
                  Save ₹110
                </span>
                <img
                  className="h-32 w-32 object-contain transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80"
                  alt="Mixed Berry Bowl"
                />
                <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f3ff] text-[#006e2e] shadow-md active:scale-95">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="mb-1 text-[12px] font-semibold uppercase text-[#006e2e]">
                BERRIES
              </div>
              <h3 className="mb-2 truncate text-lg font-bold text-[#141b2b]">
                Mixed Berry Bowl
              </h3>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹280</span>
                <span className="text-[#3d4a3d]/50 line-through">₹390</span>
              </div>
              <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e6f0eb]">
                <div
                  className="h-full bg-[#006e2e] transition-all duration-1000 ease-out"
                  style={{ width: "8%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[12px] font-semibold text-[#3d4a3d]">
                <span>8% left</span>
                <span className="font-bold text-[#ba1a1a]">Almost Sold Out!</span>
              </div>
            </div>

            {/* Flash Card 4 */}
            <div className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,110,46,0.15)]">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-[#f9fafb]">
                <span className="absolute left-2 top-2 rounded-md bg-[#ba1a1a] px-2 py-0.5 text-xs font-semibold text-white">
                  Save ₹15
                </span>
                <img
                  className="h-32 w-32 object-contain transition-transform group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=300&q=80"
                  alt="Haas Avocados"
                />
                <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f3ff] text-[#006e2e] shadow-md active:scale-95">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <div className="mb-1 text-[12px] font-semibold uppercase text-[#006e2e]">
                VEGETABLES
              </div>
              <h3 className="mb-2 truncate text-lg font-bold text-[#141b2b]">
                Haas Avocados
              </h3>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹145</span>
                <span className="text-[#3d4a3d]/50 line-through">₹160</span>
              </div>
              <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-[#e6f0eb]">
                <div
                  className="h-full bg-[#006e2e] transition-all duration-1000 ease-out"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex justify-between text-[12px] font-semibold text-[#3d4a3d]">
                <span>65% left</span>
                <span className="font-bold text-[#3d4a3d]">
                  Ends in 08:30:00
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Snapcart Plus */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-16 md:mb-20"
        >
          <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[3rem] border border-black/5 bg-gradient-to-br from-[#10b981]/10 to-white/60 p-10 backdrop-blur-3xl lg:flex-row lg:p-20">
            {/* Background decorative glow */}
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#006e2e]/10 blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#006e2e]/5 blur-[80px]"></div>

            <div className="relative z-10 lg:w-1/2">
              <h2 className="mb-6 text-4xl font-extrabold text-[#006e2e] md:text-5xl">
                Upgrade to Snapcart <span className="font-bold italic">Plus</span>
              </h2>
              <p className="mb-10 max-w-md text-lg text-[#3d4a3d]">
                Experience the pinnacle of grocery delivery. Get unlimited free
                shipping and an additional 10% discount on all deals.
              </p>
              <ul className="mb-10 space-y-4">
                <li className="flex items-center gap-3 font-semibold text-[#141b2b]">
                  <CheckCircle2 className="h-6 w-6 text-[#006e2e]" />
                  Zero Delivery Fees on all orders
                </li>
                <li className="flex items-center gap-3 font-semibold text-[#141b2b]">
                  <CheckCircle2 className="h-6 w-6 text-[#006e2e]" />
                  Exclusive "Plus-Only" Weekly Sales
                </li>
                <li className="flex items-center gap-3 font-semibold text-[#141b2b]">
                  <CheckCircle2 className="h-6 w-6 text-[#006e2e]" />
                  Priority Support & Slot Booking
                </li>
              </ul>
              <button className="group flex items-center gap-2 rounded-2xl bg-[#141b2b] px-10 py-5 text-xl font-bold text-white shadow-2xl transition-colors hover:bg-[#141b2b]/90">
                Join Plus Now
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="relative z-10 w-full md:w-[400px] lg:w-2/5">
              <div className="transform rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-0 md:-rotate-3">
                <div className="mb-12 flex items-start justify-between">
                  <div className="text-3xl font-extrabold text-[#006e2e]">
                    Snapcart
                  </div>
                  <Nfc className="h-10 w-10 text-[#006e2e]" />
                </div>
                <div className="mb-8">
                  <div className="mb-1 text-sm font-semibold uppercase text-[#3d4a3d]">
                    Plus Member
                  </div>
                  <div className="font-mono text-xl tracking-widest text-[#141b2b]">
                    **** **** **** 2024
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#3d4a3d]">
                      SAVINGS THIS YEAR
                    </div>
                    <div className="text-3xl font-bold text-[#006e2e]">
                      ₹12,450
                    </div>
                  </div>
                  <div className="font-bold text-[#006e2e]">PLUS ELITE</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Trending Carousel */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-16 overflow-visible md:mb-20"
        >
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#141b2b] md:text-3xl">
                Trending on Sale
              </h2>
              <p className="text-[#3d4a3d]">Highly rated by the community</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[#006e2e] hover:bg-[#f1f3ff]"
              >
                <ChevronLeft className="text-[#3d4a3d] group-hover:text-[#006e2e]" />
              </button>
              <button
                onClick={scrollRight}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[#006e2e] hover:bg-[#f1f3ff]"
              >
                <ChevronRight className="text-[#3d4a3d] group-hover:text-[#006e2e]" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex snap-x gap-6 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Trending Card 1 */}
            <div className="min-w-[280px] snap-start rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-[#f9fafb]">
                <div className="absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                  <span className="text-[12px] font-bold">4.9</span>
                </div>
                <img
                  className="h-36 w-36 object-contain"
                  src="https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=300&q=80"
                  alt="Greek Yogurt"
                />
                <button className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006e2e] text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="mb-1 text-[11px] font-semibold uppercase text-[#006e2e]">
                Dairy & Eggs
              </div>
              <h3 className="mb-1 text-xl font-bold text-[#141b2b]">
                Greek Yogurt
              </h3>
              <p className="mb-4 text-sm text-[#3d4a3d]">500g • Fresh Quality</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹58</span>
                <span className="text-sm line-through text-[#3d4a3d]/50">
                  ₹70
                </span>
              </div>
            </div>

            {/* Trending Card 2 */}
            <div className="min-w-[280px] snap-start rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-[#f9fafb]">
                <div className="absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                  <span className="text-[12px] font-bold">4.8</span>
                </div>
                <img
                  className="h-36 w-36 object-contain"
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80"
                  alt="Premium Salad Mix"
                />
                <button className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006e2e] text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="mb-1 text-[11px] font-semibold uppercase text-[#006e2e]">
                Fresh Produce
              </div>
              <h3 className="mb-1 text-xl font-bold text-[#141b2b]">
                Premium Salad Mix
              </h3>
              <p className="mb-4 text-sm text-[#3d4a3d]">250g • Organic</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹120</span>
                <span className="text-sm line-through text-[#3d4a3d]/50">
                  ₹160
                </span>
              </div>
            </div>

            {/* Trending Card 3 */}
            <div className="min-w-[280px] snap-start rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-[#f9fafb]">
                <div className="absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                  <span className="text-[12px] font-bold">5.0</span>
                </div>
                <img
                  className="h-36 w-36 object-contain"
                  src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80"
                  alt="Artisan Cookies"
                />
                <button className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006e2e] text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="mb-1 text-[11px] font-semibold uppercase text-[#006e2e]">
                Bakery
              </div>
              <h3 className="mb-1 text-xl font-bold text-[#141b2b]">
                Artisan Cookies
              </h3>
              <p className="mb-4 text-sm text-[#3d4a3d]">
                Set of 6 • Handcrafted
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹210</span>
                <span className="text-sm line-through text-[#3d4a3d]/50">
                  ₹280
                </span>
              </div>
            </div>

            {/* Trending Card 4 */}
            <div className="min-w-[280px] snap-start rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-[#f9fafb]">
                <div className="absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                  <span className="text-[12px] font-bold">4.7</span>
                </div>
                <img
                  className="h-36 w-36 object-contain"
                  src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80"
                  alt="Cold-pressed Olive Oil"
                />
                <button className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006e2e] text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
              <div className="mb-1 text-[11px] font-semibold uppercase text-[#006e2e]">
                Pantry
              </div>
              <h3 className="mb-1 text-xl font-bold text-[#141b2b]">
                Extra Virgin Olive Oil
              </h3>
              <p className="mb-4 text-sm text-[#3d4a3d]">500ml • Cold Pressed</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#006e2e]">₹450</span>
                <span className="text-sm line-through text-[#3d4a3d]/50">
                  ₹590
                </span>
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
          className="mb-16 md:mb-20"
        >
          <div className="rounded-[2.5rem] border border-[#006e2e]/10 bg-[#f1f3ff] p-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#141b2b] md:text-3xl">
              Never miss a Deal
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg text-[#3d4a3d]">
              Get notified about flash sales and exclusive Snapcart Plus offers
              directly in your inbox.
            </p>
            <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 md:flex-row">
              <div className="group relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3d4a3d] transition-colors group-focus-within:text-[#006e2e]" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-2xl border border-black/10 bg-white py-4 pl-12 pr-6 text-base outline-none transition-all focus:border-[#006e2e] focus:ring-4 focus:ring-[#006e2e]/10"
                />
              </div>
              <button className="w-full whitespace-nowrap rounded-2xl bg-[#006e2e] px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 md:w-auto">
                Join Alert List
              </button>
            </div>
            <p className="mt-6 text-[12px] text-[#3d4a3d]">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </motion.section>
      </main>

    </div>
  );
}