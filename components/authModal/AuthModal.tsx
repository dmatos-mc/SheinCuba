// components/AuthModal.tsx

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  const handleGoogleSignIn = () => {
    // Lógica para autenticación con Google
  };

  const handleFacebookSignIn = () => {
    // Lógica para autenticación con Facebook
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Iniciar Sesión</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Correo Electrónico"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          label="Contraseña"
          type="password"
          fullWidth
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
        >
          Iniciar Sesión
        </Button>
        <div className="flex justify-between mt-4">
          <Button
            startIcon={<GoogleIcon />}
            variant="outlined"
            fullWidth
            onClick={handleGoogleSignIn}
            style={{ marginRight: 8 }}
          >
            Google
          </Button>
          <Button
            startIcon={<FacebookIcon />}
            variant="outlined"
            fullWidth
            onClick={handleFacebookSignIn}
            style={{ marginLeft: 8 }}
          >
            Facebook
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Registrarse
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
