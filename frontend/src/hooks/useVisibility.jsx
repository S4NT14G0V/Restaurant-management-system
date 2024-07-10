// useVisibility.js
import { useState, useEffect } from 'react';

function useVisibility(ref, options = {}) {
  const { threshold = 0.5 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (observer) {
        observer.disconnect(); // Use disconnect() instead of unobserve()
      }
    };
  }, [ref, threshold]);

  return isVisible;
}

export default useVisibility;
