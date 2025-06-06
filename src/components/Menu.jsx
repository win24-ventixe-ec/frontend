import { Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logoutIcon from '../assets/icons/SignOut.png';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const MenuLinks = [
    {
      label: 'Home',
      path: '/',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75 0.75H2.25C1.85218 0.75 1.47064 0.908035 1.18934 1.18934C0.908035 1.47064 0.75 1.85218 0.75 2.25V6.75C0.75 7.14782 0.908035 7.52936 1.18934 7.81066C1.47064 8.09196 1.85218 8.25 2.25 8.25H6.75C7.14782 8.25 7.52936 8.09196 7.81066 7.81066C8.09196 7.52936 8.25 7.14782 8.25 6.75V2.25C8.25 1.85218 8.09196 1.47064 7.81066 1.18934C7.52936 0.908035 7.14782 0.75 6.75 0.75ZM6.75 6.75H2.25V2.25H6.75V6.75ZM15.75 0.75H11.25C10.8522 0.75 10.4706 0.908035 10.1893 1.18934C9.90804 1.47064 9.75 1.85218 9.75 2.25V6.75C9.75 7.14782 9.90804 7.52936 10.1893 7.81066C10.4706 8.09196 10.8522 8.25 11.25 8.25H15.75C16.1478 8.25 16.5294 8.09196 16.8107 7.81066C17.092 7.52936 17.25 7.14782 17.25 6.75V2.25C17.25 1.85218 17.092 1.47064 16.8107 1.18934C16.5294 0.908035 16.1478 0.75 15.75 0.75ZM15.75 6.75H11.25V2.25H15.75V6.75ZM6.75 9.75H2.25C1.85218 9.75 1.47064 9.90804 1.18934 10.1893C0.908035 10.4706 0.75 10.8522 0.75 11.25V15.75C0.75 16.1478 0.908035 16.5294 1.18934 16.8107C1.47064 17.092 1.85218 17.25 2.25 17.25H6.75C7.14782 17.25 7.52936 17.092 7.81066 16.8107C8.09196 16.5294 8.25 16.1478 8.25 15.75V11.25C8.25 10.8522 8.09196 10.4706 7.81066 10.1893C7.52936 9.90804 7.14782 9.75 6.75 9.75ZM6.75 15.75H2.25V11.25H6.75V15.75ZM15.75 9.75H11.25C10.8522 9.75 10.4706 9.90804 10.1893 10.1893C9.90804 10.4706 9.75 10.8522 9.75 11.25V15.75C9.75 16.1478 9.90804 16.5294 10.1893 16.8107C10.4706 17.092 10.8522 17.25 11.25 17.25H15.75C16.1478 17.25 16.5294 17.092 16.8107 16.8107C17.092 16.5294 17.25 16.1478 17.25 15.75V11.25C17.25 10.8522 17.092 10.4706 16.8107 10.1893C16.5294 9.90804 16.1478 9.75 15.75 9.75ZM15.75 15.75H11.25V11.25H15.75V15.75Z"
            transition="fill 0.15s ease-in-out"
            fill={
              location.pathname === '/'
                ? 'var(--primary-90)'
                : 'var(--secondary-100)'
            }
          />
        </svg>
      ),
    },
    {
      label: 'Events',
      path: '/events',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.75 5.75C20.9489 5.75 21.1397 5.67098 21.2803 5.53033C21.421 5.38968 21.5 5.19891 21.5 5V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V5C0.5 5.19891 0.579018 5.38968 0.71967 5.53033C0.860322 5.67098 1.05109 5.75 1.25 5.75C1.84674 5.75 2.41903 5.98705 2.84099 6.40901C3.26295 6.83097 3.5 7.40326 3.5 8C3.5 8.59674 3.26295 9.16903 2.84099 9.59099C2.41903 10.0129 1.84674 10.25 1.25 10.25C1.05109 10.25 0.860322 10.329 0.71967 10.4697C0.579018 10.6103 0.5 10.8011 0.5 11V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V11C21.5 10.8011 21.421 10.6103 21.2803 10.4697C21.1397 10.329 20.9489 10.25 20.75 10.25C20.1533 10.25 19.581 10.0129 19.159 9.59099C18.7371 9.16903 18.5 8.59674 18.5 8C18.5 7.40326 18.7371 6.83097 19.159 6.40901C19.581 5.98705 20.1533 5.75 20.75 5.75ZM2 11.675C2.84772 11.5029 3.60986 11.043 4.15728 10.3732C4.70471 9.70343 5.00376 8.86502 5.00376 8C5.00376 7.13498 4.70471 6.29657 4.15728 5.62681C3.60986 4.95705 2.84772 4.49714 2 4.325V2H7.25V14H2V11.675ZM20 11.675V14H8.75V2H20V4.325C19.1523 4.49714 18.3901 4.95705 17.8427 5.62681C17.2953 6.29657 16.9962 7.13498 16.9962 8C16.9962 8.86502 17.2953 9.70343 17.8427 10.3732C18.3901 11.043 19.1523 11.5029 20 11.675Z"
            transition="fill 0.15s ease-in-out"
            fill={
              location.pathname === '/events' ||
              location.pathname.includes('/events/')
                ? 'var(--primary-90)'
                : 'var(--secondary-100)'
            }
          />
        </svg>
      ),
    },
  ];

  return (
    <nav
      style={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        maxHeight: 'calc(100% - 100px)',
        minHeight: 'calc(100% - 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '8px',
        }}
      >
        {MenuLinks.map((link, index) => (
          <li
            key={index}
            style={{
              height: '44px',
              width: '100%',
              display: 'flex',
              position: 'relative',
              transition: 'all 0.3s ease-in-out',
            }}
            className="menu-item"
          >
            <div
              className={`active-nav-symbol ${
                location.pathname === link.path ? 'active' : ''
              }`}
            />
            <Link
              to={link.path}
              style={{
                textDecoration: 'none',
                color:
                  location.pathname === link.path ||
                  (location.pathname.includes('/events/') &&
                    link.path === '/events')
                    ? 'var(--primary-90)'
                    : 'var(--secondary-100)',
                fontSize: '16px',
                fontWeight: 500,
                padding: '12px 24px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'color 0.15s ease-in-out',
              }}
            >
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        sx={{
          width: '100%',
          height: '44px',
          borderRadius: '8px',
          backgroundColor: 'var(--secondary-10)',
          color: 'var(--secondary-100)',
          fontSize: '16px',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '12px 24px',
        }}
        onClick={() => navigate('/authentication')}
      >
        <img
          src={logoutIcon}
          alt="Sign Out"
          style={{ width: '24px', height: '24px', marginRight: '8px' }}
        />
        Login
      </Button>
    </nav>
  );
};

export default Menu;
