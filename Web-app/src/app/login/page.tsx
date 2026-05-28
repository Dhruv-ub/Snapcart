// 'use client'
// import { ArrowLeft, EyeIcon, EyeOff, Key, Leaf, Loader2, Lock, LogIn, Mail, User } from 'lucide-react'
// import React, { FormEvent, useState } from 'react'
// import {motion} from "motion/react"
// import Image from 'next/image'
// import googleImage from "@/assets/google.png"
// import axios from 'axios'
// import { useRouter } from 'next/navigation'
// import { signIn, useSession } from 'next-auth/react'

// function Login() {
   
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [showPassword,setShowPassword]=useState(false)
//     const [loading,setLoading]=useState(false)
//     const router=useRouter()
//     const session=useSession()
//     console.log(session)
//     const handleLogin=async (e:FormEvent)=>{
//         e.preventDefault()
//         setLoading(true)
// try {
//   //  await signIn("credentials",{
//   //   email,password
//   //  }) 
  
//   const res = await signIn("credentials", {
//   email,
//   password,
//   redirect: false,
// });

// if (res?.ok) {
//   router.replace("/"); // or "/dashboard"
// }

//    setLoading(false)
// } catch (error) {
//     console.log(error)
//     setLoading(false)
// }
//     }
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
      
//       <motion.h1
//       initial={{
//         y:-10,
//         opacity:0
//       }}
//       animate={{
//          y:0,
//         opacity:1
//       }}
//       transition={{
//         duration:0.6
//       }}
//        className='text-4xl font-extrabold text-green-700 mb-2'>Welcome Back</motion.h1>
//        <p className='text-gray-600 mb-8 flex items-center'>Login To Snapcart <Leaf className='w-5 h-5 text-green-600'/></p>
//        <motion.form
//       onSubmit={handleLogin}
//        initial={{
//         opacity:0
//       }}
//       animate={{
//         opacity:1
//       }}
//       transition={{
//         duration:0.6
//       }} className='flex flex-col gap-5 w-full max-w-sm'>

        
//         <div className='relative'>
//         <Mail className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
//         <input type="text" placeholder='Your Email' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none'
//         onChange={(e)=>setEmail(e.target.value)}
//         value={email}
//         />
//         </div> 
//         <div className='relative'>
//         <Lock className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
//         <input type={showPassword?"text":"password"} placeholder='Your Password' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none'
//         onChange={(e)=>setPassword(e.target.value)}
//         value={password}
//         />
//         {
//             showPassword?<EyeOff className='absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer' onClick={()=>setShowPassword(false)}/>:<EyeIcon className='absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer'  onClick={()=>setShowPassword(true)}/>
//         }
//         </div> 

// {
//    (()=>{
//     const formValidation= email!=="" && password!==""
//         return <button disabled={!formValidation || loading} className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${
//                     formValidation 
//                       ? "bg-green-600 hover:bg-green-700 text-white"
//                       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   }`}>
// {loading?<Loader2 className='w-5 h-5 animate-spin'/>:"Login"}
            
//         </button>
//     })()
// }

// <div className='flex items-center gap-2 text-gray-400 text-sm mt-2'>
//     <span className='flex-1 h-px bg-gray-200'></span>
//     OR
//     <span className='flex-1 h-px bg-gray-200'></span>
// </div>

// <div className='w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-xl text-gray-700 font-medium transition-all duration-200' onClick={()=>signIn("google",{callbackUrl:"/"})}>
//     <Image src={googleImage} width={20} height={20} alt='google'/>
//     Continue with Google
// </div>
 
//        </motion.form>

//        <p className='cursor-pointer text-gray-600 mt-6 text-sm flex items-center gap-1' onClick={()=>router.push("/register")}>Want to create an account ? <LogIn className='w-4 h-4'/> <span className='text-green-600'> Sign Up</span></p>
//     </div>
//   )
// }

// export default Login









// 'use client'

// import React, { FormEvent, useState } from 'react'
// import { motion } from "motion/react"
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import { signIn, useSession } from 'next-auth/react'
// import { 
//   ArrowRight, 
//   EyeIcon, 
//   EyeOff, 
//   Loader2, 
//   Lock, 
//   Mail, 
//   ShoppingCart, 
//   ShieldCheck, 
//   CheckCircle 
// } from 'lucide-react'
// import googleImage from "@/assets/google.png"

// export default function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [loginError, setLoginError] = useState("")
  
//   const router = useRouter()
//   const { data: session } = useSession()

//   const handleLogin = async (e: FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setLoginError("")
//     try {
//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (res?.ok) {
//         router.replace("/"); // or "/dashboard"
//       } else if (res?.error) {
//         setLoginError("Incorrect email or password")
//       }
//       setLoading(false)
//     } catch (error) {
//       console.log(error)
//       setLoginError("Something went wrong. Please try again.")
//       setLoading(false)
//     }
//   }

//   // Derived state for button validation
//   const isFormValid = email !== "" && password !== ""

//   return (
//     <main className="min-h-screen w-full flex flex-col md:flex-row items-stretch overflow-x-hidden font-sans bg-[#f9f9ff]">
      
//       {/* Left: Hero Image Section (Split-screen Desktop) */}
//       <section className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Hero Image with Prompt */}
//         <div className="absolute inset-0 z-0 bg-gray-900">
//           <img 
//             alt="Fresh groceries" 
//             className="w-full h-full object-cover scale-105 opacity-60" 
//             src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1rxuZHA51NXLmuSInAMEdozKx67AOl-zKS9mdoo5GIPt289tBIko-Lw3OdOhONcBCTiu7rKNU9I0jxT5TUcrUbXaUHg8JPanx0j7Sw9HszMrW2bssqarFNyw8c77ess__NXrBDlTKwHXSMM-tnrIq1Q-fftBLd-uh5tr38kfjoReewVWarfRvo_wuORTfvQwn_9WFBbTO90uL2GuxEhbuhLB9whS2rUwegrWuV63fARvYeaTgxIyWWRir5HlpOqKGScGbbAlv28ak" 
//           />
//           {/* Dark Green Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#006e2e]/90 via-[#006e2e]/50 to-transparent mix-blend-multiply"></div>
//         </div>

//         {/* Content Overlay */}
//         <div className="relative z-10 px-5 md:px-16 text-white w-full">
//           <div className="max-w-xl">
//             <motion.h1 
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-[40px] md:text-[64px] font-bold mb-6 leading-[1.1] tracking-[-0.04em] drop-shadow-md"
//             >
//               Fresh groceries delivered in minutes.
//             </motion.h1>

//             {/* Floating Badges Cluster */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="flex flex-wrap gap-3 mt-12"
//             >
//               <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
//                 <CheckCircle className="text-[#8afa9e] w-5 h-5" />
//                 <span className="text-[14px] font-medium tracking-[0.01em]">Trusted by 50k+ users</span>
//               </div>
//               <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
//                 <ShieldCheck className="text-[#8afa9e] w-5 h-5" />
//                 <span className="text-[14px] font-medium tracking-[0.01em]">Secure SSL Login</span>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Brand Identity Anchor (Top Left) */}
//         <div className="absolute top-8 left-5 md:left-16 z-20 flex items-center gap-2">
//           <ShoppingCart className="text-[#6cfe8f] w-10 h-10" />
//           <span className="text-[32px] text-white font-extrabold tracking-tight">Snapcart</span>
//         </div>
//       </section>

//       {/* Right: Login Form Section */}
//       <section className="w-full md:w-1/2 bg-[#f1f3ff] flex items-center justify-center p-5 md:p-16 relative overflow-hidden">
        
//         {/* Atmospheric backgrounds */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-[#6cfe8f]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bef450]/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

//         {/* Floating Glassmorphism Card */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white/70 backdrop-blur-[24px] border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.04),0_15px_30px_rgba(0,0,0,0.02)] w-full max-w-[480px] rounded-[28px] p-8 md:p-12 relative z-10 transition-all duration-500 hover:shadow-2xl"
//         >
//           <header className="mb-10">
//             <h2 className="text-[32px] font-semibold text-[#141b2b] mb-2 tracking-tight">Welcome Back</h2>
//             <p className="text-[16px] text-[#3d4a3d]">Login to continue your fresh grocery experience.</p>
//           </header>

//           <form className="space-y-6" onSubmit={handleLogin}>
            
//             {/* Email Field */}
//             <div className="space-y-2">
//               <label className="text-[14px] font-medium text-[#3d4a3d] px-1" htmlFor="email">Email Address</label>
//               <div className="flex items-center bg-white/50 border border-[#bccbb9] rounded-xl h-[56px] px-4 transition-all focus-within:ring-4 focus-within:ring-[#00b853]/15 focus-within:border-[#00b853]">
//                 <Mail className="text-[#6d7b6c] mr-3 w-5 h-5" />
//                 <input 
//                   id="email"
//                   type="email" 
//                   placeholder="hello@snapcart.com" 
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value)
//                     if (loginError) setLoginError("")
//                   }}
//                   className="bg-transparent border-none focus:ring-0 w-full text-[#141b2b] text-[16px] placeholder:text-[#bccbb9] outline-none" 
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <div className="flex justify-between items-center px-1">
//                 <label className="text-[14px] font-medium text-[#3d4a3d]" htmlFor="password">Password</label>
//                 <a href="#" className="text-[12px] font-semibold text-[#006e2e] hover:underline transition-all">Forgot password?</a>
//               </div>
//               <div className="flex items-center bg-white/50 border border-[#bccbb9] rounded-xl h-[56px] px-4 transition-all focus-within:ring-4 focus-within:ring-[#00b853]/15 focus-within:border-[#00b853]">
//                 <Lock className="text-[#6d7b6c] mr-3 w-5 h-5" />
//                 <input 
//                   id="password"
//                   type={showPassword ? "text" : "password"} 
//                   placeholder="••••••••" 
//                   value={password}
//                   onChange={(e) => {
//                     setPassword(e.target.value)
//                     if (loginError) setLoginError("")
//                   }}
//                   className="bg-transparent border-none focus:ring-0 w-full text-[#141b2b] text-[16px] placeholder:text-[#bccbb9] outline-none" 
//                 />
//                 <button 
//                   type="button" 
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-[#6d7b6c] hover:text-[#006e2e] transition-colors focus:outline-none"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me */}
//             <div className="flex items-center gap-3 px-1">
//               <input 
//                 type="checkbox" 
//                 id="remember" 
//                 className="w-5 h-5 rounded border-[#bccbb9] text-[#006e2e] focus:ring-[#00b853]/20" 
//               />
//               <label htmlFor="remember" className="text-[14px] font-medium text-[#3d4a3d] cursor-pointer select-none">
//                 Remember me for 30 days
//               </label>
//             </div>

//             {/* CTA Button */}
//             <button 
//               type="submit"
//               disabled={!isFormValid || loading}
//               className={`w-full h-[56px] rounded-full text-white text-[24px] font-semibold flex items-center justify-center gap-2 transform transition-all duration-300 group
//                 ${isFormValid && !loading 
//                   ? "bg-gradient-to-br from-[#00b853] to-[#006e2e] shadow-[0_10px_20px_rgba(0,184,83,0.2)] hover:scale-[1.02] active:scale-95 cursor-pointer" 
//                   : "bg-gray-300 cursor-not-allowed opacity-70"
//                 }
//               `}
//             >
//               {loading ? (
//                 <Loader2 className="w-6 h-6 animate-spin" />
//               ) : (
//                 <>
//                   <span className="text-[18px]">Login</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </>
//               )}
//             </button>
//             {loginError && (
//               <p className="text-sm text-red-600 px-1">{loginError}</p>
//             )}
//           </form>

//           {/* Divider */}
//           <div className="my-10 flex items-center gap-4">
//             <div className="h-[1px] bg-[#bccbb9] flex-grow opacity-50"></div>
//             <span className="text-[12px] font-semibold text-[#6d7b6c] uppercase tracking-widest">OR</span>
//             <div className="h-[1px] bg-[#bccbb9] flex-grow opacity-50"></div>
//           </div>

//           {/* Social Login */}
//           <button 
//             onClick={() => signIn("google", { callbackUrl: "/" })}
//             className="w-full h-[56px] bg-white border border-[#bccbb9] rounded-full flex items-center justify-center gap-3 text-[14px] font-medium text-[#141b2b] hover:bg-[#f1f3ff] transition-colors duration-200"
//           >
//             <Image src={googleImage} width={24} height={24} alt="Google Logo" />
//             <span>Continue with Google</span>
//           </button>

//           {/* Footer Sign Up */}
//           <footer className="mt-10 text-center">
//             <p className="text-[14px] font-medium text-[#3d4a3d]">
//               Want to create an account? 
//               <button 
//                 onClick={() => router.push("/register")} 
//                 className="text-[#006e2e] font-bold hover:underline ml-1 focus:outline-none"
//               >
//                 Sign Up
//               </button>
//             </p>
//           </footer>
//         </motion.div>

//         {/* Global Footer Information */}
//         <div className="absolute bottom-8 text-center w-full px-5 pointer-events-none">
//           <p className="text-[12px] font-semibold text-[#bccbb9]">
//             © 2024 Snapcart. All rights reserved. <span className="mx-2">|</span> Privacy Policy
//           </p>
//         </div>
//       </section>
//     </main>
//   )
// }









'use client'

import React, { FormEvent, useState } from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { 
  ArrowRight, 
  EyeIcon, 
  EyeOff, 
  Loader2, 
  Lock, 
  Mail, 
  ShoppingCart, 
  ShieldCheck, 
  CheckCircle,
  AlertCircle // Added AlertCircle for the error banner
} from 'lucide-react'
import googleImage from "@/assets/google.png"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState("")
  
  const router = useRouter()
  const { data: session } = useSession()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setLoginError("")
    
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      // Check for error FIRST. NextAuth populates this if credentials fail.
      if (res?.error) {
        setLoginError("Invalid email or password.")
        setLoading(false)
        return
      }

      if (res?.ok) {
        router.replace("/"); // or "/dashboard"
      }
    } catch (error) {
      console.log(error)
      setLoginError("Something went wrong. Please try again.")
    } finally {
      // Ensure loading state is turned off if we don't redirect
      setLoading(false)
    }
  }

  // Derived state for button validation
  const isFormValid = email !== "" && password !== ""

  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row items-stretch overflow-x-hidden font-sans bg-[#f9f9ff]">
      
      {/* Left: Hero Image Section (Split-screen Desktop) */}
      <section className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image with Prompt */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            alt="Fresh groceries" 
            className="w-full h-full object-cover scale-105 opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1rxuZHA51NXLmuSInAMEdozKx67AOl-zKS9mdoo5GIPt289tBIko-Lw3OdOhONcBCTiu7rKNU9I0jxT5TUcrUbXaUHg8JPanx0j7Sw9HszMrW2bssqarFNyw8c77ess__NXrBDlTKwHXSMM-tnrIq1Q-fftBLd-uh5tr38kfjoReewVWarfRvo_wuORTfvQwn_9WFBbTO90uL2GuxEhbuhLB9whS2rUwegrWuV63fARvYeaTgxIyWWRir5HlpOqKGScGbbAlv28ak" 
          />
          {/* Dark Green Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#006e2e]/90 via-[#006e2e]/50 to-transparent mix-blend-multiply"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 px-5 md:px-16 text-white w-full">
          <div className="max-w-xl">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[40px] md:text-[64px] font-bold mb-6 leading-[1.1] tracking-[-0.04em] drop-shadow-md"
            >
              Fresh groceries delivered in minutes.
            </motion.h1>

            {/* Floating Badges Cluster */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-12"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <CheckCircle className="text-[#8afa9e] w-5 h-5" />
                <span className="text-[14px] font-medium tracking-[0.01em]">Trusted by 50k+ users</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="text-[#8afa9e] w-5 h-5" />
                <span className="text-[14px] font-medium tracking-[0.01em]">Secure SSL Login</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Identity Anchor (Top Left) */}
        <div className="absolute top-8 left-5 md:left-16 z-20 flex items-center gap-2">
          <ShoppingCart className="text-[#6cfe8f] w-10 h-10" />
          <span className="text-[32px] text-white font-extrabold tracking-tight">Snapcart</span>
        </div>
      </section>

      {/* Right: Login Form Section */}
      <section className="w-full md:w-1/2 bg-[#f1f3ff] flex items-center justify-center p-5 md:p-16 relative overflow-hidden">
        
        {/* Atmospheric backgrounds */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6cfe8f]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bef450]/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* Floating Glassmorphism Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-[24px] border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.04),0_15px_30px_rgba(0,0,0,0.02)] w-full max-w-[480px] rounded-[28px] p-8 md:p-12 relative z-10 transition-all duration-500 hover:shadow-2xl"
        >
          <header className="mb-8">
            <h2 className="text-[32px] font-semibold text-[#141b2b] mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-[16px] text-[#3d4a3d]">Login to continue your fresh grocery experience.</p>
          </header>

          {/* Prominent Error Banner */}
          {loginError && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium text-red-800">{loginError}</p>
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[14px] font-medium text-[#3d4a3d] px-1" htmlFor="email">Email Address</label>
              <div className="flex items-center bg-white/50 border border-[#bccbb9] rounded-xl h-[56px] px-4 transition-all focus-within:ring-4 focus-within:ring-[#00b853]/15 focus-within:border-[#00b853]">
                <Mail className="text-[#6d7b6c] mr-3 w-5 h-5" />
                <input 
                  id="email"
                  type="email" 
                  placeholder="hello@snapcart.com" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (loginError) setLoginError("")
                  }}
                  className="bg-transparent border-none focus:ring-0 w-full text-[#141b2b] text-[16px] placeholder:text-[#bccbb9] outline-none" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[14px] font-medium text-[#3d4a3d]" htmlFor="password">Password</label>
                <a href="#" className="text-[12px] font-semibold text-[#006e2e] hover:underline transition-all">Forgot password?</a>
              </div>
              <div className="flex items-center bg-white/50 border border-[#bccbb9] rounded-xl h-[56px] px-4 transition-all focus-within:ring-4 focus-within:ring-[#00b853]/15 focus-within:border-[#00b853]">
                <Lock className="text-[#6d7b6c] mr-3 w-5 h-5" />
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (loginError) setLoginError("")
                  }}
                  className="bg-transparent border-none focus:ring-0 w-full text-[#141b2b] text-[16px] placeholder:text-[#bccbb9] outline-none" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#6d7b6c] hover:text-[#006e2e] transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 px-1">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-5 h-5 rounded border-[#bccbb9] text-[#006e2e] focus:ring-[#00b853]/20" 
              />
              <label htmlFor="remember" className="text-[14px] font-medium text-[#3d4a3d] cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            {/* CTA Button */}
            <button 
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full h-[56px] rounded-full text-white text-[24px] font-semibold flex items-center justify-center gap-2 transform transition-all duration-300 group
                ${isFormValid && !loading 
                  ? "bg-gradient-to-br from-[#00b853] to-[#006e2e] shadow-[0_10px_20px_rgba(0,184,83,0.2)] hover:scale-[1.02] active:scale-95 cursor-pointer" 
                  : "bg-gray-300 cursor-not-allowed opacity-70"
                }
              `}
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <span className="text-[18px]">Login</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="h-[1px] bg-[#bccbb9] flex-grow opacity-50"></div>
            <span className="text-[12px] font-semibold text-[#6d7b6c] uppercase tracking-widest">OR</span>
            <div className="h-[1px] bg-[#bccbb9] flex-grow opacity-50"></div>
          </div>

          {/* Social Login */}
          <button 
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full h-[56px] bg-white border border-[#bccbb9] rounded-full flex items-center justify-center gap-3 text-[14px] font-medium text-[#141b2b] hover:bg-[#f1f3ff] transition-colors duration-200"
          >
            <Image src={googleImage} width={24} height={24} alt="Google Logo" />
            <span>Continue with Google</span>
          </button>

          {/* Footer Sign Up */}
          <footer className="mt-10 text-center">
            <p className="text-[14px] font-medium text-[#3d4a3d]">
              Want to create an account? 
              <button 
                onClick={() => router.push("/register")} 
                className="text-[#006e2e] font-bold hover:underline ml-1 focus:outline-none"
              >
                Sign Up
              </button>
            </p>
          </footer>
        </motion.div>

        {/* Global Footer Information */}
        <div className="absolute bottom-8 text-center w-full px-5 pointer-events-none">
          <p className="text-[12px] font-semibold text-[#bccbb9]">
            © 2024 Snapcart. All rights reserved. <span className="mx-2">|</span> Privacy Policy
          </p>
        </div>
      </section>
    </main>
  )
}