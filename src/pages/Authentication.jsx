import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Authentication = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          width: '100%',
          maxWidth: '400px',
          paddingTop: '32px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: 'var(--secondary-100)',
            textAlign: 'center',
          }}
        >
          Welcome to Ventixe event protal.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--grey-70)',
            textAlign: 'center',
          }}
        >
          {isRegisterMode
            ? 'Create your account to get started.'
            : 'Login to your account to continue.'}
        </Typography>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={{
            width: '100%',
            marginBottom: '8px',
          }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          sx={{
            width: '100%',
            marginBottom: '8px',
          }}
        />
        {isRegisterMode && (
          <>
            <TextField
              id="confirm-password"
              label="Confirm Password"
              variant="outlined"
              type="password"
              sx={{
                width: '100%',
                marginBottom: '8px',
              }}
            />
            <TextField
              id="full-name"
              label="Full Name"
              variant="outlined"
              sx={{
                width: '100%',
                marginBottom: '8px',
              }}
            />
          </>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: '100%',
            borderRadius: '8px',
            fontSize: '16px',
            marginTop: '4px',
            fontWeight: 500,
          }}
        >
          {isRegisterMode ? 'Register' : 'Login'}
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: '100%',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
          }}
          onClick={() => setIsRegisterMode(!isRegisterMode)}
        >
          {isRegisterMode ? 'Switch to Login' : 'Register'}
        </Button>
      </Box>
    </Box>
  );
};

export default Authentication;
