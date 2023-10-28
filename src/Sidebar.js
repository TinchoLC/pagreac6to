import React, { useState } from 'react';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem((prevItem) => (prevItem === item ? '' : item));
  };

  return (
    <div className="sidebar">
      <div
        className={`accordion ${activeItem === 'Hola' ? 'open' : ''}`}
        onClick={() => handleItemClick('Hola')}
      >
        <div className="accordion-header">Hola</div>
        {activeItem === 'Hola' && (
          <div className="accordion-content">
            <div className="accordion">
              <div className="accordion-header">Schujman</div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`accordion ${activeItem === 'Buenas' ? 'open' : ''}`}
        onClick={() => handleItemClick('Buenas')}
      >
        <div className="accordion-header">Buenas</div>
        {activeItem === 'Buenas' && (
          <div className="accordion-content">
            <div className="accordion">
              <div className="accordion-header">Noches</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;