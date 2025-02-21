import React, { useState, useEffect } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Track scroll position and show/hide the button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show button when scroll is over 300px
      } else {
        setIsVisible(false); // Hide button when scrolled back to top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#1D4ED8',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            padding: '15px',
            fontSize: '20px',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease',
          }}
        >
          <FaLongArrowAltUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
