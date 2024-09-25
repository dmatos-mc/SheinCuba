"use client";
// components/RegisterModal.tsx

import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Typography variant="h6" align="center">
          Crear una cuenta
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            margin="dense"
            label="Nombre"
            type="text"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Correo Electrónico"
            type="email"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Contraseña"
            type="password"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Registrarse
          </Button>
        </form>

        <Typography align="center" sx={{ my: 2 }}>
          o
        </Typography>

        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          sx={{ mb: 2, color: '#DB4437', borderColor: '#DB4437' }}
        >
          Registrarse con Google
        </Button>

        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          fullWidth
          sx={{ mb: 2, color: '#4267B2', borderColor: '#4267B2' }}
        >
          Registrarse con Facebook
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
