// import { ArrowLeft, EyeIcon, EyeOff, Key, Leaf, Loader2, Lock, LogIn, Mail, User } from 'lucide-react'
// import React, { useState } from 'react'
// import {motion} from "motion/react"
// import Image from 'next/image'
// import googleImage from "@/assets/google.png"
// import axios from 'axios'
// import { useRouter } from 'next/navigation'
// import { signIn } from 'next-auth/react'
// type propType={
// previousStep:(s:number)=>void
// }
// function RegisterForm({previousStep}:propType) {
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const [showPassword,setShowPassword]=useState(false)
//     const [loading,setLoading]=useState(false)
//     const router= useRouter()
//     const handleRegister=async (e:React.FormEvent)=>{
//         e.preventDefault()
//         setLoading(true)
//         try {
//             const result=await axios.post("/api/auth/register",{
//                 name,email,password
//             })
//             router.push("/login")
//             setLoading(false)
//         } catch (error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
//       <div className='absolute top-6 left-6 flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors cursor-pointer '
//       onClick={()=>previousStep(1)}
//       >
//         <ArrowLeft className='w-5 h-5'/>
//         <span className='font-medium'>Back</span>
//       </div>
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
//        className='text-4xl font-extrabold text-green-700 mb-2'>Create Account</motion.h1>
//        <p className='text-gray-600 mb-8 flex items-center'>Join Snapcart today <Leaf className='w-5 h-5 text-green-600'/></p>
//        <motion.form
//        onSubmit={handleRegister}
//        initial={{
//         opacity:0
//       }}
//       animate={{
//         opacity:1
//       }}
//       transition={{
//         duration:0.6
//       }} className='flex flex-col gap-5 w-full max-w-sm'>

//        <div className='relative'>
//         <User className='absolute left-3 top-3.5 w-5 h-5 text-gray-400'/>
//         <input type="text" placeholder='Your Name' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none'
//         onChange={(e)=>setName(e.target.value)}
//         value={name}
//         />
//         </div> 
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
//     const formValidation=name!=="" && email!=="" && password!==""
//         return <button disabled={!formValidation || loading} className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${
//                     formValidation 
//                       ? "bg-green-600 hover:bg-green-700 text-white"
//                       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   }`}>
// {loading?<Loader2 className='w-5 h-5 animate-spin'/>:"Register"}
            
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

//        <p className='cursor-pointer text-gray-600 mt-6 text-sm flex items-center gap-1' onClick={()=>router.push("/login")}>Already have an account ? <LogIn className='w-4 h-4'/> <span className='text-green-600'> Sign in</span></p>
//     </div>
//   )
// }

// export default RegisterForm




'use client'
import { ArrowLeft, EyeIcon, EyeOff, Loader2, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import googleImage from "@/assets/google.png"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

type propType = {
    previousStep: (s: number) => void
}

function RegisterForm({ previousStep }: propType) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const router = useRouter()

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return
        }
        setLoading(true)
        try {
            const result = await axios.post("/api/auth/register", {
                name, email, password
            })
            router.push("/login")
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // Password Strength Calculator
    const getStrength = (val: string) => {
        let s = 0;
        if (val.length >= 8) s += 25;
        if (/[A-Z]/.test(val)) s += 25;
        if (/[0-9]/.test(val)) s += 25;
        if (/[^A-Za-z0-9]/.test(val)) s += 25;
        return s;
    }

    const strength = getStrength(password);
    let strengthText = 'Security Level';
    let strengthColor = 'bg-[#e9edff]'; // Default surface-container
    let strengthTextColor = 'text-[#3d4a3d]';

    if (password.length > 0) {
        if (strength <= 25) {
            strengthText = 'Weak Password';
            strengthColor = 'bg-[#ba1a1a]'; // Error
            strengthTextColor = 'text-[#ba1a1a]';
        } else if (strength <= 50) {
            strengthText = 'Fairly Secure';
            strengthColor = 'bg-[#4a6800]'; // Tertiary
            strengthTextColor = 'text-[#4a6800]';
        } else if (strength <= 75) {
            strengthText = 'Good Security';
            strengthColor = 'bg-[#00b853]'; // Primary Container
            strengthTextColor = 'text-[#00b853]';
        } else {
            strengthText = 'Strong Password';
            strengthColor = 'bg-[#006e2e]'; // Primary
            strengthTextColor = 'text-[#006e2e] font-bold';
        }
    }

    const formValidation = name !== "" && email !== "" && password !== "" && password === confirmPassword && termsAccepted

    return (
        <main className="min-h-screen flex flex-col md:flex-row bg-[#f9f9ff] overflow-x-hidden selection:bg-[#00b853] selection:text-white font-sans">
            
            {/* Left: Hero Section (Split-screen Desktop) */}
            <section className="hidden md:flex relative w-1/2 min-h-screen items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        alt="Fresh organic produce in a rustic wooden crate" 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1rxuZHA51NXLmuSInAMEdozKx67AOl-zKS9mdoo5GIPt289tBIko-Lw3OdOhONcBCTiu7rKNU9I0jxT5TUcrUbXaUHg8JPanx0j7Sw9HszMrW2bssqarFNyw8c77ess__NXrBDlTKwHXSMM-tnrIq1Q-fftBLd-uh5tr38kfjoReewVWarfRvo_wuORTfvQwn_9WFBbTO90uL2GuxEhbuhLB9whS2rUwegrWuV63fARvYeaTgxIyWWRir5HlpOqKGScGbbAlv28ak" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#006e2e]/80 to-[#004018]/40"></div>
                </div>
                
                <div className="relative z-10 px-[64px] space-y-[48px] max-w-xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[64px] leading-[1.1] tracking-[-0.04em] font-bold text-white"
                    >
                        Join the community of 50k+ happy users.
                    </motion.h1>
                    
                    {/* Floating Testimonial Card */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-white/70 backdrop-blur-[20px] border border-white/40 shadow-[0_40px_40px_rgba(0,0,0,0.04),0_15px_15px_rgba(0,0,0,0.06)] p-6 rounded-[28px] inline-flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#00b853]">
                            <img 
                                alt="Sarah J." 
                                className="w-full h-full object-cover" 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdubRP2rgFQgmuQxHXmME7_aAJEG0J7ASka4LBE8_T2j0l4Uh3nUJZv6neTw0kAX1BJrYfz3khdC5oCIQerQMpZuW_W5F1JvAj4F0gHJOVbZ0nU82v4FwmNR7ktjrrqgNrSCkkhldIt7pgh4mfIDBU7-5W6n6PyNMOD9xWjHHRsn-fwmZoKSVAcWdf5zNEnn4tXMlmKqaFx1VznzT5EKlIIFC9i7_vU4dvmYGO6QKEtvxTVHXyJNnpzZMdR4LTtObK5iDYhoLNPQgY" 
                            />
                        </div>
                        <div>
                            <p className="text-[16px] leading-[1.6] text-[#141b2b] italic">"The freshest produce I've ever ordered!"</p>
                            <p className="text-[12px] leading-[1] font-semibold text-[#006e2e] mt-1">— Sarah J.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mobile Hero (Simplified) */}
            <div className="md:hidden w-full h-48 relative">
                <img alt="Hero" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1rxuZHA51NXLmuSInAMEdozKx67AOl-zKS9mdoo5GIPt289tBIko-Lw3OdOhONcBCTiu7rKNU9I0jxT5TUcrUbXaUHg8JPanx0j7Sw9HszMrW2bssqarFNyw8c77ess__NXrBDlTKwHXSMM-tnrIq1Q-fftBLd-uh5tr38kfjoReewVWarfRvo_wuORTfvQwn_9WFBbTO90uL2GuxEhbuhLB9whS2rUwegrWuV63fARvYeaTgxIyWWRir5HlpOqKGScGbbAlv28ak" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f9f9ff] to-transparent"></div>
            </div>

            {/* Right: Registration Form */}
            <section className="flex-1 flex items-center justify-center px-[20px] md:px-[64px] py-[48px] relative">
                
                {/* Back Button */}
                <div 
                    className='absolute top-6 left-6 flex items-center gap-2 text-[#006e2e] hover:text-[#00b853] transition-colors cursor-pointer z-20'
                    onClick={() => previousStep(1)}
                >
                    <ArrowLeft className='w-5 h-5' />
                    <span className='font-medium text-[14px]'>Back</span>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-[540px] bg-white/70 backdrop-blur-[20px] border border-white/40 shadow-[0_40px_40px_rgba(0,0,0,0.04),0_15px_15px_rgba(0,0,0,0.06)] p-8 md:p-12 rounded-[28px] relative z-10"
                >
                    <div className="space-y-[12px] mb-[48px]">
                        <h2 className="text-[40px] md:text-[32px] leading-[1.2] md:leading-[1.3] tracking-[-0.03em] md:tracking-[-0.02em] font-semibold text-[#141b2b]">
                            Create Your Account
                        </h2>
                        <p className="text-[16px] leading-[1.6] text-[#3d4a3d]">Join Snapcart and get groceries delivered instantly.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleRegister}>
                        {/* Name Field */}
                        <div className="space-y-2 group">
                            <label className="text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#3d4a3d] ml-2">Full Name</label>
                            <div className="relative rounded-xl overflow-hidden group-focus-within:shadow-[0_0_0_4px_rgba(0,110,46,0.15)] transition-shadow">
                                <input 
                                    type="text" 
                                    placeholder="Enter your full name" 
                                    className="w-full h-[56px] px-6 bg-white/50 border border-[#bccbb9] focus:border-[#006e2e] focus:ring-0 outline-none transition-colors rounded-xl text-[16px]"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2 group">
                            <label className="text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#3d4a3d] ml-2">Email</label>
                            <div className="relative rounded-xl overflow-hidden group-focus-within:shadow-[0_0_0_4px_rgba(0,110,46,0.15)] transition-shadow">
                                <input 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    className="w-full h-[56px] px-6 bg-white/50 border border-[#bccbb9] focus:border-[#006e2e] focus:ring-0 outline-none transition-colors rounded-xl text-[16px]"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password with Strength Indicator */}
                        <div className="space-y-2 group">
                            <label className="text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#3d4a3d] ml-2">Password</label>
                            <div className="relative rounded-xl overflow-hidden group-focus-within:shadow-[0_0_0_4px_rgba(0,110,46,0.15)] transition-shadow">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Minimum 8 characters" 
                                    className="w-full h-[56px] pl-6 pr-12 bg-white/50 border border-[#bccbb9] focus:border-[#006e2e] focus:ring-0 outline-none transition-colors rounded-xl text-[16px]"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                {showPassword ? (
                                    <EyeOff 
                                        className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3d4a3d] cursor-pointer hover:text-[#006e2e] transition-colors' 
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <EyeIcon 
                                        className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3d4a3d] cursor-pointer hover:text-[#006e2e] transition-colors' 
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            
                            {/* Strength Bar */}
                            <div className="px-2 pt-2">
                                <div className="flex gap-1 h-1 w-full bg-[#e9edff] rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full transition-all duration-500 rounded-full ${strengthColor}`} 
                                        style={{ width: password.length === 0 ? '0%' : `${strength}%` }}
                                    ></div>
                                </div>
                                <span className={`text-[11px] leading-[1] font-semibold mt-1 block ${strengthTextColor} transition-colors`}>
                                    {strengthText}
                                </span>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2 group">
                            <label className="text-[14px] leading-[1] tracking-[0.01em] font-medium text-[#3d4a3d] ml-2">Confirm Password</label>
                            <div className="relative rounded-xl overflow-hidden group-focus-within:shadow-[0_0_0_4px_rgba(0,110,46,0.15)] transition-shadow">
                                <input 
                                    type="password" 
                                    placeholder="Repeat your password" 
                                    className={`w-full h-[56px] px-6 bg-white/50 border focus:ring-0 outline-none transition-colors rounded-xl text-[16px] ${password && confirmPassword && password !== confirmPassword ? 'border-[#ba1a1a] focus:border-[#ba1a1a]' : 'border-[#bccbb9] focus:border-[#006e2e]'}`}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                    required
                                />
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-3 px-2">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                className="mt-1 w-5 h-5 rounded border-[#6d7b6c] text-[#006e2e] focus:ring-[#00b853] cursor-pointer"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                required 
                            />
                            <label htmlFor="terms" className="text-[16px] leading-[1.6] text-[#3d4a3d] cursor-pointer">
                                I agree to the <span className="text-[#006e2e] font-bold hover:underline">Terms & Conditions</span>
                            </label>
                        </div>

                        {/* CTA Button */}
                        <button 
                            disabled={!formValidation || loading}
                            type="submit" 
                            className="w-full h-[56px] rounded-full font-bold text-[18px] flex items-center justify-center group transition-all duration-300 bg-[linear-gradient(135deg,#00b853_0%,#006e2e_100%)] text-white shadow-[0_10px_20px_rgba(0,184,83,0.2)] hover:scale-[1.02] hover:shadow-[0_15px_25px_rgba(0,184,83,0.3)] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className='w-6 h-6 animate-spin' /> : (
                                <>
                                    Create Account
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4 py-2">
                            <div className="flex-1 h-px bg-[#bccbb9]/30"></div>
                            <span className="text-[12px] leading-[1] font-semibold text-[#3d4a3d] uppercase tracking-widest">OR</span>
                            <div className="flex-1 h-px bg-[#bccbb9]/30"></div>
                        </div>

                        {/* Social Login */}
                        <button 
                            type="button" 
                            onClick={() => signIn("google", { callbackUrl: "/" })}
                            className="w-full h-[56px] rounded-full border border-[#bccbb9] bg-white/40 backdrop-blur-sm flex items-center justify-center gap-3 font-semibold text-[#141b2b] hover:bg-white/60 transition-colors text-[16px]"
                        >
                            <Image src={googleImage} width={24} height={24} alt='Google' />
                            Continue with Google
                        </button>
                    </form>

                    {/* Footer Sign In */}
                    <p className="mt-8 text-center text-[16px] leading-[1.6] text-[#3d4a3d]">
                        Already have an account? 
                        <span 
                            className="text-[#006e2e] font-bold ml-1 hover:underline cursor-pointer"
                            onClick={() => router.push("/login")}
                        >
                            Sign In
                        </span>
                    </p>
                </motion.div>
            </section>
        </main>
    )
}

export default RegisterForm