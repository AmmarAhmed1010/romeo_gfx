import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 flex justify-center">
     <div>
     <p className="text-sm">
            © {new Date().getFullYear()} Romeo GFX. All rights reserved.
          </p>
     </div>
    </footer>
  );
};

export default Footer;
