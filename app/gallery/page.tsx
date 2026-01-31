'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type GalleryImage = {
  id: number;
  src: string;
  title: string;
  category: string;
  date: string;
  height?: 'tall' | 'short' | 'normal';
};

type Category = {
  id: string;
  label: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/81.JPG',
    title: 'Graduation Ceremony 2024',
    category: 'events',
    date: 'June 15, 2024',
    height: 'tall'
  },
  {
    id: 2,
    src: '/images/40a.jpeg',
    title: 'Science Laboratory',
    category: 'activities',
    date: 'September 2024'
  },
  {
    id: 3,
    src: '/images/KABADI TEAM.jpeg',
    title: 'Sports Day Activities',
    category: 'sports',
    date: 'March 22, 2024',
    height: 'tall'
  },
  {
    id: 4,
    src: '/images/IMG-20260107-WA0018.jpg',
    title: 'School Library',
    category: 'activities',
    date: 'October 2024'
  },
  {
    id: 5,
    src: '/images/REPUBLIC DAY.jpeg',
    title: 'Art Exhibition',
    category: 'events',
    date: 'April 10, 2024'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
    title: 'Basketball Tournament',
    category: 'sports',
    date: 'February 18, 2024',
    height: 'tall'
  },
  {
    id: 7,
    src: '/images/NCC.jpg',
    title: 'Computer Lab',
    category: 'activities',
    date: 'November 2024'
  },
  {
    id: 8,
    src: '/images/106.jpeg',
    title: 'Music Recital',
    category: 'events',
    date: 'May 5, 2024'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800',
    title: 'Swimming Pool',
    category: 'sports',
    date: 'August 2024',
    height: 'tall'
  }
];

const categories: Category[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'events', label: 'Events' },
  { id: 'activities', label: 'Activities' },
  { id: 'sports', label: 'Sports' }
];

export default function SchoolGallery(){
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

  const filteredImages: GalleryImage[] =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  // <-- Fixed: explicit type for categoryId to avoid implicit any -->
  const getCategoryCount = (categoryId: string): number => {
    if (categoryId === 'all') return galleryImages.length;
    return galleryImages.filter(img => img.category === categoryId).length;
  };

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;

    let newIndex: number;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isDialogOpen) return;
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'Escape') setIsDialogOpen(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDialogOpen, selectedImage, filteredImages]);

  const handleShare = async () => {
    if (!selectedImage) return;

    const shareData = {
      title: selectedImage.title,
      text: `Check out this photo: ${selectedImage.title}`,
      url: selectedImage.src
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData as ShareData);
      } else if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        // Fallback: copy image url to clipboard
        await navigator.clipboard.writeText(selectedImage.src);
        // eslint-disable-next-line no-alert
        alert('Image URL copied to clipboard');
      } else {
        // Last resort: open the image in a new tab for manual sharing
        window.open(selectedImage.src, '_blank', 'noopener');
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Share failed:', err);
      // eslint-disable-next-line no-alert
      alert('Unable to share this image on your device.');
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Gallery
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Explore highlights from our school community — from classroom moments to championship wins.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex gap-1 mb-10 pb-2 justify-center">
          {categories.map(category => {
            const count = getCategoryCount(category.id);
            const isActive = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={isActive}
                type="button"
              >
                {category.label}
                <span className={`ml-1.5 text-xs ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image: GalleryImage) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group cursor-pointer break-inside-avoid"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openLightbox(image);
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={image.height === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                  <img
                    src={image.src}
                    alt={image.title}
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [image.id]: true }))}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      imageLoaded[image.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } group-hover:scale-105`}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-base mb-1">
                      {image.title}
                    </h3>
                    <p className="text-xs text-gray-200">{image.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-3">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg">No photos found in this category</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              type="button"
            >
              View all photos
            </button>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox */}
      <Dialog open={isDialogOpen} onOpenChange={(open: boolean) => setIsDialogOpen(open)}>
        <DialogContent className="max-w-6xl p-0 bg-zinc-950 border-0">
          {selectedImage && (
            <>
              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black/50 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h2 className="font-semibold text-lg">{selectedImage.title}</h2>
                    <p className="text-sm text-gray-300">{selectedImage.date}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleShare}
                      className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                      title="Share"
                      type="button"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsDialogOpen(false)}
                      className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
                      title="Close (Esc)"
                      type="button"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                    title="Previous (←)"
                    type="button"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
                    title="Next (→)"
                    type="button"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="flex items-center justify-center min-h-screen p-20">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm">
                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
