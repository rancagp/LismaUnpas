'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '../common/Container';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navSize, setNavSize] = useState('h-24');
  const [logoSize, setLogoSize] = useState('text-2xl');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Animasi perubahan ukuran navbar
      if (window.scrollY > 50) {
        setNavSize('h-16');
        setLogoSize('text-xl');
      } else {
        setNavSize('h-24');
        setLogoSize('text-2xl');
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // Menutup menu saat mengklik di luar menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white border-b border-gray-100 backdrop-blur-md shadow-sm' 
          : isOpen 
            ? 'bg-white border-b border-gray-100 md:bg-transparent md:border-transparent' 
            : 'bg-transparent border-transparent'
      }`}
    >
      <Container className={`transition-all duration-500 ease-in-out ${navSize}`}>
        <div className="flex h-full items-center justify-between px-8 md:px-12">
          <Link 
            href="/" 
            className={`flex items-center transition-all duration-500 ease-in-out ${
              scrolled ? 'h-12' : 'h-16'
            }`}
          >
            <div className={`relative transition-all duration-500 ease-in-out ${
              scrolled ? 'h-12 w-40' : 'h-16 w-48'
            }`}>
              <Image 
                src="/images/lisma.png" 
                alt="LISMA Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-12">
            <Link 
              href="/#tentang" 
              className={`text-[15px] font-semibold transition-colors hover:text-lisma ${
                scrolled ? 'text-lisma-text' : 'text-lisma-text'
              }`}
            >
              Tentang Kami
            </Link>
            <Link 
              href="/#unit" 
              className={`text-[15px] font-semibold transition-colors hover:text-lisma ${
                scrolled ? 'text-lisma-text' : 'text-lisma-text'
              }`}
            >
              Unit Kegiatan
            </Link>
            <Link 
              href="/#tim" 
              className={`text-[15px] font-semibold transition-colors hover:text-lisma ${
                scrolled ? 'text-lisma-text' : 'text-lisma-text'
              }`}
            >
              Tim Kami
            </Link>
            <Link 
              href="/#faq" 
              className={`text-[15px] font-semibold transition-colors hover:text-lisma ${
                scrolled ? 'text-lisma-text' : 'text-lisma-text'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lisma-text hover:text-lisma focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white">
            <Link
              href="/#tentang"
              className="block px-3 py-2 text-lisma-text hover:text-lisma font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/#unit"
              className="block px-3 py-2 text-lisma-text hover:text-lisma font-medium"
              onClick={() => setIsOpen(false)}
            >
              Unit Kegiatan
            </Link>
            <Link
              href="/#tim"
              className="block px-3 py-2 text-lisma-text hover:text-lisma font-medium"
              onClick={() => setIsOpen(false)}
            >
              Tim Kami
            </Link>
            <Link
              href="/#faq"
              className="block px-3 py-2 text-lisma-text hover:text-lisma font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
