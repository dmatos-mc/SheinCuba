"use client";
// components/SearchBar.tsx

import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AuthModal from '../authModal/AuthModal'; // Importamos el modal
import RegisterModal from '../registerModal/RegisterModal';

interface User {
  name: string;
  photoURL?: string;
}

interface SearchBarProps {
  user: User | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

const handleRegisterOpen = () => {
  setRegisterOpen(true);
  handleMenuClose();
};

const handleRegisterClose = () => {
  setRegisterOpen(false);
};

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAuthModalOpen = () => {
    setIsAuthModalOpen(true);
    handleMenuClose();
  };

  const handleAuthModalClose = () => {
    setIsAuthModalOpen(false);
  };

  const isLoggedIn = !!user;

  return (
    <div className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
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

        {/* Íconos y Botón de inicio de sesión */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <ListAltIcon fontSize="large" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <FavoriteBorderIcon fontSize="large" />
          </button>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <ShoppingCartOutlinedIcon fontSize="large" />
          </button>

          {/* Botón de inicio de sesión */}
          <IconButton onClick={handleMenuOpen} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <PersonOutlineIcon fontSize="large" />
          </IconButton>

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
                <MenuItem onClick={handleAuthModalOpen}>Iniciar Sesión</MenuItem>
                <MenuItem onClick={() => { handleRegisterOpen(); }}>
                   Registrarse
                </MenuItem>
              </>
            )}
          </Menu>
        </div>
      </div>

      {/* Modal de Autenticación */}
      <AuthModal open={isAuthModalOpen} onClose={handleAuthModalClose} />

      <RegisterModal open={registerOpen} onClose={handleRegisterClose} />
    </div>
  );
};

export default SearchBar;
