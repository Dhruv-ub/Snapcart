'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Timer, ShieldCheck, Tag, Leaf, Star } from 'lucide-react'

function Stories() {
  return (
    <div className="w-full">
      {/* Why Choose Snapcart (Bento Grid) */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 md:px-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-center mb-16 text-[#141b2b]"
        >
          The Snapcart Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 10-Minute Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-[#006e2e] rounded-[32px] p-10 text-white relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[32px] leading-[40px] font-semibold tracking-[-0.02em] mb-4">
                10-Minute Lightning Delivery
              </h3>
              <p className="text-white/80 text-[18px] leading-[28px] max-w-md">
                Our dark stores are strategically located in your neighborhood to ensure your groceries reach you faster than you can say 'Fresh'.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          </motion.div>

          {/* Card 2: Farm to Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#bbf14e] rounded-[32px] p-10 group overflow-hidden"
          >
            <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-[#4a6800]" />
            </div>
            <h3 className="text-[32px] leading-[40px] font-semibold tracking-[-0.02em] mb-4 text-[#141f00]">
              Farm to Table Freshness
            </h3>
            <p className="text-[#364e00] text-[16px] leading-[24px]">
              Sourced daily from local farmers to guarantee maximum quality and nutrition for your family.
            </p>
          </motion.div>

          {/* Card 3: Guaranteed Best Prices */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#e9edff] rounded-[32px] p-10 group"
          >
            <div className="w-16 h-16 bg-[#006e2e]/10 rounded-full flex items-center justify-center mb-6">
              <Tag className="w-8 h-8 text-[#006e2e]" />
            </div>
            <h3 className="text-[32px] leading-[40px] font-semibold tracking-[-0.02em] mb-4 text-[#141b2b]">
              Guaranteed Best Prices
            </h3>
            <p className="text-[#3d4a3d] text-[16px] leading-[24px]">
              We work directly with producers to cut out middlemen costs, passing those savings directly to you.
            </p>
          </motion.div>

          {/* Card 4: Eco-Friendly Packaging */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-[#141b2b] rounded-[32px] p-10 text-white relative overflow-hidden group flex items-center"
          >
            <div className="flex-1">
              <h3 className="text-[32px] leading-[40px] font-semibold tracking-[-0.02em] mb-4">
                Eco-Friendly Packaging
              </h3>
              <p className="text-white/60 text-[18px] leading-[28px]">
                We use 100% biodegradable materials for all our deliveries because we care about the planet as much as your health.
              </p>
            </div>
            <div className="hidden lg:block w-48 h-48 bg-[#006e2e]/20 rounded-full relative group-hover:rotate-12 transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="w-20 h-20 text-[#006e2e]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[120px] bg-[#f1f3ff] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] mb-4 text-[#141b2b]">
              What Our Families Say
            </h2>
            <p className="text-[#3d4a3d] text-[16px] leading-[24px]">
              Join thousands of happy customers who trust Snapcart
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/70 backdrop-blur-[20px] p-8 rounded-[32px] border border-white/40 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  alt="Sarah J." 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#006e2e]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxYk2UX1Qr53a5JqmrFCBbHo4Aeg8NEpbN5giiWxACihWY5lfXUhogE0I8BhDjHVkjdY-B_NXdGjdqxAPR4N0Q7OXPYK4JB6fbx08B52BktMPomeQ8Pgp2tVHK76W9M8WbVyrwI2eCPcxkG7lclIkeRV9aCBMMtRgAraeeiQu0YEATgnWrsYEUE-qwT24_jesoTPkwqdIS3ALVG--EjKdmaJBtfaTjYxv7f4amodOIGOdplvpYVA3Sp7XyX7906nxyTKD8xp1qIL7_" 
                />
                <div>
                  <p className="font-bold text-[#141b2b]">Sarah Jenkins</p>
                  <p className="text-sm text-[#3d4a3d]">Busy Parent</p>
                </div>
              </div>
              <p className="text-[#3d4a3d] italic text-[16px] leading-[24px]">
                "Snapcart has been a lifesaver. The 10-minute delivery is actually 10 minutes! The produce is always fresher than what I find in stores."
              </p>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#bbf14e] fill-[#bbf14e]" />
                ))}
              </div>
            </motion.div>

            {/* Testimonial 2 (Scaled up slightly) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/70 backdrop-blur-[20px] p-8 rounded-[32px] border border-white/40 shadow-xl md:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  alt="Michael R." 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#006e2e]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQg8fmtiioEcuG0tHiIY8zL1fcCDsfqs4p0of4p5vrLKaej59qADxznQVdO_SacI3ExVoeeGzE7jwWlyCtyzRmE4wxTwJSbHOYY1Ml67AK0PB30y5DAbd74_IUUQUVYgk34Zgt-jp0luk81NOmOPJywLpSD2lE2B-dQsH0fn3KCidc-RkqUwXmhpsVuJNb-r39rQKRUsPcsNMDbzytu8MuVQOhku7vWjsJQSbvWwLKgV552enwfdWz_Oy-Qg8scV_ItuUFSDK2tIpB" 
                />
                <div>
                  <p className="font-bold text-[#141b2b]">Michael Ross</p>
                  <p className="text-sm text-[#3d4a3d]">Private Chef</p>
                </div>
              </div>
              <p className="text-[#3d4a3d] italic text-[16px] leading-[24px]">
                "As a chef, quality is everything. Snapcart's organic selection and artisanal breads are top-tier. Highly recommended for food lovers."
              </p>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#bbf14e] fill-[#bbf14e]" />
                ))}
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/70 backdrop-blur-[20px] p-8 rounded-[32px] border border-white/40 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  alt="Elena G." 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#006e2e]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWwO6QZ7pLn9wC8us2jC6SQb1rEN9I_TxLDTjyKOp93esddtGOqkSeAnokVzHPacaEwPZEjixq-GJsNSEwzylZ6nC7HSMRK8DyPsZpuhT3CvpOWGVHDp70Egox98ZbEzP69KT2wAC6xfMDx24q7-V3Yhqv5GiaDnx46DW6KBxMXJOjhXYaldI4WEuosyqjFWDwHofMdyEwl05SZRYnQ-6DYw8JWT8VWUKXsi0khGPfe2z246RuSCvt7apUunZy6H684wh0z9MNQsMS" 
                />
                <div>
                  <p className="font-bold text-[#141b2b]">Elena Gomez</p>
                  <p className="text-sm text-[#3d4a3d]">Fitness Coach</p>
                </div>
              </div>
              <p className="text-[#3d4a3d] italic text-[16px] leading-[24px]">
                "Love how easy it is to find healthy options. The nutritional info is clear and the delivery tracking is seamless. Best app on my phone!"
              </p>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#bbf14e] fill-[#bbf14e]" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stories