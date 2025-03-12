import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    label: string;
  }[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setDragOffset(0);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setDragOffset(0);
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !containerRef.current) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;
    const containerWidth = containerRef.current.offsetWidth;
    
    // Limit drag to one image width in either direction
    const maxDrag = containerWidth;
    const boundedDiff = Math.max(Math.min(diff, maxDrag), -maxDrag);
    
    setDragOffset(boundedDiff);
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !containerRef.current) return;
    
    const distance = touchStart - touchEnd;
    const containerWidth = containerRef.current.offsetWidth;
    const threshold = containerWidth * 0.2; // 20% threshold for swipe
    
    if (Math.abs(distance) >= threshold) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
    setDragOffset(0);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="relative w-full">
      <div 
        className="relative overflow-hidden rounded-lg touch-pan-x"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={`flex transition-transform duration-300 ease-out will-change-transform`}
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% - ${dragOffset}px))`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 px-4 md:px-8"
              style={{ scrollSnapAlign: 'start' }}
            >
              <p className="text-center text-sm font-medium text-neutral-600 mb-4">
                {image.label}
              </p>
              <div className="relative aspect-[4/3] md:aspect-[16/9]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 top-[45%] -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white/90 transition-colors md:left-4"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-[45%] -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white/90 transition-colors md:right-4"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex flex-col items-center gap-6 mt-4">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setDragOffset(0);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-black' : 'bg-black/20'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-neutral-500">Swipe to see plan creation process</p>
      </div>
    </div>
  );
} 