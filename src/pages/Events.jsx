import { Box } from '@mui/material';
import EventCard from '../components/EventCard';
import { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'https://vxe-eventservice-b2dfaud8evbxb5h0.swedencentral-01.azurewebsites.net/api/events',
        );
        setLoading(false);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data.result);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return loading ? (
    <div className="loader"></div>
  ) : (
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
      {events.map((_, index) => (
        <Box key={index} sx={{ width: '100%' }}>
          <EventCard eventId={_.id} />
        </Box>
      ))}
    </Box>
  );
};

export default Events;
