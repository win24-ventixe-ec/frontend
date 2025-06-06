import { Box, Typography } from '@mui/material';

const Home = () => {
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
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: 'var(--secondary-100)',
          textAlign: 'center',
        }}
      >
        Welcome to Ventixe Event Portal
      </Typography>
    </Box>
  );
};

export default Home;
