'use client';

import { useEffect } from 'react';

export default function BodyLock() {
  useEffect(() => {
    // Prevent left/right arrow key navigation only
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
      }
      // Allow up/down arrow keys for vertical scrolling
    };

    // Prevent horizontal wheel scrolling only
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
      // Allow vertical wheel scrolling
    };

    // Prevent horizontal touch swipe gestures only
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const lastTouch = (e as any).lastTouch || { x: touch.clientX, y: touch.clientY };
        const deltaX = Math.abs(touch.clientX - lastTouch.x);
        const deltaY = Math.abs(touch.clientY - lastTouch.y);
        
        if (deltaX > deltaY && deltaX > 10) {
          e.preventDefault();
        }
        // Allow vertical touch scrolling
      }
      (e as any).lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null; // This component doesn't render anything
}
