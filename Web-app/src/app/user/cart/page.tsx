'use client'
import { 
  ArrowLeft, Minus, Plus, ShoppingBasket, Trash2, 
  Leaf, Droplets, Croissant, IceCream, ArrowRight,
  Zap, Bookmark, Heart, Clock, Sparkles, ShieldCheck, Award, Shield
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { AnimatePresence, motion } from "motion/react"
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import Image from 'next/image'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'

// Dummy data for Recently Viewed (Empty Cart State)
const recentlyViewedItems = [
  { id: 1, name: "Hass Avocado", category: "PRODUCE", price: 2.49, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyFMt9LBhGYRnaqRi-ttyyEkH3mbMJ1budNvxuZbxnxYprBRhAYOPSyJF8okXsI2ALO7R9VZCb8Ip_MRSakGB8P-pFGP7nx16f8QAAZEDw-yEhy9AEgPvkkDSysSgAjX3tFGCnCVMKIzk7yCIW5qo7FipWPqFbctkBCheD-luIYkEqOCOfpzjBJhAem9YtN7ttFXJItj-l49nBJBQYRBYifXJVgAn9084SBpb_NhwMJvAtR1m-mZJ4I9FHd0mBObeTnXUWlzJuZdI" },
  { id: 2, name: "Organic Whole Milk", category: "DAIRY", price: 4.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWlGjuVP4FHkBJEi17YEEtT0qwO-cG1_HrkCmniv4QttDEs77qav48FZ34-tAC-Ws0T9liR4lmUIclszL-Y7O8URD8_6s1WRxX0CAk2palW8TJuIqpEJKQsbu90Fea66-wcpeo8S6xlVNIJPCUOWhZDfU4_uojtP2qsR6yeZDe7YwDml6aEphQ2cfF9GrHj3sJRWJ6lXJkTLslf9cltVpavdAiPsnyrugd1fL92BNPXh631gNqYqjSzWAQ6n9Q1UUKQkcvNpY6C64" },
  { id: 3, name: "Artisan Sourdough", category: "BAKERY", price: 6.50, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgj-RiIcWBHvUPBz-n0nXDpyG_zZdAQtkKX3vwCbGNorRzjvMAaddr9PSxmCpfLp9K_VYWP7A0Lpgeu2VPz4b2Fzo4d6S8Ru9I3283et4ssTO_gURH_eQcbNf3s84Mt6-VD2znh-e3iPQ4Z8EoO_bpe3SFZZ6Brta1_9itg9Zc5IQzbp6z02tYu9bTOtPC1SeAehxpAaVi5nTrixbMp5DBmRmawkRUaBhzAwz1dgcARrOXKFP2FjQXXWJhq5rPXAmX5zBOV-A2bVc" },
  { id: 4, name: "Seedless Grapes", category: "PRODUCE", price: 3.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5I2ARgUeOPzx5ZiL4U8nuhybEnEUEmzE7Ef50fOBNu70DpXlGLHK6t-aiTyc6j4neiQUe4HTvlU8ltWGU81-MrovSW3ZWyl5jxmBdb-1QWwYSI-siEtMmvfLKZ5ZmoC9wUVcjvtJxCuJE5eyR9BL6ppqpc5B0eMpLzEvuSrf4ARlZEiCLELwXRh0zsPmoFKdYw2kF-KUQhh662I99YEQO0SdZyA02FKc2vG-ag3_K9mGkAYTHe5JxM-Hukmsh0Om_hdNLEt7K5Yg" },
]

// Dummy data for Frequently Bought Together (Populated Cart State)
const frequentlyBought = [
  { id: 101, name: "Salted Butter", price: 120, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw8kZSkZayKlRKqbDcX4IDAnl1vwaAZ6L5x9lHrLUxPgE1hxvMYiwju5_98W3HM9Rj4RtR8iJdGJtxZH9RPSQL0wivDnbQCi7lLEk34-dm1P02MbwLhn6PtazWskLf41C7JfxlRnS1i6IEzycwYnB5Zm0AiW4ppuXG7Z84L7FVlf7ho0rWz7ienJZt8se3EowDoe8L1BGI549Bsu5uT_toy37NOB1MZKlj83kuw6EQ2epMbxgmcqz4XRN2aoGEHzWRBERiv_s0sXI" },
  { id: 102, name: "Vine Tomatoes", price: 60, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRts1nR69YpZiMJcQNYBsdUXl1Z3PKtN32vNs73WcUh40Oxadi_sjwgIwGP8DITwYPJxpYPrAeRiwo2DZRQCHpq3OUQz6ffLffGiVzIwY2uqpXuLkNgjmzQnLqe2CUA73txPW67jEQ3WCRFXzE6Ce68ylWo2caddDcaY89f8CF4T6fRhtVlTcEkhoS1ofkePUu4-qHkzn5vbwzQicOuPv7tWGZ1BIR-Ph3p_IQyY7jlADA0Pek9TQWCSbASCx775umVaXD-5R_1lY" },
  { id: 103, name: "Organic Kale", price: 45, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKOtTHnJUxZ4_CHK5rzugtcfwUPABf2E40Mqd6zmqaTJmxE9zzX3jWohANQ4URc-FuIpDxE7IaPxZqG2glxu1hK04D4UNLw3njvYL_X7i-vbyIvxI4MwjlsXllW61ZmURvXwQGY01r2kUVUWStJk3_aByHHSDtkGDjH6OUPX4EtMrJqEKltG8gazZ6kpciWMuCdRRGWVcslZdzO-ChjhHtZqZX2I8Y5Vk0FspKPxi_nNC__cmb0ihPm3zNuUJfM1OuuM-J5_AtSRs" },
  { id: 104, name: "Fresh Strawberries", price: 180, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6P-c6zL62iQ1IqqoNa1NcXvY3MEfNj_VBNGxAClQTruur0hng1y3a0H7UqNBBSJ27hIhfUBSgZYObUVRIo4KSLLfR0fatJFUR3MYGnIpxmg9Dtlp4UFe38CTph7otLnMT-9G5b_GYLWGw7dcod8J6YDsAL4sMhG81paOmKFxCqoEzHWz9prc5UQGkHZLgdZdVDxGTBrlJurJQLk9fHXzQO89z53KzNcEEWfIa0Yzl_8waeGcUyIvBH-DMe1l4EhlQ6xQ4lfauSlA" },
]

function CartPage() {
  const { cartData, subTotal, finalTotal, deliveryFee } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  // Target amount for free delivery (Example: ₹500)
  const freeDeliveryTarget = 500;
  const deliveryProgress = Math.min((subTotal / freeDeliveryTarget) * 100, 100);

  return (
    <div className='w-[95%] sm:w-[90%] md:w-[85%] max-w-[1280px] mx-auto mt-8 mb-24 relative min-h-[70vh]'>
      <Link href={"/"} className='absolute -top-2 left-0 flex items-center gap-2 text-green-700 hover:text-green-800 font-medium transition-all z-50'>
        <ArrowLeft size={20} />
        <span className='hidden sm:inline'>Back to home</span>
      </Link>

      {cartData.length === 0 ? (
        // ==========================================
        //         EMPTY CART DESIGN (UNCHANGED)
        // ==========================================
        <div className="w-full flex flex-col items-center justify-center relative overflow-hidden pt-12 pb-20">
          
          {/* Decorative Floating Glass Cards */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-0 md:left-20 bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-3xl hidden sm:flex shadow-lg z-0"
          >
            <Leaf className="text-green-600 w-8 h-8" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-0 md:right-20 bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-3xl hidden sm:flex shadow-lg z-0"
          >
            <Droplets className="text-green-600 w-8 h-8" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-10 md:left-40 bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-3xl hidden sm:flex shadow-lg z-0"
          >
            <Croissant className="text-green-600 w-8 h-8" />
          </motion.div>

          {/* Centerpiece Composition */}
          <div className="relative w-full max-w-2xl text-center z-10 mt-10">
            <div className="relative mb-12 flex justify-center items-center">
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-green-500/20 blur-[80px] md:blur-[100px] rounded-full animate-pulse z-0"></div>
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] border border-green-50"
              >
                <ShoppingBasket className='w-24 h-24 md:w-32 md:h-32 text-green-500 mx-auto' />
              </motion.div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
            >
              Your cart is waiting
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-gray-600 mb-10 max-w-md mx-auto leading-relaxed"
            >
              Fresh groceries are just a few clicks away. Explore our seasonal picks and restock your kitchen.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
            >
              <Link href={"/"} className="inline-flex items-center gap-2 bg-green-500 text-white px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold shadow-[0_20px_40px_-12px_rgba(34,197,94,0.4)] hover:-translate-y-1 hover:shadow-2xl hover:bg-green-600 transition-all duration-300 active:scale-95">
                Start Shopping
              </Link>
            </motion.div>
          </div>

          {/* Trending Categories */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-24 w-full max-w-4xl z-10"
          >
            <h3 className="text-xs md:text-sm text-center text-gray-400 font-semibold uppercase tracking-[0.15em] mb-6">
              Trending Categories
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { name: 'Fruits', icon: Leaf },
                { name: 'Dairy', icon: Droplets },
                { name: 'Bakery', icon: Croissant },
                { name: 'Frozen', icon: IceCream },
              ].map((category, idx) => (
                <Link key={idx} href="#" className="bg-white/60 backdrop-blur-md border border-gray-100 shadow-sm px-6 py-3 rounded-full flex items-center gap-3 hover:bg-green-500 hover:text-white text-gray-700 transition-all duration-300 group">
                  <category.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recently Viewed Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-24 w-full border-t border-gray-200/60 pt-16 z-10"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
                <p className="text-gray-500 mt-1">Pick up where you left off</p>
              </div>
              <button className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base">
                See All <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recentlyViewedItems.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white/60 backdrop-blur-md p-6 border border-white/50 rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group cursor-pointer hover:-translate-y-2 transition-transform duration-500 flex flex-col"
                >
                  <div className="bg-gray-50 rounded-2xl aspect-square mb-4 overflow-hidden flex items-center justify-center p-4">
                    <img 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                      src={product.image} 
                      alt={product.name} 
                    />
                  </div>
                  <p className="text-xs font-semibold tracking-wider text-green-600 mb-1">{product.category}</p>
                  <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h4>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                    <button className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-green-500 hover:text-white transition-all duration-300">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        // ==========================================
        //         POPULATED CART DESIGN (NEW)
        // ==========================================
        <div className="pt-12 pb-16">
          <div className="flex flex-col gap-4 mb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-green-600 font-bold"
            >
              <Zap className="w-5 h-5 fill-current animate-pulse" />
              <span className="text-xs md:text-sm tracking-widest uppercase">15-Minute Express Delivery</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
            >
              Your Cart ({cartData.length} items)
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
            
            {/* Left Column: Cart Items (70%) */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence>
                {cartData.map((item, index) => (
                  <motion.div
                    key={item._id || index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/70 backdrop-blur-md rounded-[24px] p-4 md:p-6 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col md:flex-row gap-6 relative group overflow-hidden"
                  >
                    {/* Image Container */}
                    <div className="w-full md:w-40 h-40 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center relative shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-gray-500 text-sm">{item.unit || "Fresh Produce"}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl md:text-2xl font-bold text-green-600">₹{Number(item.price) * item.quantity}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4 bg-green-50 p-1 rounded-full border border-green-100/50">
                          <button 
                            onClick={() => dispatch(decreaseQuantity(item._id))}
                            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-green-700 transition-colors shadow-sm"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="font-semibold text-gray-800 px-2">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(increaseQuantity(item._id))}
                            className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:shadow-lg hover:bg-green-600 transition-all"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                        
                        {/* Action Links */}
                        <div className="flex items-center gap-4 md:gap-6">
                          <button className="flex items-center gap-1 text-gray-400 hover:text-green-600 transition-colors">
                            <Bookmark size={18} />
                            <span className="text-sm font-medium hidden sm:inline">Save for later</span>
                          </button>
                          <button className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-colors">
                            <Heart size={18} />
                            <span className="text-sm font-medium hidden sm:inline">Wishlist</span>
                          </button>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-green-600 font-medium">
                          <Clock size={16} />
                          <span className="text-sm">Arrives in 12 mins</span>
                        </div>
                        <button 
                          onClick={() => dispatch(removeFromCart(item._id))}
                          className="text-gray-300 hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Frequently Bought Together Carousel */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6 px-2">Frequently Bought Together</h2>
                <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-2 scroll-smooth no-scrollbar">
                  {frequentlyBought.map((item) => (
                    <div key={item.id} className="bg-white/70 backdrop-blur-md min-w-[160px] md:min-w-[200px] rounded-[24px] p-3 md:p-4 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col gap-3 group">
                      <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center relative">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105 mix-blend-multiply" />
                        <button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 hover:bg-green-600 transition-all">
                          <Plus size={18} />
                        </button>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm truncate">{item.name}</h4>
                        <span className="text-green-600 font-bold text-base">₹{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Order Summary (30%) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-3 sticky top-28"
            >
              <div className="bg-white/70 backdrop-blur-md rounded-[24px] p-6 md:p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] border border-white/50 space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs md:text-sm font-medium">
                    {subTotal >= freeDeliveryTarget ? (
                      <span className="text-green-600 font-bold">Free Delivery Unlocked!</span>
                    ) : (
                      <>
                        <span className="text-green-600">₹{freeDeliveryTarget - subTotal} away from free delivery</span>
                        <span className="text-gray-500">₹{freeDeliveryTarget} target</span>
                      </>
                    )}
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${deliveryProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-4 pt-2 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">₹{subTotal}</span>
                  </div>
                  {/* Optional Savings Line (Visual Only for now) */}
                  <div className="flex justify-between items-center group">
                    <span className="flex items-center gap-1">
                      Total Savings
                      <Sparkles className="w-4 h-4 text-green-500 fill-current animate-pulse" />
                    </span>
                    <span className="text-green-600 font-bold transition-transform duration-300 group-hover:scale-105">-₹40</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Delivery Fee</span>
                    {subTotal >= freeDeliveryTarget ? (
                      <span className="font-bold text-green-600 line-through">₹{deliveryFee}</span>
                    ) : (
                      <span className="font-bold text-gray-900">₹{deliveryFee}</span>
                    )}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200/60">
                    <span className="text-xl font-bold text-gray-900">Grand Total</span>
                    <span className="text-3xl font-bold text-green-600">
                      ₹{subTotal >= freeDeliveryTarget ? finalTotal - deliveryFee : finalTotal}
                    </span>
                  </div>
                </div>

                {/* Coupon */}
                <div className="pt-2">
                  <div className="flex gap-2 p-1 bg-green-50/50 rounded-full border border-green-100 focus-within:border-green-500 transition-colors">
                    <input className="bg-transparent border-none focus:ring-0 text-sm flex-1 px-4 outline-none placeholder:text-gray-400" placeholder="Promo Code" type="text" />
                    <button className="bg-white text-green-600 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-green-500 hover:text-white transition-all shadow-sm">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button 
                  onClick={() => router.push("/user/checkout")}
                  className="w-full bg-gradient-to-br from-green-400 to-green-600 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  Checkout Now
                  <ArrowRight size={20} />
                </button>

                {/* Safe Badges */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-500">
                    <ShieldCheck className="text-green-500 w-5 h-5" />
                    <span className="text-xs font-medium">100% Secure PCI-DSS Payments</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Award className="text-green-500 w-5 h-5" />
                    <span className="text-xs font-medium">Quality Guaranteed Freshness</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges Footer */}
              <div className="mt-8 flex justify-center items-center gap-8 text-gray-300 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-8 h-8 hover:text-green-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Secure</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Zap className="w-8 h-8 hover:text-yellow-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Fast</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Leaf className="w-8 h-8 hover:text-green-500 transition-colors" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Fresh</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage