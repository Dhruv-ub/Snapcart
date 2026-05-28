// 'use client'
// import { Leaf, ShoppingBasket, Smartphone, Truck } from 'lucide-react'
// import { AnimatePresence } from 'motion/react'
// import React, { useEffect, useState } from 'react'
// import {motion} from "motion/react"
// import Image from 'next/image'

// function HeroSection() {
 
 
//    const slides=[
//       {
//     id: 1,
//     icon: <Leaf className="w-20 h-20 sm:w-28 sm:h-28 text-green-400 drop-shadow-lg" />,
//     title: "Fresh Organic Groceries 🥦",
//     subtitle: "Farm-fresh fruits, vegetables, and daily essentials delivered to you.",
//     btnText: "Shop Now",
//    bg:"https://plus.unsplash.com/premium_photo-1663012860167-220d9d9c8aca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     id: 2,
//     icon: <Truck className="w-20 h-20 sm:w-28 sm:h-28 text-yellow-400 drop-shadow-lg" />,
//     title: "Fast & Reliable Delivery 🚚",
//     subtitle: "We ensure your groceries reach your doorstep in no time.",
//     btnText: "Order Now",
//     bg:"https://images.unsplash.com/photo-1683553170878-049f180627b0?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     id: 3,
//     icon: <Smartphone className="w-20 h-20 sm:w-28 sm:h-28 text-blue-400 drop-shadow-lg" />,
//     title: "Shop Anytime, Anywhere 📱",
//     subtitle: "Easy and seamless online grocery shopping experience.",
//     btnText: "Get Started",
//    bg:"https://plus.unsplash.com/premium_photo-1663091378026-7bee6e1c7247?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },

//     ] 

//     const [current,setCurrent]=useState(0)
// useEffect(()=>{
// const timer=setInterval(()=>{
// setCurrent((prev)=>(prev+1)%(slides.length))
// },4000)
// return ()=>clearInterval(timer)
// },[])

//   return (
//     <div className='relative w-[98%] mx-auto mt-32 h-[80vh] rounded-3xl overflow-hidden shadow-2xl'>
//       <AnimatePresence mode='wait'>
//        <motion.div
//        key={current}
//        initial={{opacity:0}}
//        animate={{opacity:1}}
//        transition={{duration:0.8}}
//        exit={{opacity:0}}
//        className='absolute inset-0'
//        >
// <Image
// src={slides[current]?.bg}
// fill
// alt='slide'
// priority
// className='object-cover'
// />
// <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]'/>
//        </motion.div>
//       </AnimatePresence>

// <div className='absolute inset-0 flex items-center justify-center text-center text-white px-6'>
// <motion.div
// initial={{y:30,opacity:0}}
// animate={{y:0,opacity:1}}
// transition={{duration:0.6}}
// className='flex flex-col items-center justify-center gap-6 max-w-3xl'
// >
// <div className='bg-white/10 backdrop-blur-md p-6 rounded-full shadow-lg'>{slides[current].icon}</div>
// <h1 className='text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg'>{slides[current].title}</h1>
// <p className='text-lg sm:text-xl text-gray-200 max-w-2xl'>{slides[current].subtitle}</p>
// <motion.button
// whileHover={{scale:1.09}}
// whileTap={{scale:0.96}}
// transition={{duration:0.2}}
// className='mt-4 bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center gap-2'
// >
//     <ShoppingBasket className='w-5 h-5'/>
//     {slides[current].btnText}
// </motion.button>
// </motion.div>
// </div>

// <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3'>
// {slides.map((_,index)=>(
//     <button 
//     key={index}
//     className={`w-3 h-3 rounded-full transition-all ${
//               index === current ? "bg-white w-6" : "bg-white/50"
//             }`}
//     />
// ))}
// </div>


//     </div>
//   )
// }

// export default HeroSection
'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Zap, ArrowRight, Leaf } from 'lucide-react'
// Note: Using standard <img> tags for demo images to prevent Next.js domain config errors.
// You can switch to <Image /> once you use your own local assets.

function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden min-h-[870px] flex items-center bg-[#F6F8F5]"
      style={{
        // Replicates the .hero-mesh custom CSS class
        backgroundImage: `radial-gradient(at 0% 0%, rgba(0, 184, 83, 0.1) 0px, transparent 50%),
                          radial-gradient(at 100% 0%, rgba(190, 244, 80, 0.1) 0px, transparent 50%)`
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center py-16">
        
        {/* Left Content */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#00b853]/10 px-4 py-2 rounded-full mb-6 border border-[#006e2e]/10">
              <Zap className="text-[#006e2e] w-4 h-4 fill-[#006e2e]" />
              <span className="text-[#006e2e] font-semibold text-[14px] leading-[20px] tracking-[0.05em]">
                10-MINUTE DELIVERY
              </span>
            </div>
            
            <h1 className="text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] font-bold tracking-[-0.04em] text-[#141b2b] mb-6">
              Fresh groceries <br />
              <span className="bg-gradient-to-br from-[#00B853] to-[#00D46A] bg-clip-text text-transparent">
                delivered in minutes.
              </span>
            </h1>
            
            <p className="text-[18px] leading-[28px] text-[#3d4a3d] mb-10 max-w-lg">
              Farm-fresh fruits, vegetables, dairy and daily essentials delivered lightning fast to your doorstep.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#006e2e] text-white font-semibold text-[14px] leading-[20px] tracking-[0.05em] rounded-full hover:scale-105 hover:shadow-lg transition-all active:scale-95 flex items-center gap-2">
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white text-[#141b2b] border border-black/5 font-semibold text-[14px] leading-[20px] tracking-[0.05em] rounded-full hover:bg-[#f1f3ff] transition-colors">
                Explore Categories
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://ui-avatars.com/api/?name=Alex&background=006e2e&color=fff" />
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://ui-avatars.com/api/?name=Sam&background=00B853&color=fff" />
                <img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://ui-avatars.com/api/?name=Jordan&background=bef450&color=000" />
              </div>
              <p className="text-[#3d4a3d] text-[16px] leading-[24px]">
                Trusted by <span className="font-bold text-[#141b2b]">50k+ families</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="relative hidden lg:block">
          {/* Background blur circle */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#006e2e]/5 rounded-full blur-3xl"></div>
          
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            alt="Fresh produce basket"
            className="relative z-10 w-full aspect-square object-cover rounded-[48px] shadow-2xl"
            // src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1548&auto=format&fit=crop"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_0m9TaLU1SFVHUbkXh-mo5vQc0w0LIlUq10VeRea7MOKwrB4HsIKiZE8lOD5EPfDRqYysPaKJinQzqfUREpo2CUa5eA96enuDcF_AE565sDb-T4inPdYC1l-LOu1B8iBIzviRq9Aa9F6EdtR2IC5GMssOBpuZ_0rzsWPDF6lV-QLLhoHEaye6jb1lWQjmLjDqmwDfWil7L7XWHz7Y52-rrkF1KN1U-_zrQD90f_OBoNJiw5zuhvr7ksz6TWJLsoxipeMMhNpL1GPu"
          />
          
          {/* Floating Glass Badge (.animate-bounce-slow & .glass equivalent) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white/70 backdrop-blur-[20px] p-6 rounded-[24px] shadow-xl border border-white/40 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-[#006e2e] rounded-full flex items-center justify-center text-white shadow-sm">
              <Leaf className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="font-bold text-[#141b2b]">100% Organic</p>
              <p className="text-sm text-[#3d4a3d]">Certified farm fresh</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection