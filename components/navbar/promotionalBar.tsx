"use client"
// components/PromotionalBar.tsx

import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const PromotionalBar: React.FC = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Slide direction="down" in={open} mountOnEnter unmountOnExit>
      <div className="bg-yellow-400 text-gray-900 p-3">
        <div className="container mx-auto flex justify-between items-center">
          <p className="font-semibold">
            🎉 ¡Gran promoción del mes! Obtén un 20% de descuento en todos los productos. ¡Aprovecha ahora!
          </p>
          <button onClick={handleClose} className="focus:outline-none">
            <CloseIcon className="text-gray-900 hover:text-gray-600" />
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default PromotionalBar;