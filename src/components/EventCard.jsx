import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ eventId }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: '100%',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: 'none',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/events/${eventId}`)}
    >
      <CardActionArea>
        <CardMedia
          component="canvas"
          height="140"
          sx={{
            backgroundColor: 'var(--grey-40)',
            borderRadius: '12px',
            border: 'none',
            width: '100%',
          }}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: 'var(--grey-70)',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '6px',
            }}
          >
            May 5, 2029 - 9:00 AM
          </Typography>

          <Typography
            gutterBottom
            variant="body"
            component="div"
            sx={{ fontWeight: 600, fontSize: '16px' }}
          >
            Tech Beats Festival
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'var(--grey-80)',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75 3.5C7.31735 3.5 6.89442 3.62829 6.53469 3.86866C6.17496 4.10903 5.89458 4.45067 5.72901 4.85038C5.56345 5.25009 5.52013 5.68993 5.60453 6.11426C5.68894 6.53859 5.89728 6.92837 6.2032 7.2343C6.50913 7.54022 6.89891 7.74856 7.32324 7.83297C7.74757 7.91737 8.18741 7.87405 8.58712 7.70849C8.98683 7.54292 9.32847 7.26254 9.56884 6.90281C9.80921 6.54308 9.9375 6.12015 9.9375 5.6875C9.9375 5.10734 9.70703 4.55094 9.2968 4.1407C8.88656 3.73047 8.33016 3.5 7.75 3.5ZM7.75 7C7.49041 7 7.23665 6.92302 7.02081 6.7788C6.80497 6.63458 6.63675 6.4296 6.53741 6.18977C6.43807 5.94994 6.41208 5.68604 6.46272 5.43144C6.51336 5.17684 6.63837 4.94298 6.82192 4.75942C7.00548 4.57587 7.23934 4.45086 7.49394 4.40022C7.74854 4.34958 8.01244 4.37557 8.25227 4.47491C8.4921 4.57425 8.69708 4.74247 8.8413 4.95831C8.98552 5.17415 9.0625 5.42791 9.0625 5.6875C9.0625 6.0356 8.92422 6.36944 8.67808 6.61558C8.43194 6.86172 8.0981 7 7.75 7ZM7.75 0.875C6.47409 0.876447 5.25085 1.38394 4.34865 2.28615C3.44644 3.18835 2.93895 4.41159 2.9375 5.6875C2.9375 7.40469 3.73102 9.22469 5.23438 10.9512C5.90989 11.7313 6.67017 12.4338 7.50117 13.0457C7.57473 13.0972 7.66237 13.1249 7.75219 13.1249C7.842 13.1249 7.92964 13.0972 8.0032 13.0457C8.83268 12.4336 9.59148 11.7311 10.2656 10.9512C11.7668 9.22469 12.5625 7.40469 12.5625 5.6875C12.5611 4.41159 12.0536 3.18835 11.1514 2.28615C10.2491 1.38394 9.02591 0.876447 7.75 0.875ZM7.75 12.1406C6.84602 11.4297 3.8125 8.81836 3.8125 5.6875C3.8125 4.64321 4.22734 3.64169 4.96577 2.90327C5.70419 2.16484 6.70571 1.75 7.75 1.75C8.79429 1.75 9.79581 2.16484 10.5342 2.90327C11.2727 3.64169 11.6875 4.64321 11.6875 5.6875C11.6875 8.81727 8.65398 11.4297 7.75 12.1406Z"
                fill="#C3C3C4"
              />
            </svg>
            Wellness Arena, Miami, FL
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
