'use client';

import { Play, Eye, Volume2, Maximize } from 'lucide-react';
import Image from 'next/image';

const VideoShowcase = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 40px 10px var(--color-accent-teal);
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
      <section className="py-28 relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-teal-200 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
              See Our <span className="text-accent-teal">Solutions</span> in Action
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Watch how we transform wastewater into clean, reusable water for industries across India
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto group cursor-pointer animate-fade-in-up delay-300 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03e35456-c097-4642-82ca-d49af5b77be0-wink-shade-59488103-figma-site/assets/images/images_2.jpg"
                alt="Water Treatment Plant Video"
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-black/50"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative transform group-hover:scale-110 transition-all duration-500">
                  <div className="absolute -inset-4 rounded-full bg-accent-teal/30 animate-pulse"></div>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-glow transition-all duration-500">
                     <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"><div className="animate-shimmer w-full h-full"></div></div>
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white relative z-10 ml-2" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button className="px-6 py-2.5 bg-accent-teal text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Watch
                    </button>
                    <div className="w-32 h-1.5 rounded-full bg-white/20 overflow-hidden"><div className="h-full bg-accent-teal rounded-full w-[25%]"></div></div>
                  </div>
                  <div className="hidden md:flex items-center gap-4">
                     <button className="p-3 rounded-lg text-white_bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"><Volume2 className="w-5 h-5 text-white" /></button>
                    <button className="p-3 rounded-lg text-white_bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"><Maximize className="w-5 h-5 text-white" /></button>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-xl text-white font-semibold">3:45</div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-dark mb-2">Complete Water Treatment Process</h3>
                  <p className="text-text-gray">From raw wastewater to clean, reusable water - see our end-to-end solutions</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl">
                  <Eye className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">1.2k+ views</span>
                </div>
              </div>
            </div>
             <div className="absolute top-0 left-0 w-32 h-32 bg-accent-teal/10 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in-up delay-500">
            <div className="px-6 py-3 bg-teal-100 text-teal-700 rounded-full font-semibold hover:bg-accent-teal hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">100% PCB Compliant</div>
            <div className="px-6 py-3 bg-teal-100 text-teal-700 rounded-full font-semibold hover:bg-accent-teal hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">Save Up to 70% Water</div>
            <div className="px-6 py-3 bg-teal-100 text-teal-700 rounded-full font-semibold hover:bg-accent-teal hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">Reduce Operating Costs</div>
            <div className="px-6 py-3 bg-teal-100 text-teal-700 rounded-full font-semibold hover:bg-accent-teal hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">Expert Installation</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoShowcase;