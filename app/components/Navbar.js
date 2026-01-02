'use client';

export default function Navbar() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold cursor-pointer"
          >
            LIC Agent Portfolio
          </a>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')}
                className="hover:text-blue-300 transition-colors cursor-pointer"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
