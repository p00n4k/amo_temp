'use client';

import { useState } from 'react';

import Tile from '@/components/Tile';
import Furniture from '@/components/Furniture';
import Lighting from '@/components/Lighting';
import Mosaic from '@/components/Mosaic';
import Outdoor from '@/components/Outdoor';
import Other from '@/components/Other';

export default function ProductPage() {
  const [activeComponent, setActiveComponent] = useState('Tile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Tile':
        return <Tile />;
      case 'Furniture':
        return <Furniture />;
      case 'Lighting':
        return <Lighting />;
      case 'Mosaic':
        return <Mosaic />;
      case 'Outdoor':
        return <Outdoor />;
      case 'Other':
        return <Other />;
      default:
        return <Tile />;
    }
  };

  return (
    <div className="bg-[#666a6a] text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#262626]">
        <div className="text-xl font-bold">Amo</div>

      </nav>

      {/* Category Buttons */}
      <div className="flex justify-center pt-7">
        <div className="flex flex-wrap gap-4 px-6 py-4 justify-center">
          {['Tile', 'Furniture', 'Lighting', 'Mosaic', 'Outdoor', 'Other'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveComponent(category)}
              className={`px-4 py-2 rounded-full text-sm ${activeComponent === category ? 'bg-[#cc632a]' : 'bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>


      {/* Dynamic Content */}
      <div className="p-6">{renderComponent()}</div>
    </div>
  );
}
