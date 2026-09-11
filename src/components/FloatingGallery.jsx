import React from 'react';
import { motion } from 'framer-motion';

const FloatingGallery = () => {
    // تعديل النصوص والتأاريخ لتناسب الصداقة العميقة
    const photoData = [
        { id: 1, img: "1.jpg", text: "أجدع وأحن أخت وصاحبة في الدنيا 👭❤️", date: "Bestie" },
        { id: 2, img: "2.jpg", text: "كل لحظة معاكي بتكون مليانة ضحك وراحة بال 💖", date: "Always" },
        { id: 3, img: "3.jpg", text: "ربنا يديمك في حياتي وما يحرمنا من بعض أبداً ✨", date: "Forever" },
        { id: 4, img: "4.jpg", text: "حياتي بوجودك أحلى وأبسط بكثير يا روحي 🌸", date: "Memories" },
    ];

    return (
        <section className="relative min-h-screen w-full bg-[#3d0026] flex flex-col items-center justify-center py-16 px-4 overflow-hidden font-sans select-none dir-rtl text-white">

            {/* 1. خلفية القلوب والقلوب المتلألئة المتطايرة للأعلى */}
            <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, i) => {
                    const duration = Math.random() * 5 + 4;
                    const delay = Math.random() * 5;
                    const size = Math.random() * 20 + 12;
                    const left = Math.random() * 100;
                    const icons = ["💖", "✨", "💕", "🌸"];
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
                <div className="text-4xl mb-2">👭✨</div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-wide">
                    حكايتنا وأحلى ذكرياتنا سوا
                </h2>
                <p className="text-pink-200/90 text-xs md:text-sm font-medium">
                    مكان صغير بنسجل فيه أجمل الأوقات اللي عشناها مع بعض 💖
                </p>
            </motion.div>

            {/* 3. شبكة صور الذكريات بنمط Bento Glassmorphism */}
            <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10 px-2">
                {photoData.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group relative"
                    >
                        {/* إطار الصورة الزجاجي الشفاف */}
                        <div className="relative bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-2xl border border-white/15 rounded-[2.5rem] p-3 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-500">

                            {/* حاوية الصورة */}
                            <div className="relative overflow-hidden rounded-[2rem] h-72 w-full">
                                <img
                                    src={photo.img}
                                    alt="Moment"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* تظليل خفيف فوق الصورة */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                                {/* كلمة أو تاريخ عائم */}
                                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                                    <span className="text-pink-200 text-[10px] font-mono tracking-widest uppercase">
                                        {photo.date}
                                    </span>
                                </div>
                            </div>

                            {/* النص تحت الصورة */}
                            <div className="mt-4 mb-2 px-2 text-center">
                                <p className="text-white font-bold text-base leading-relaxed group-hover:text-pink-200 transition-colors duration-300">
                                    {photo.text}
                                </p>
                                <div className="h-0.5 w-8 bg-pink-400/40 mx-auto mt-2 rounded-full group-hover:w-16 transition-all duration-500" />
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default FloatingGallery;