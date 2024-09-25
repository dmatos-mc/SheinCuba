"use client"
// components/Header.tsx

import React, { useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

interface User {
  name: string;
  photoURL?: string;
}

interface HeaderProps {
  user: User | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollRight = () => {
    if (menuRef.current) {
      menuRef.current.scrollLeft += 100;  // Ajusta este valor según necesites
    }
  };

  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollLeft -= 100;  // Ajusta este valor según necesites
    }
  };

  const isLoggedIn = !!user;

  return (
    <header className="bg-white border-b border-gray-300">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Barra de búsqueda */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full p-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-900"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Íconos */}
        <div className="flex items-center space-x-4">
          <IconButton onClick={handleMenuOpen} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <PersonOutlineIcon fontSize="large" />
          </IconButton>
          <FavoriteBorderIcon fontSize="large" className="text-gray-600 hover:text-gray-800" />
          <ShoppingCartOutlinedIcon fontSize="large" className="text-gray-600 hover:text-gray-800" />
          
          {/* Menú de usuario */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            {isLoggedIn ? (
              <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            ) : (
              <>
                <MenuItem onClick={handleMenuClose}>Iniciar Sesión</MenuItem>
                <MenuItem onClick={handleMenuClose}>Registrarse</MenuItem>
              </>
            )}
          </Menu>
        </div>
      </div>

 
    </header>
  );
};

export default Header;
