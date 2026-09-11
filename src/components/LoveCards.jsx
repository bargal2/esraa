import React, { useState } from 'react';
import { motion } from 'framer-motion';

// تعديل البيانات لتناسب كلام الصحاب والجدعنة
const cardsData = [
  { id: 1, frontIcon: "👯‍♀️", text: "يا أختي وصاحبتي", backContent: "ربنا يخليكي ليا وما يحرمونيش من وجودك في حياتي يا أجدع أخت!" },
  { id: 2, frontIcon: "🌸", text: "سر ضحكتي", backContent: "القعدة معاكي بتهون عليا أي يوم صعب.. ضحكتنا سوا بالدنيا وما فيها!" },
  { id: 3, frontIcon: "💖", text: "بيت أسراري", backContent: "انتي الشخص الوحيد اللي بفهمه من غير ما يتكلم.. دايماً في ضهري وركزي معايا للآخر!" },
];

const BestieCards = () => {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] flex flex-col items-center justify-center py-16 px-4 overflow-hidden font-sans select-none dir-rtl text-white">

      {/* 1. خلفية القلوب والقلوب المتطايرة للأعلى */}
      <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const duration = Math.random() * 5 + 4;
          const delay = Math.random() * 5;
          const size = Math.random() * 20 + 12;
          const left = Math.random() * 100;
          const icons = ["✨", "💖", "🌸", "👑"];
          const randomIcon = icons[i % icons.length];

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
              {randomIcon}
            </motion.div>
          );
        })}
      </div>

      {/* 2. العنوان الرئيسي */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center mb-10 px-4"
      >
        <div className="text-4xl mb-2">👭💗</div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-wide drop-shadow-md">
          رسائل لـ "أنتيمتي"
        </h2>
        <p className="text-white/90 text-xs md:text-sm font-medium">
          كل كارت وراه كلمة من قلبي ليكي.. ادوسي واكتشفي بنفسك 😉✨
        </p>
      </motion.div>

      {/* 3. شبكة كروت الصداقة */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-2">
        {cardsData.map((card, index) => (
          <BestieCard key={card.id} card={card} index={index} />
        ))}
      </div>

    </section>
  );
};

const BestieCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative h-80 w-full cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ scale: 1.03 }}
      >
        {/* الواجهة الأمامية */}
        <div
          className="absolute inset-0 w-full h-full bg-white/20 backdrop-blur-xl border border-white/40 rounded-[2.5rem] flex flex-col items-center justify-center p-6 shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-6xl mb-4 drop-shadow-md"
          >
            {card.frontIcon}
          </motion.div>

          <h3 className="text-2xl font-black text-white mb-2">{card.text}</h3>
          <div className="h-1 w-12 bg-white/60 my-2 rounded-full" />

          <span className="mt-3 text-[11px] text-white/90 font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full border border-white/30">
            اضغطي لشوف الكلام 💌
          </span>
        </div>

        {/* الواجهة الخلفية */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#8a2387] via-[#e94057] to-[#f27121] border border-white/30 rounded-[2.5rem] flex flex-col items-center justify-center p-6 shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="text-base md:text-lg font-bold text-white text-center leading-relaxed drop-shadow-sm mb-4">
            {card.backContent}
          </p>

          <span className="text-xs font-semibold text-pink-200 bg-black/20 px-4 py-1.5 rounded-full">
            💖 يدوم وجودك يا بسكوتة 💖
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default BestieCards;