import { Box } from '@mui/material';
import EventCard from '../components/EventCard';

const Events = () => {
  const cards = Array.from({ length: 8 });
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        padding: 2,
        width: '100%',
        backgroundColor: 'var(--grey-20)',
        borderRadius: '16px',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        },
      }}
    >
      {cards.map((_, index) => (
        <Box key={index} sx={{ width: '100%' }}>
          <EventCard eventId={index + 1} />
        </Box>
      ))}
    </Box>
  );
};

export default Events;
