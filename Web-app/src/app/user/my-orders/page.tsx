'use client'

import axios from 'axios'
import { 
  ArrowLeft, PackageSearch, Search, Filter, Bell, 
  Home, ShoppingBag, User, ShoppingCart 
} from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "motion/react"
import React, { useEffect, useState } from 'react'
import UserOrderCard from '@/components/UserOrderCard'
import { getSocket } from '@/lib/socket'
import Link from 'next/link'
import Nav from '@/components/Nav'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

import { IUser } from '@/models/user.model'

interface IOrder {
    _id?: string
    user: string
    items: [
        {
            grocery: string,
            name: string,
            price: string,
            unit: string,
            image: string
            quantity: number
        }
    ]
    isPaid: boolean
    totalAmount: number,
    paymentMethod: "cod" | "online"
    address: {
        fullName: string,
        mobile: string,
        city: string,
        state: string,
        pincode: string,
        fullAddress: string,
        latitude: number,
        longitude: number
    }
    assignment?: string
    assignedDeliveryBoy?: IUser
    status: "pending" | "out of delivery" | "delivered",
    createdAt?: Date
    updatedAt?: Date
}

function MyOrder() {
  const router = useRouter()
  const user = useSelector((state: RootState) => state.user.userData)
  const [orders, setOrders] = useState<IOrder[]>()
  const [loading, setLoading] = useState(true)
  const [currentFilter, setCurrentFilter] = useState("All")

  useEffect(() => {
    const getMyOrders = async () => {
      try {
        const result = await axios.get("/api/user/my-orders")
        setOrders(result.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getMyOrders()
  }, [])

  useEffect(() => {
    const socket = getSocket()
    socket.on("order-assigned", ({ orderId, assignedDeliveryBoy }) => {
      setOrders((prev) => prev?.map((o) => (
        o._id == orderId ? { ...o, assignedDeliveryBoy } : o
      )))
    })

    return () => { socket.off("order-assigned") }
  }, [])

  // Derived Statistics for the Bento Summary
  const totalOrders = orders?.length || 0;
  const pendingCount = orders?.filter(o => o.status !== "delivered").length || 0;
  const deliveredCount = orders?.filter(o => o.status === "delivered").length || 0;
  const totalSpent = orders?.reduce((sum, order) => sum + (Number(order.totalAmount) || 0), 0) || 0;

  // Filter Logic
  const filteredOrders = orders?.filter(order => {
    if (currentFilter === "All") return true;
    if (currentFilter === "Pending") return order.status === "pending";
    if (currentFilter === "Processing") return order.status === "out of delivery";
    if (currentFilter === "Delivered") return order.status === "delivered";
    return true;
  }) || [];

  if (loading) {
    return <div className='flex items-center justify-center min-h-[50vh] text-gray-600'>Loading Your Orders...</div>
  }

  return (
    <div className='bg-gray-50/50 text-gray-900 font-sans min-h-screen pb-24'>
      
      {user && <Nav user={user} />}

      {/* TopAppBar Component */}
      {/* <header className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-8 h-16 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/")} className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </button>
          <span className="text-gray-900 text-lg font-bold md:hidden">My Orders</span>
          <span className="hidden md:block text-xl font-bold text-emerald-700">FreshCart</span>
        </div>
        <div className="flex items-center gap-3 flex-1 justify-end max-w-xl ml-4">
          <div className="relative w-full max-w-xs group hidden sm:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
            <input 
              className="w-full bg-gray-100 border-none rounded-2xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none" 
              placeholder="Search orders..." 
              type="text"
            />
          </div>
          <button className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors flex items-center justify-center">
            <Filter size={20} />
          </button>
          <button className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors flex items-center justify-center relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>
      </header> */}
    
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        {/* Dashboard Title Desktop */}
        <div className="hidden md:flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">My Orders</h1>
            <p className="text-gray-500 text-base mt-1">Track and manage your recent grocery deliveries.</p>
          </div>
        </div>

        {/* Summary Section: Bento Style */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-500/20 transition-all">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Orders</span>
              <span className="text-2xl font-bold text-gray-900">{totalOrders}</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-500/20 transition-all">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pending</span>
              <span className="text-2xl font-bold text-emerald-600">{pendingCount}</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-500/20 transition-all">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Delivered</span>
              <span className="text-2xl font-bold text-teal-600">{deliveredCount}</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-500/20 transition-all">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Spent</span>
              <span className="text-2xl font-bold text-gray-900">₹{totalSpent.toFixed(2)}</span>
            </div>
          </div>
        </section>

        {/* Filter Chips */}
        <section className="flex gap-2 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {["All", "Pending", "Processing", "Delivered"].map((f) => (
            <button 
              key={f}
              onClick={() => setCurrentFilter(f)}
              className={`flex-shrink-0 px-6 py-2 rounded-2xl font-medium text-sm transition-all ${
                currentFilter === f 
                  ? "bg-emerald-700 text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </section>

        {/* Order List using your EXACT component */}
        {filteredOrders.length === 0 ? (
          <div className='pt-12 pb-20 flex flex-col items-center text-center'>
            <PackageSearch size={70} className="text-gray-300 mb-4" />
            <h2 className='text-xl font-semibold text-gray-700'>No Orders Found</h2>
            <p className='text-gray-500 text-sm mt-2 max-w-sm'>
              {currentFilter !== "All" 
                ? `You have no ${currentFilter.toLowerCase()} orders at the moment.` 
                : "Start shopping to view your orders here."}
            </p>
          </div>
        ) : (
          <div className='mt-4 space-y-6'>
            <AnimatePresence>
              {filteredOrders.map((order, index) => (
                <motion.div
                  key={order._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Your exact component handles the card UI */}
                  <UserOrderCard order={order}/>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      {/* BottomNavBar Component (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-white/90 backdrop-blur-lg border-t border-gray-200/50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden">
        <Link href="/" className="flex flex-col items-center justify-center text-gray-500 transition-all hover:text-emerald-600">
          <Home size={22} />
          <span className="text-[10px] font-medium mt-1">Home</span>
        </Link>
        <Link href="/search" className="flex flex-col items-center justify-center text-gray-500 transition-all hover:text-emerald-600">
          <Search size={22} />
          <span className="text-[10px] font-medium mt-1">Browse</span>
        </Link>
        <div className="flex flex-col items-center justify-center bg-emerald-100 text-emerald-700 rounded-xl px-5 py-1.5 transition-all">
          <ShoppingBag size={22} className="fill-current" />
          <span className="text-[10px] font-bold mt-1">Orders</span>
        </div>
        <Link href="/profile" className="flex flex-col items-center justify-center text-gray-500 transition-all hover:text-emerald-600">
          <User size={22} />
          <span className="text-[10px] font-medium mt-1">Profile</span>
        </Link>
      </nav>

      {/* Floating Action Button */}
      <button 
        onClick={() => router.push('/user/cart')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-emerald-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:scale-105 hover:bg-emerald-700 active:scale-95 transition-all md:bottom-12 md:right-12 z-40"
      >
        <ShoppingCart size={24} />
      </button>

    </div>
  )
}

export default MyOrder