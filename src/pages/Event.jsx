import { Image } from '@mui/icons-material';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Event = () => {
  const location = useLocation();
  const [eventData, setEventData] = useState({
    eventId: null,
    title: 'Echo Beats Festival',
    dateAndTime: 'May 20, 2029 - 9:00 AM',
    description:
      'The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres. Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances under the stars. Explore food trucks, art installations, and VIP lounges for an elevated experience.',
    location: 'Sunset Park, Los Angeles, CA',
    image: '',
    tickets: 5000,
    attendees: 327,
    organizer: 'Echo Events',
    price: '$60',
  });

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    setEventData((prevData) => ({
      ...prevData,
      eventId: id,
    }));
  }, [location.pathname]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        padding: '16px',
        width: '100%',
        maxWidth: '656px',
        height: 'auto',
        backgroundColor: 'var(--grey-20)',
        borderRadius: '16px',
      }}
    >
      <Image
        sx={{
          width: '100%',
          height: '351px',
          backgroundColor: 'var(--grey-40)',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
        }}
        src={eventData.image || 'https://via.placeholder.com/600x400'}
        alt={eventData.title}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          backgroundColor: 'var(--grey-10)',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
          padding: '16px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: '24px',
            color: 'var(--grey-100)',
          }}
        >
          {eventData.title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '2px',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginBottom: '8px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.375 1.75H10.0625V1.3125C10.0625 1.19647 10.0164 1.08519 9.93436 1.00314C9.85231 0.921094 9.74103 0.875 9.625 0.875C9.50897 0.875 9.39769 0.921094 9.31564 1.00314C9.23359 1.08519 9.1875 1.19647 9.1875 1.3125V1.75H4.8125V1.3125C4.8125 1.19647 4.76641 1.08519 4.68436 1.00314C4.60231 0.921094 4.49103 0.875 4.375 0.875C4.25897 0.875 4.14769 0.921094 4.06564 1.00314C3.98359 1.08519 3.9375 1.19647 3.9375 1.3125V1.75H2.625C2.39294 1.75 2.17038 1.84219 2.00628 2.00628C1.84219 2.17038 1.75 2.39294 1.75 2.625V11.375C1.75 11.6071 1.84219 11.8296 2.00628 11.9937C2.17038 12.1578 2.39294 12.25 2.625 12.25H11.375C11.6071 12.25 11.8296 12.1578 11.9937 11.9937C12.1578 11.8296 12.25 11.6071 12.25 11.375V2.625C12.25 2.39294 12.1578 2.17038 11.9937 2.00628C11.8296 1.84219 11.6071 1.75 11.375 1.75ZM3.9375 2.625V3.0625C3.9375 3.17853 3.98359 3.28981 4.06564 3.37186C4.14769 3.45391 4.25897 3.5 4.375 3.5C4.49103 3.5 4.60231 3.45391 4.68436 3.37186C4.76641 3.28981 4.8125 3.17853 4.8125 3.0625V2.625H9.1875V3.0625C9.1875 3.17853 9.23359 3.28981 9.31564 3.37186C9.39769 3.45391 9.50897 3.5 9.625 3.5C9.74103 3.5 9.85231 3.45391 9.93436 3.37186C10.0164 3.28981 10.0625 3.17853 10.0625 3.0625V2.625H11.375V4.375H2.625V2.625H3.9375ZM11.375 11.375H2.625V5.25H11.375V11.375ZM7.875 8.3125C7.875 8.48556 7.82368 8.65473 7.72754 8.79862C7.63139 8.94252 7.49473 9.05467 7.33485 9.12089C7.17496 9.18712 6.99903 9.20445 6.8293 9.17069C6.65956 9.13693 6.50365 9.05359 6.38128 8.93122C6.25891 8.80885 6.17557 8.65294 6.14181 8.4832C6.10805 8.31347 6.12538 8.13754 6.19161 7.97765C6.25783 7.81777 6.36998 7.68111 6.51388 7.58496C6.65777 7.48882 6.82694 7.4375 7 7.4375C7.23206 7.4375 7.45462 7.52969 7.61872 7.69378C7.78281 7.85788 7.875 8.08044 7.875 8.3125Z"
                    fill="#C3C3C4"
                  />
                </svg>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'var(--grey-70)',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {eventData.dateAndTime}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginBottom: '8px',
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3.5C6.56735 3.5 6.14442 3.62829 5.78469 3.86866C5.42496 4.10903 5.14458 4.45067 4.97901 4.85038C4.81345 5.25009 4.77013 5.68993 4.85453 6.11426C4.93894 6.53859 5.14728 6.92837 5.4532 7.2343C5.75913 7.54022 6.14891 7.74856 6.57324 7.83297C6.99757 7.91737 7.43741 7.87405 7.83712 7.70849C8.23683 7.54292 8.57847 7.26254 8.81884 6.90281C9.05921 6.54308 9.1875 6.12015 9.1875 5.6875C9.1875 5.10734 8.95703 4.55094 8.5468 4.1407C8.13656 3.73047 7.58016 3.5 7 3.5ZM7 7C6.74041 7 6.48665 6.92302 6.27081 6.7788C6.05497 6.63458 5.88675 6.4296 5.78741 6.18977C5.68807 5.94994 5.66208 5.68604 5.71272 5.43144C5.76336 5.17684 5.88837 4.94298 6.07192 4.75942C6.25548 4.57587 6.48934 4.45086 6.74394 4.40022C6.99854 4.34958 7.26244 4.37557 7.50227 4.47491C7.7421 4.57425 7.94708 4.74247 8.0913 4.95831C8.23552 5.17415 8.3125 5.42791 8.3125 5.6875C8.3125 6.0356 8.17422 6.36944 7.92808 6.61558C7.68194 6.86172 7.3481 7 7 7ZM7 0.875C5.72409 0.876447 4.50085 1.38394 3.59865 2.28615C2.69644 3.18835 2.18895 4.41159 2.1875 5.6875C2.1875 7.40469 2.98102 9.22469 4.48438 10.9512C5.15989 11.7313 5.92017 12.4338 6.75117 13.0457C6.82473 13.0972 6.91237 13.1249 7.00219 13.1249C7.092 13.1249 7.17964 13.0972 7.2532 13.0457C8.08268 12.4336 8.84148 11.7311 9.51562 10.9512C11.0168 9.22469 11.8125 7.40469 11.8125 5.6875C11.8111 4.41159 11.3036 3.18835 10.4014 2.28615C9.49915 1.38394 8.27591 0.876447 7 0.875ZM7 12.1406C6.09602 11.4297 3.0625 8.81836 3.0625 5.6875C3.0625 4.64321 3.47734 3.64169 4.21577 2.90327C4.95419 2.16484 5.95571 1.75 7 1.75C8.04429 1.75 9.04581 2.16484 9.78423 2.90327C10.5227 3.64169 10.9375 4.64321 10.9375 5.6875C10.9375 8.81727 7.90398 11.4297 7 12.1406Z"
                    fill="#C3C3C4"
                  />
                </svg>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'var(--grey-70)',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {eventData.location}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              gap: '4px',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'var(--grey-70)',
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Tickets Sold
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                fontWeight: 400,
              }}
            >
              <span style={{ fontSize: '24px', fontWeight: '600' }}>
                {eventData.attendees}
              </span>
              <span style={{ opacity: 0.7 }}>/{eventData.tickets}</span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              gap: '4px',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'var(--grey-70)',
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Starts from
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--primary-100)',
              }}
            >
              {eventData.price}
            </Typography>
          </Box>
        </Box>

        <Divider />
        <Typography
          variant="body2"
          sx={{
            color: 'var(--secondary-100)',
            fontSize: '12px',
            fontWeight: 600,
            marginTop: '8px',
          }}
        >
          About Event
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'var(--grey-80)',
            fontSize: '14px',
            marginBottom: '8px',
          }}
        >
          {eventData.description}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: '100%',
          height: '44px',
          marginTop: '16px',
          backgroundColor: 'var(--primary-100)',
          color: 'var(--secondary-10)',
          fontSize: '16px',
          fontWeight: 500,
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'var(--primary-90)',
          },
        }}
      >
        Book Now
      </Button>

      <Button
        variant="outlined"
        sx={{
          width: '100%',
          height: '44px',
          marginTop: '8px',
          borderColor: 'var(--secondary-10)',
          color: 'var(--secondary-10)',
          fontSize: '16px',
          fontWeight: 500,
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'var(--secondary-20)',
            borderColor: 'var(--secondary-20)',
          },
        }}
      >
        Cancel Booking
      </Button>
    </Box>
  );
};

export default Event;
