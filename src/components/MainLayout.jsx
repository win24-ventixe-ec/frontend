import { Outlet, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import logo from '../assets/icons/Symbol.png';
import Menu from './Menu';

const styles = {
  mainLayout: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '100svh',
    overflow: 'hidden',
    padding: '16px',
  },
  leftSidebar: {
    position: 'relative',
    width: '100%',
    maxWidth: '250px',
    minWidth: '250px',
    borderRadius: '16px',
    backgroundColor: 'var(--cool-grey-10)',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: 'auto',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    gap: '8px',
    padding: '16px 24px',
  },
  header: {
    height: '80px',
    borderRadius: '16px',
    padding: '16px',
    backgroundColor: 'var(--grey-20)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-between',
    mb: '16px',
  },
  headerText: {
    fontSize: '24px',
    fontWeight: 600,
    backgroundColor: 'transparent',
    color: 'var(--secondary-100)',
  },
  content: {
    flexGrow: 1,
    padding: '0 0 16px 16px',
  },
};

const MainLayout = () => {
  const location = useLocation();
  return (
    <Box sx={styles.mainLayout}>
      <Box sx={styles.leftSidebar}>
        <Box sx={styles.logo}>
          <img
            src={logo}
            alt="VentixeLogo"
            style={{ width: '24px', height: '24px' }}
            draggable="false"
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: 'var(--secondary-110)',
              fontSize: '24px',
            }}
          >
            Ventixe
          </Typography>
        </Box>
        <Menu />
      </Box>
      <Box sx={styles.content}>
        <Box sx={styles.header}>
          <Typography sx={styles.headerText}>
            {(() => {
              const raw = location.pathname.replace('/', '');
              return raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : 'Home';
            })()}
          </Typography>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
