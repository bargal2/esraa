import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BestieGate = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const correctPassword = "esraa"; // كلمة المرور

    // حساب عدد الأيام منذ بداية الصداقة (05 مايو 2026)
    const startDate = new Date('2026-05-05');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.trim() === correctPassword) {
            setError(false);
            if (onUnlock) onUnlock();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    // عناصر الخصائص المتطايرة (قلوب، نجوم، فراشات)
    const floatingIcons = ['💖', '✨', '🌸', '🦋', '💕'];

    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-[#2e003e] via-[#4a1259] to-[#2d0b36] flex flex-col items-center justify-between overflow-hidden font-sans select-none py-8 px-4 text-white dir-rtl">

            {/* 1. خلفية العناصر المتطايرة (قلوب، نجوم، فراشات) */}
            <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, i) => {
                    const duration = Math.random() * 5 + 4;
                    const delay = Math.random() * 5;
                    const size = Math.random() * 18 + 14;
                    const left = Math.random() * 100;
                    const icon = floatingIcons[i % floatingIcons.length];

                    return (
                        <motion.div
                            key={i}
                            initial={{ y: "100vh", opacity: 0 }}
                            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "linear",
                            }}
                            className="absolute"
                            style={{
                                left: `${left}%`,
                                fontSize: `${size}px`,
                            }}
                        >
                            {icon}
                        </motion.div>
                    );
                })}
            </div>

            {/* 2. شريط التواريخ وعداد أيام الصداقة */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 w-full max-w-sm flex flex-col gap-2 text-center"
            >
                <div className="bg-white/10 backdrop-blur-md border border-purple-300/20 rounded-2xl py-2 px-4 shadow-lg flex justify-center items-center text-xs">
                    <div>
                        <p className="text-pink-300 font-bold">بداية صحوبيتنا الجميلة 👭✨</p>
                        <p className="text-purple-200 font-mono">05 / 05 / 2026</p>
                    </div>
                </div>

                {/* عداد الأيام */}
                <div className="bg-purple-900/40 backdrop-blur-md border border-pink-300/20 rounded-full py-1.5 px-4 text-center">
                    <p className="text-pink-100 text-xs font-medium">
                        أحلى أصحاب بقالنا <span className="text-pink-300 font-extrabold font-mono text-sm">{diffDays}</span> يوم سوا 💖
                    </p>
                </div>
            </motion.div>

            {/* 3. الحاوية الرئيسية والتصميم الداخلي */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[420px] aspect-square flex items-center justify-center z-10 my-auto"
            >
                {/* خلفية القلب بالتدرج البنفسجي الوردي */}
                <svg
                    viewBox="0 0 500 500"
                    className="absolute inset-0 w-full h-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
                >
                    <defs>
                        <linearGradient id="bestieHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#831843" />
                            <stop offset="50%" stopColor="#701a75" />
                            <stop offset="100%" stopColor="#4c1d95" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M250,440 C120,340 40,260 40,165 C40,95 95,40 165,40 C205,40 235,60 250,85 C265,60 295,40 335,40 C405,40 460,95 460,165 C460,260 380,340 250,440 Z"
                        fill="url(#bestieHeartGrad)"
                    />
                </svg>

                {/* المحتوى الداخلي فوق القلب */}
                <div className="relative z-10 flex flex-col items-center justify-center w-[75%] max-w-[260px] -mt-2 text-center">

                    {/* صورة الأصحاب */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-pink-400 to-purple-400 shadow-lg mb-2 overflow-hidden flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400"
                            alt="Best Friends"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    {/* النصوص */}
                    <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow">
                        Besties Gate
                    </h1>
                    <p className="text-[11px] text-pink-200/90 flex items-center justify-center gap-1 font-medium mb-3">
                        🌸 أجدع أخت وصاحبة 🌸
                    </p>

                    {/* نموذج إدخال كلمة المرور */}
                    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-2">

                        {/* حقل الإدخال */}
                        <div className="relative w-full">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="كلمة السر يا سكر..."
                                className="w-full h-10 px-4 text-center text-white bg-black/30 rounded-xl border border-pink-300/30 focus:outline-none focus:border-pink-300 placeholder:text-white/50 font-medium text-sm transition-all backdrop-blur-sm"
                                autoFocus
                            />
                        </div>

                        {/* زر الدخول */}
                        <button
                            type="submit"
                            className="w-full h-10 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            ✨ دخول لعالمنا الكيوت ✨
                        </button>
                    </form>

                    {/* رسالة الخطأ */}
                    {error && (
                        <p className="text-xs text-pink-300 font-bold animate-bounce mt-2 absolute -bottom-6">
                            كلمة السر غلط يا أختي! 🙈
                        </p>
                    )}

                </div>
            </motion.div>

        </div>
    );
};

export default BestieGate;