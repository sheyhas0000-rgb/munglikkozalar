import React, { useState } from 'react';
import { ALL_GALLERY_IMAGES } from '../data/generatedImages';
import { Film, ZoomIn, Eye, Sparkles, X, ChevronRight, ChevronLeft, Download } from 'lucide-react';

export const PhotoGalleryView: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof ALL_GALLERY_IMAGES)[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barcha Kadrlari (16)' },
    { id: 'Akbar taqdiri', label: 'Akbar Taqdiri' },
    { id: 'Oila boyligi', label: 'Boylik & Dabdaba' },
    { id: 'Sud va qamoq', label: 'Sud & Qamoq' },
    { id: 'Halokat', label: 'Fojia & Halokat' },
    { id: 'Asar ruhi', label: 'Mungli Ko‘zlar' },
  ];

  const filteredImages = ALL_GALLERY_IMAGES.filter((img) => {
    if (activeCategory === 'all') return true;
    return img.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const handleNextModal = () => {
    if (!selectedImage) return;
    const currentIndex = ALL_GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % ALL_GALLERY_IMAGES.length;
    setSelectedImage(ALL_GALLERY_IMAGES[nextIndex]);
  };

  const handlePrevModal = () => {
    if (!selectedImage) return;
    const currentIndex = ALL_GALLERY_IMAGES.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + ALL_GALLERY_IMAGES.length) % ALL_GALLERY_IMAGES.length;
    setSelectedImage(ALL_GALLERY_IMAGES[prevIndex]);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Intro Header */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-tech text-cyan-400 uppercase tracking-widest">
              <Film className="w-3.5 h-3.5" />
              <span>AI KINOMATOGRAFIK KADRLARI</span>
              <span className="text-slate-600">·</span>
              <span>1988-YIL SHAROITI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
              “Mungli ko‘zlar” Vizual Fotogalereyasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Asardagi eng ta’sirchan fojialar, qahramonlarning kechinmalari va ramziy buyumlar bo‘yicha AI yordamida yaratilgan 35mm kinotematik suratlar to‘plami.
            </p>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto pb-1 text-xs font-tech">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="glass-card-interactive rounded-2xl overflow-hidden border border-white/[0.08] group cursor-pointer flex flex-col justify-between"
          >
            {/* Image Frame */}
            <div className="relative h-56 overflow-hidden bg-black">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Tag Badges on Photo */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-tech text-cyan-300 font-bold">
                #{img.id} KADR
              </div>

              <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-cyan-300" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-xs font-tech text-slate-300 drop-shadow">
                <span className="text-cyan-400 uppercase text-[10px] tracking-wider block">
                  {img.category}
                </span>
                <span className="font-heading font-bold text-white text-sm sm:text-base line-clamp-1">
                  {img.title}
                </span>
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border-t border-white/[0.04] flex items-center justify-between text-xs font-tech text-slate-400">
              <span>Batafsil ko‘rish</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / High-Res Fullscreen Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full glass-panel-elevated rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Next / Prev Arrows */}
            <button
              onClick={handlePrevModal}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextModal}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Preview */}
            <div className="relative bg-black max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Caption Info */}
            <div className="p-6 bg-slate-950/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-tech text-cyan-400 uppercase tracking-widest block">
                  {selectedImage.category} · KADR #{selectedImage.id}
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-0.5">
                  {selectedImage.title}
                </h3>
              </div>
              <div className="text-xs font-tech text-slate-400">
                1988-yil Tarixiy Romani Voqeasi
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
