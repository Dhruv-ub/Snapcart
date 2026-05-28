// 'use client'
// import React from 'react'
// import {motion} from "motion/react"
// import Link from 'next/link'
// import { Facebook, Instagram, Mail, MapPin, Phone, TwitterIcon } from 'lucide-react'

// function Footer() {
//   return (
//     <motion.div 
//     initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="bg-linear-to-r from-green-600 to-green-700 text-white mt-20"
//     >
//         <div className='w-[90%] md:w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-green-500/40'>
//           <div>
// <h2  className='text-2xl font-bold mb-3'>Snapcart</h2>
// <p className='text-sm text-green-100 leading-relaxed'> Your one-stop online grocery store delivering freshness to your doorstep.  
//             Shop smart, eat fresh, and save more every day!
// </p>
//           </div>
// <div >
//     <h2 className='text-xl font-semibold mb-3'>Quick Links</h2>
//     <ul className='space-y-2 text-green-100 text-sm'>
//         <li><Link href={"/"} className='hover:text-white transition'>Home</Link></li>
//         <li><Link href={"/cart"} className='hover:text-white transition'>Cart</Link></li>
//         <li><Link href={"/my-orders"} className='hover:text-white transition'>My Orders</Link></li>
//     </ul>
// </div>

// <div>
//      <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
//           <ul className="space-y-2 text-green-100 text-sm">
//             <li className="flex items-center gap-2">
//               <MapPin size={16} /> Mumbai, India
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone size={16} /> +91 0000000000
//             </li>
//             <li className="flex items-center gap-2">
//               <Mail size={16} /> support@snapcart.in
//             </li>
//           </ul>
//           {/* 🌐 Social Links */}
//           <div className="flex gap-4 mt-4">
//             <Link href="https://facebook.com" target="_blank">
//               <Facebook className="w-5 h-5 hover:text-white transition" />
//             </Link>
//             <Link href="https://instagram.com" target="_blank">
//               <Instagram className="w-5 h-5 hover:text-white transition" />
//             </Link>
//             <Link href="https://twitter.com" target="_blank">
//               <TwitterIcon className="w-5 h-5 hover:text-white transition" />
//             </Link>
//           </div>
//         </div>

// </div>

// <div className="text-center py-4 text-sm text-green-100 bg-green-800/40">
//         © {new Date().getFullYear()} <span className="font-semibold">Snapcart</span>. All rights reserved.
//       </div>

      
      
//     </motion.div>
//   )
// }

// export default Footer



'use client'
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link'
import { Globe, Share2, Mail } from 'lucide-react'

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0F172A] text-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-16 md:py-[120px] grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-white/10">
        
        {/* Brand & Info */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-[32px] leading-[40px] font-bold tracking-[-0.02em] text-white mb-6 block">
            Snapcart
          </Link>
          <p className="text-[#6B7280] text-[16px] leading-[24px] mb-8">
            Freshness delivered to your doorstep. The fastest way to shop for your daily essentials.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006e2e] hover:text-white transition-all">
              <Globe size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006e2e] hover:text-white transition-all">
              <Share2 size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#006e2e] hover:text-white transition-all">
              <Mail size={18} />
            </Link>
          </div>
        </div>

        {/* Links 1: Company */}
        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Partners
              </Link>
            </li>
          </ul>
        </div>

        {/* Links 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#6B7280] text-[16px] leading-[24px] hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-6">Join the Fresh Club</h4>
          <p className="text-[#6B7280] text-[16px] leading-[24px] mb-6">
            Get weekly recipes and exclusive discounts delivered to your inbox.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-[#006e2e] focus:border-[#006e2e] text-white outline-none transition-all placeholder:text-[#6B7280]" 
              placeholder="Email address" 
              type="email" 
              required
            />
            <button 
              type="submit" 
              className="bg-[#006e2e] text-white py-3 rounded-2xl font-bold hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#6B7280] text-sm">
          © {new Date().getFullYear()} Snapcart. Freshness delivered to your doorstep.
        </p>
        <div className="flex gap-8 text-xs text-[#6B7280]">
          <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer