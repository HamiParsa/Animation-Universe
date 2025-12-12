"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AnimationUniversePage() {
  const [showModal, setShowModal] = useState(false);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  // Replace these arrays with your own image URLs
  const showcaseImages = [
    "https://wallpapercave.com/wp/wp6674867.jpg",
    "https://wallpapercave.com/wp/wp2383818.jpg",
    "https://wallpapercave.com/wp/wp6955438.jpg",
    "https://wallpapercave.com/wp/wp5305145.jpg",
    "https://wallpapercave.com/wp/wp6674871.jpg",
    "https://wallpapercave.com/wp/wp6675000.jpg",
  ];

  const galleryImages = [
    "https://wallpapercave.com/wp/wp6675059.jpg",
    "https://wallpapercave.com/wp/wp6675067.jpg",
    "https://wallpapercave.com/wp/wp5188385.jpg",
    "https://wallpapercave.com/wp/wp4881601.jpg",
    "https://wallpapercave.com/wp/wp6955676.jpg",
    "https://wallpapercave.com/wp/wp5305156.jpg",
    "https://wallpapercave.com/uwp/uwp4935915.jpeg",
    "https://wallpapercave.com/wp/wp11310817.jpg",
    "https://wallpapercave.com/wp/wp13987236.jpg",
    "https://wallpapercave.com/wp/wp6965160.jpg",
    "https://wallpapercave.com/wp/wp6965194.jpg",
    "https://wallpapercave.com/wp/wp4124962.jpg",
  ];

  const techniques = [
    {
      title: "Horimiya",
      desc: "Tips and workflow for creating smooth 2D hand-drawn animation with expressive character movements.",
      img: "https://wallpapercave.com/wp/wp6983138.png",
    },
    {
      title: "Your Name",
      desc: "Guidelines for stop-motion animation, focusing on frame-by-frame precision and storytelling.",
      img: "https://wallpapercave.com/wp/wp1937324.png",
    },
    {
      title: "I Want To Eat Your Pancreas",
      desc: "Insights into 3D CGI animation, including modeling, lighting, and rendering techniques.",
      img: "https://wallpapercave.com/wp/wp4089703.jpg",
    },
    {
      title: "Re:Zero",
      desc: "Workflow tips for motion graphics, emphasizing dynamic visuals and fluid effects.",
      img: "https://wallpapercave.com/wp/wp1860713.jpg",
    },
    {
      title: "Classroom Of The Elite",
      desc: "Best practices for compositing, combining layers and effects for a polished final scene.",
      img: "https://wallpapercave.com/wp/wp3719790.jpg",
    },
    {
      title: "Lycoris Recoil",
      desc: "Techniques for real-time rendering, optimizing performance while maintaining visual fidelity.",
      img: "https://wallpapercave.com/wp/wp11310906.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      document.documentElement.style.setProperty("--scrollY", String(offset));
      document.querySelectorAll(".particle").forEach((p, i) => {
        const speed = 0.2 + (i % 5) * 0.15;
        (p as HTMLElement).style.transform = `translateY(${
          offset * speed
        }px) translateX(${Math.sin(offset * 0.001 + i) * 20}px)`;
      });
      document.querySelectorAll(".parallax-layer").forEach((layer, i) => {
        const speed = 0.05 + (i % 3) * 0.05;
        (layer as HTMLElement).style.transform = `translateY(${
          offset * speed
        }px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen w-full bg-black text-white font-sans overflow-x-hidden selection:bg-pink-600 selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl backdrop-blur-3xl rounded-3xl bg-white/10 border border-white/10 py-4 px-8 flex items-center justify-between shadow-xl flex-wrap">
        <div className="text-2xl font-bold text-white mb-2 md:mb-0">
          Animation Universe
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={parallaxRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-b from-purple-900 via-black to-black opacity-90" />

        <div className="parallax-layer absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-[0_10px_40px_rgba(255,0,180,0.5)]"
          >
            Enter the Animation Universe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-xl md:text-3xl text-gray-200"
          >
            A cinematic journey into frames, colors, and motion.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 px-8 py-4 bg-linear-to-r from-pink-500 to-purple-600 text-black font-bold rounded-xl hover:scale-110 transition-all"
          >
            Explore Now
          </motion.button>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-32 px-6 bg-black">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:scale-105 transition-all"
            >
              <Image
                width={1000}
                height={1000}
                src={src}
                alt={`Showcase ${i}`}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Masterpiece #{i + 1}
                </h3>
                <p className="text-gray-300 text-sm">
                  Cinematic breakdown, techniques, and frame analysis.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-32 px-6 bg-black">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Animation Timeline
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-pink-500/50"></div>

          {techniques.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`mb-12 flex items-center w-full ${
                i % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Dot */}
              <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white/30 z-10"></div>

              {/* Content */}
              <div
                className={`bg-white/10 border border-white/10 rounded-2xl p-6 w-5/12 ml-6 ${
                  i % 2 === 0 ? "text-right mr-6" : "text-left ml-6"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-300 text-sm">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Techniques Section */}
      <section id="tech" className="py-32 px-6 bg-black">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {techniques.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg hover:scale-105 transition-all"
            >
              <Image
                width={1000}
                height={1000}
                src={tech.img}
                alt={tech.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-300 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 bg-black">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-all"
            >
              <Image
                width={1000}
                height={1000}
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-[90%] max-w-2xl bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Explore the Universe
              </h3>
              <p className="text-gray-200 mb-6">
                Navigate through cinematic frames and techniques of animation.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-pink-500 text-black font-semibold rounded-lg hover:scale-105 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Animation Universe — A cinematic
          playground for motion artists.
        </p>
      </footer>
    </main>
  );
}
