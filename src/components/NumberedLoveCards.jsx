import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BestiesTimer = () => {
  // 🎯 قم بتعديل تاريخ بداية الصداقة هنا بفرمتة (YYYY-MM-DD)
  const START_DATE_STRING = '2026-05-05';

  // تحويل النص إلى كائن Date للحسابات
  const startDate = new Date(`${START_DATE_STRING}T00:00:00`);

  // تنسيق التاريخ للعرض النصي (DD-MM-YYYY)
  const formattedDate = START_DATE_STRING.split('-').reverse().join('-');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [START_DATE_STRING]);

  // إيموجيات بناتي ولطيفة
  const floatingIcons = ['💖', '🌸', '✨', '🎀', '💌', '👭', '🌷', '🦋'];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-pink-950 via-rose-900 to-purple-950 flex flex-col items-center justify-center overflow-hidden font-sans select-none p-4 dir-rtl text-white">
      
      {/* 1. خلفية الرموز المتطايرة للأعلى */}
      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const duration = Math.random() * 6 + 4;
          const delay = Math.random() * 5;
          const size = Math.random() * 18 + 14;
          const left = Math.random() * 100;
          const icon = floatingIcons[i % floatingIcons.length];

          return (
            <motion.div
              key={i}
              initial={{ y: "100vh", opacity: 0, rotate: 0 }}
              animate={{ y: "-10vh", opacity: [0, 1, 1, 0], rotate: 360 }}
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

      {/* 2. العنوان الرئيسي الشخصي */}
      <div className="z-10 flex flex-col items-center gap-1 mb-6 text-center">
        <div className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold tracking-wide text-rose-200">
          <span>💖</span>
          <h2>أحلى وأغلى صاحبة في الدنيا</h2>
          <span>✨</span>
        </div>
        <p className="text-xs md:text-sm text-pink-200/80 font-medium mt-1">
          عارفة بقالنا أد إيه بنشارك بعض كل حاجة؟ 👭💌
        </p>
      </div>

      {/* 3. كارت العداد الرئيسي */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[460px] bg-white/10 backdrop-blur-2xl border border-pink-300/30 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 md:p-8 flex flex-col items-center gap-6"
      >
        {/* تاريخ البداية العلوي */}
        <div className="text-xs md:text-sm font-bold text-pink-100 tracking-wider flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-pink-200/20 shadow-sm">
          <span>🎀</span>
          <span>سوا وعقال ومجانين من {formattedDate}</span>
          <span>🌸</span>
        </div>

        {/* المربعات الأربعة للعداد */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
          
          {/* يوم */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <span className="text-xl sm:text-2xl font-black text-white">
              {timeLeft.days}
            </span>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              يوم
            </span>
          </div>

          {/* ساعة */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <span className="text-xl sm:text-2xl font-black text-white">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              ساعة
            </span>
          </div>

          {/* دقيقة */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <span className="text-xl sm:text-2xl font-black text-white">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              دقيقة
            </span>
          </div>

          {/* ثانية مع الحركة */}
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 h-20 sm:h-24 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft.seconds}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl sm:text-2xl font-black text-white"
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
            <span className="text-[11px] sm:text-xs text-pink-200 mt-1 font-medium">
              ثانية
            </span>
          </div>

        </div>

        {/* النص السفلي للكارت - رسالة من القلب */}
        <div className="text-xs sm:text-sm font-semibold text-pink-100 flex flex-col items-center gap-2 text-center bg-pink-500/10 p-3 rounded-2xl border border-pink-300/20 w-full">
          <p className="leading-relaxed">
            يديمك ليا يا أختي وسندي وأخت قلبي ❤️
            <br />
            ربنا ما يحرمنا من بعض ولا من ضحكتنا سوا يا روح قلبي! 👭✨
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default BestiesTimer;