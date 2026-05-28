// 'use client'
// import React from 'react'
// import {motion} from "motion/react"
// import Image from 'next/image'
// import { Minus, Plus, PlusCircle, ShoppingCart } from 'lucide-react'
// import { useDispatch } from 'react-redux'
// import { AppDispatch, RootState } from '@/redux/store'
// import { addToCart, decreaseQuantity, increaseQuantity } from '@/redux/cartSlice'
// import { useSelector } from 'react-redux'
// interface IGrocery {
//     _id: string,
//     name: string,
//     category: string,
//     price: string,
//     unit: string,
//     image: string,
//     createdAt?: Date,
//     updatedAt?: Date
// }
// function GroceryItemCard({item}:{item:IGrocery}) {
//   const dispatch=useDispatch<AppDispatch>()
//   const {cartData}=useSelector((state:RootState)=>state.cart)
//   const cartItem=cartData.find(i=>i._id.toString()==item._id)
//   return (
//     <motion.div
//      initial={{opacity:0,y:50,scale:0.9}}
//     whileInView={{opacity:1,y:0,scale:1}}
//     transition={{duration:0.6}}
//     viewport={{once:false,amount:0.3}}
//     className='bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col'
//     >
//         <div className='relative w-full aspect-4/3 bg-gray-50 overflow-hidden group'>
//             <Image src={item.image} fill alt={item.name} sizes='(max-width: 768px) 100vw, 25vw' className='object-contain p-4 transition-transform duration-500 group-hover:scale-105'/>
//             <div className='absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'/>
//         </div>
//  <div className='p-4 flex flex-col flex-1'>
// <p className='text-xs text-gray-500 font-medium mb-1'>{item.category}</p>
// <h3>{item.name}</h3>
// <div className='flex items-center justify-between mt-2'>
//     <span className='text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full'>{item.unit}</span>
//     <span className='text-green-700 font-bold text-lg'>₹{item.price}</span>
// </div>
// {!cartItem ?<motion.button className='mt-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full py-2 text-sm font-medium transition-all' 
// whileTap={{scale:0.96}}
// onClick={()=>dispatch(addToCart({...item,quantity:1}))}
// >
// <ShoppingCart/> Add to Cart
// </motion.button>
// :
// <motion.div
// initial={{opacity:0, y:10}}
// animate={{opacity:1, y:0}}
// transition={{duration:0.3}}
// className='mt-4 flex items-center justify-center bg-green-50 border border-green-200 rounded-full py-2 px-4 gap-4'
// >
//   <button className='w-7 h-7 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition-all' onClick={()=>dispatch(decreaseQuantity(item._id))}><Minus size={16} className='text-green-700'/></button>
//   <span className='text-sm font-semibold text-gray-800'>{cartItem.quantity}</span>
//   <button className='w-7 h-7 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition-all' onClick={()=>dispatch(increaseQuantity(item._id))}><Plus size={16} className='text-green-700'/></button>

  
//   </motion.div>}

//  </div>
        
       



      
//     </motion.div>
//   )
// }

// export default GroceryItemCard


'use client'
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { Minus, Plus, Star } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { addToCart, decreaseQuantity, increaseQuantity } from '@/redux/cartSlice'

interface IGrocery {
    _id: string,
    name: string,
    category: string,
    price: string,
    unit: string,
    image: string,
    createdAt?: Date,
    updatedAt?: Date
}

function GroceryItemCard({ item }: { item: IGrocery }) {
    const dispatch = useDispatch<AppDispatch>()
    const { cartData } = useSelector((state: RootState) => state.cart)
    const cartItem = cartData.find(i => i._id.toString() == item._id)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="group bg-white rounded-[32px] border border-black/5 p-4 hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            {/* Image & Floating Actions */}
            <div className="relative overflow-hidden rounded-[24px] aspect-square bg-[#f1f3ff] mb-4">
                <Image 
                    src={item.image} 
                    fill 
                    alt={item.name} 
                    sizes="(max-width: 768px) 100vw, 25vw" 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Rating Badge */}
                <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-[#bbf14e] text-[#bbf14e]" />
                    <span className="text-[10px] font-bold">4.8</span>
                </div>

                {/* Cart Action Button / Controls */}
                {!cartItem ? (
                    <button 
                        onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-[#006e2e] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                    >
                        <Plus size={20} />
                    </button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-3 right-3 h-10 bg-[#006e2e] text-white rounded-full flex items-center justify-between shadow-lg px-2 gap-3"
                    >
                        <button 
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all" 
                            onClick={() => dispatch(decreaseQuantity(item._id))}
                        >
                            <Minus size={16} />
                        </button>
                        <span className="text-sm font-bold w-3 text-center">{cartItem.quantity}</span>
                        <button 
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all" 
                            onClick={() => dispatch(increaseQuantity(item._id))}
                        >
                            <Plus size={16} />
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Content Details */}
            <div className="px-2 flex-1 flex flex-col">
                <p className="text-[10px] text-[#006e2e] font-bold uppercase tracking-wider mb-1">
                    {item.category}
                </p>
                
                <h3 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold mb-1 line-clamp-1">
                    {item.name}
                </h3>
                
                <p className="text-sm text-[#3d4a3d] mb-4">
                    {item.unit} • Fresh Quality
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-lg">₹{item.price}</span>
                    {/* Simulated original price for the UI layout */}
                    <span className="text-xs text-[#3d4a3d] line-through">
                        ₹{(parseFloat(item.price) * 1.2).toFixed(0)}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default GroceryItemCard