"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', 
      width: '100%', 
      top: 0, 
      zIndex: 50,
      transition: 'all 0.3s ease-in-out',
      background: scrolled ? 'rgba(15, 15, 20, 0.95)' : 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      borderRadius: 0 
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: scrolled ? '1rem 1.5rem' : '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'padding 0.3s ease-in-out'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
          &lt; Kevin Ariel /&gt;
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" style={{ fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
          <a href="#contact" style={{ fontWeight: 500 }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
