// 'use client'
// import React from 'react'
// import { motion } from "motion/react"
// import { ArrowRight, Bike, ShoppingBasket } from 'lucide-react'
// type propType={
// nextStep:(s:number)=>void
// }
// function Welcome({nextStep}:propType) {
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen text-center p-6 bg-linear-to-b from-green-100 to-white'>
//       <motion.div
//       initial={{
//         opacity:0,
//         y:-10
//       }}
//       animate={{
//          opacity:1,
//          y:0
//       }}
//      transition={{
//         duration:0.6
//      }}
//      className='flex items-center gap-3'
//       >
//         <ShoppingBasket className='w-10 h-10 text-green-600'/>
//        <h1 className='text-4xl md:text-5xl font-extrabold text-green-700'>Snapcart</h1>
       
//         </motion.div>
//     <motion.p
//     initial={{
//         opacity:0,
//         y:10
//       }}
//       animate={{
//          opacity:1,
//          y:0
//       }}
//      transition={{
//         duration:0.6,
//         delay:0.3
//      }}
//      className='mt-4 text-gray-700 text-lg md:text-xl max-w-lg'
//     >
// Your one-stop destination for fresh groceries, organic produce, and
// daily essentials delivered right to your doorstep.

//     </motion.p>

//     <motion.div initial={{
//         opacity:0,
//         scale:0.9
//       }}
//       animate={{
//          opacity:1,
//          scale:1
//       }}
//      transition={{
//         duration:0.6,
//         delay:0.5
//      }}
//      className='flex items-center justify-center gap-10 mt-10'
//      >
//         <ShoppingBasket className='w-24 h-24 md:w-32 md:h-32 text-green-600 drop-shadow-md'/>
//         <Bike className='w-24 h-24 md:w-32 md:h-32 text-orange-500 drop-shadow-md'/>

//     </motion.div>

// <motion.button initial={{
//         opacity:0,
//         y:20
//       }}
//       animate={{
//          opacity:1,
//          y:0
//       }}
//      transition={{
//         duration:0.6,
//         delay:0.8
//      }}
     
//      className='inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200 mt-10'
//      onClick={()=>nextStep(2)}
//      >
// Next 
// <ArrowRight/>
// </motion.button>

//     </div>
//   )
// }

// export default Welcome
                             
'use client'

import React, { useRef, useState, MouseEvent } from 'react'
import { motion } from "motion/react"
import { 
  ArrowRight, 
  Bike, 
  ShoppingBasket, 
  ShoppingCart, 
  Clock, 
  Leaf, 
  CreditCard, 
  ShieldCheck, 
  Star 
} from 'lucide-react'

type propType = {
  nextStep: (s: number) => void
}

export default function Welcome({ nextStep }: propType) {
  const [activeRole, setActiveRole] = useState<'shop' | 'deliver' | null>(null)
  const leftSectionRef = useRef<HTMLElement>(null)

  // Mouse tracking parallax for the floating cards (matching original script)
  const handleMouseMove = (e: MouseEvent) => {
    if (window.innerWidth > 768 && leftSectionRef.current) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01
      
      const cards = leftSectionRef.current.querySelectorAll('.float-parallax')
      cards.forEach((card, index) => {
        const factor = (index + 1) * 2
        ;(card as HTMLElement).style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`
      })
    }
  }

  // Floating animation configuration for framer-motion
  const floatAnim = {
    y: ["0%", "-15%", "0%"],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }

  return (
    <main 
      className="flex flex-col md:flex-row min-h-screen w-full relative bg-[#f5fbf5] text-[#171d1a] font-sans overflow-hidden"
    >
      {/* Organic Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute rounded-full blur-[80px] opacity-40 bg-[#00b853] w-[500px] h-[500px] -top-20 -left-20"></div>
        <div className="absolute rounded-full blur-[80px] opacity-40 bg-[#fe7a00] w-[400px] h-[400px] bottom-10 right-10"></div>
        <div className="absolute rounded-full blur-[80px] opacity-40 bg-[#8afa9e] w-[300px] h-[300px] top-1/2 left-1/3"></div>
      </div>

      {/* Left Column: Visual */}
      <section 
        ref={leftSectionRef}
        onMouseMove={handleMouseMove}
        className="relative w-full md:w-1/2 min-h-[400px] md:min-h-screen flex items-center justify-center p-[20px] md:p-[40px] z-10"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] scale-110">
          <img 
            alt="Fresh groceries" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdXzbOXTnMz2hof6J84_el89keL9Cy-B0zn4AIzMIJ_-nd6ZOsCEOEXYhXl0lW5vtR78QySXHy02MH-SeJSdpkDtmpiGhn2Uc0bV4-ScqyzJRY8XNOWpqnDey675LEg1fovYT02VMZa-ljc-ae24qoYWOAZIx_D00oHZ6Fui8CO08z63U52kqZTaYu47AecM2adJt1zafxwNGM56LTUEU8-STi4-Nuw6bvP7pB1T1EX1QbLcRnTBEnkpUUi9RuuU-OlMrr-aUNVUc" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5fbf5]/30 to-transparent"></div>
        </div>

        {/* Floating Glass Mini-Cards */}
        <div className="relative w-full h-full max-w-lg">
          {/* 10 min delivery */}
          <motion.div 
            animate={floatAnim}
            className="float-parallax absolute top-[15%] left-[5%] p-[16px] rounded-[16px] flex items-center gap-[8px] shadow-xl z-10 bg-white/70 backdrop-blur-[20px] border border-white/30"
          >
            <div className="w-10 h-10 rounded-full bg-[#00b853]/20 flex items-center justify-center text-[#006e2e]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[14px] leading-[20px]">10 min delivery</p>
              <p className="text-[10px] text-[#3d4a3d]">Lightning fast</p>
            </div>
          </motion.div>

          {/* Fresh & Organic */}
          <motion.div 
            animate={floatAnim}
            style={{ animationDelay: "1.5s" }}
            className="float-parallax absolute top-[40%] right-[0%] p-[16px] rounded-[16px] flex items-center gap-[8px] shadow-xl z-10 bg-white/70 backdrop-blur-[20px] border border-white/30"
          >
            <div className="w-10 h-10 rounded-full bg-[#8afa9e]/30 flex items-center justify-center text-[#006e2f]">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[14px] leading-[20px]">Fresh & Organic</p>
              <p className="text-[10px] text-[#3d4a3d]">Farm to fork</p>
            </div>
          </motion.div>

          {/* Best Prices */}
          <motion.div 
            animate={floatAnim}
            style={{ animationDelay: "0.8s" }}
            className="float-parallax absolute bottom-[25%] left-[10%] p-[16px] rounded-[16px] flex items-center gap-[8px] shadow-xl z-10 bg-white/70 backdrop-blur-[20px] border border-white/30"
          >
            <div className="w-10 h-10 rounded-full bg-[#fe7a00]/20 flex items-center justify-center text-[#994700]">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[14px] leading-[20px]">Best Prices</p>
              <p className="text-[10px] text-[#3d4a3d]">Guaranteed savings</p>
            </div>
          </motion.div>

          {/* Secure Payments */}
          <motion.div 
            animate={floatAnim}
            style={{ animationDelay: "2.2s" }}
            className="float-parallax absolute bottom-[10%] right-[15%] p-[16px] rounded-[16px] flex items-center gap-[8px] shadow-xl z-10 bg-white/70 backdrop-blur-[20px] border border-white/30"
          >
            <div className="w-10 h-10 rounded-full bg-[#006e2e]/10 flex items-center justify-center text-[#006e2e]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-[14px] leading-[20px]">Secure Payments</p>
              <p className="text-[10px] text-[#3d4a3d]">100% Protected</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Right Column: Content */}
      <section className="w-full md:w-1/2 flex flex-col justify-between p-[20px] md:p-[40px] bg-[#f5fbf5]/40 backdrop-blur-sm z-10 relative">
        {/* Top Section */}
        <div className="flex flex-col gap-[32px]">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-[#00b853] rounded-xl flex items-center justify-center text-white shadow-lg">
              <ShoppingCart className="fill-current w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter text-[#006e2e]">Snapcart</span>
          </motion.div>

          {/* Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-[32px]"
          >
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.02em] font-extrabold">
              Your one-stop destination for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006e2e] to-[#00b853]">
                fresh groceries
              </span>
            </h1>
            <p className="mt-[16px] text-[#3d4a3d] text-[18px] leading-[28px] max-w-lg">
              Shop fresh fruits, vegetables, organic produce and daily essentials delivered fast to your doorstep.
            </p>
          </motion.div>

          {/* Role Selection */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mt-[16px]"
          >
            {/* Shopper Card */}
            <button 
              onClick={() => setActiveRole('shop')}
              className={`text-left p-6 rounded-xl transition-all duration-300 group relative overflow-hidden bg-white/70 backdrop-blur-[20px] border 
                ${activeRole === 'shop' 
                  ? 'border-[#006e2e] bg-[rgba(0,110,46,0.05)] shadow-[0_20px_40px_rgba(0,110,46,0.1)]' 
                  : 'border-white/40 hover:scale-[1.02] active:scale-[0.98]'
                }`}
            >
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShoppingBasket className="w-32 h-32 text-[#006e2e]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#006e2e]/10 flex items-center justify-center text-[#006e2e] mb-4 group-hover:bg-[#006e2e] group-hover:text-white transition-colors">
                <ShoppingBasket className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-semibold leading-[28px] mb-1">I want to Shop</h3>
              <p className="text-[12px] font-medium text-[#3d4a3d]">Access local fresh produce and essentials.</p>
            </button>

            {/* Partner Card */}
            <button 
              onClick={() => setActiveRole('deliver')}
              className={`text-left p-6 rounded-xl transition-all duration-300 group relative overflow-hidden bg-white/70 backdrop-blur-[20px] border 
                ${activeRole === 'deliver' 
                  ? 'border-[#994700] bg-[rgba(153,71,0,0.05)] shadow-[0_20px_40px_rgba(153,71,0,0.1)]' 
                  : 'border-white/40 hover:scale-[1.02] active:scale-[0.98]'
                }`}
            >
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Bike className="w-32 h-32 text-[#994700]" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#994700]/10 flex items-center justify-center text-[#994700] mb-4 group-hover:bg-[#994700] group-hover:text-white transition-colors">
                <Bike className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-semibold leading-[28px] mb-1">I want to Deliver</h3>
              <p className="text-[12px] font-medium text-[#3d4a3d]">Earn on your own schedule as a partner.</p>
            </button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-[64px] flex flex-col gap-[32px]"
        >
          {/* CTA */}
          <button 
            onClick={() => nextStep(2)}
            className="w-full md:w-fit px-12 py-4 bg-gradient-to-r from-[#006e2e] to-[#00b853] text-white rounded-full font-semibold text-[14px] leading-[20px] shadow-xl shadow-[#006e2e]/20 flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.95] transition-all duration-300"
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Footer-ish content */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-[16px] pt-[32px] border-t border-[#bccbb9]/50">
            <div className="flex items-center gap-[16px]">
              <div className="flex -space-x-3">
                <img alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyxFvWlPgGNUijxY9G3-E15aDAo9he-gK0Mxggb90geCq6b9jVVuL4mlSGPoqOIDhCTFksEZIXwYYEm0TsulGxO3_xWAzCYd-pTe8_V2ZFNt9t24jM4S1bdV8APdabLk0ppXduZbIPKW5EkffR2yNRaO00MKSqAKWa4nc8KO0ee2XWa49n5Ltt1ssdGkxBwFba06UmLQ15uIi9u36-F_ytaA_iPaCUrP13JWQcsqLfsSJ3aeMNa9cb5yZ6213hweTeIIT9uDiInkM" />
                <img alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbmNRt1e_1KpkZ60NRCfSZfsYPK-ekkB6Z0_fYrgtW0nZ899C-7mGbPrvruR4jfrBIyUJ19zd02QtB91wjr8_6qQvoOzQuoW2GQm4nA9zs4BhfKXYZFNxFryakgvfydxhcw1_IzJLWL1QYIFQ2Paw7xzJQnAi8Rw0xX_hjeiUbWQCC6VEzTN3ObyNGcuu8oqWKMDb9cxeKNTbjvt-vAInvX-GLT632fN-IYmlUPLFhgVDnfGtdnLjd1OD1Qw9k6irE7p5TTZRRaDA" />
                <img alt="User avatar" className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCLR5_HtiGDA3_hCFfgtwv_ow8nDs5sq_e4mdewRlvqSbHALjw9cHdsIUESoPdPpmpwuu-PQguruMhqyGpQdLeAhNltpNdJTkJST2yVrc1-rHLfSJQDxvH_ZJqNpMh96BuQStmMYER2etkACGQoFZMAOgRfPz9TwxXeohZIWWh9LKICFMTKLBQqspv09QpwRyZaeDgG9jrdVBX2HykJlfbwVjxbVVaEFoxuuLvYMACEb5IIenPMliO29PbTvzeyVn1YQzmbzTOrlQ" />
                <div className="w-8 h-8 rounded-full bg-[#e4eae4] border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#171d1a]">+50k</div>
              </div>
              <div>
                <p className="text-[12px] font-medium leading-[16px]">Trusted by 50,000+ customers</p>
                <div className="flex items-center gap-1 text-[#994700] mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[14px] h-[14px] fill-current" />
                  ))}
                  <span className="text-[12px] font-medium text-[#3d4a3d] ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-2">
              <div className="w-8 h-2 bg-[#006e2e] rounded-full"></div>
              <div className="w-2 h-2 bg-[#bccbb9] rounded-full"></div>
              <div className="w-2 h-2 bg-[#bccbb9] rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}