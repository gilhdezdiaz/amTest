import React from "react";

export const FavoriteIcon = ({ fill, stroke, opacity }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3H14C16.8284 3 18.2426 3 19.1213 3.87868C20 4.75736 20 6.17157 20 9V15.8276C20 18.5109 20 19.8525 19.1557 20.2629C18.3114 20.6733 17.2565 19.8444 15.1465 18.1866L14.4713 17.656C13.2849 16.7239 12.6917 16.2578 12 16.2578C11.3083 16.2578 10.7151 16.7239 9.52871 17.656L8.85346 18.1866C6.74355 19.8444 5.68859 20.6733 4.84429 20.2629C4 19.8525 4 18.5109 4 15.8276V9Z"
      fill={fill}
      stroke={stroke}
      fillOpacity={opacity}
      strokeWidth="2"
    />
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 15L10 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 15L14 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const AddPersonIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3249 15.0763C12.8883 15.0257 12.4456 15 12 15C10.0188 15 8.09292 15.5085 6.52112 16.4465C5.30069 17.1749 4.34666 18.1307 3.74108 19.2183C3.46638 19.7117 3.79562 20.2902 4.34843 20.4054C7.85678 21.1365 11.4437 21.3594 15 21.074V21H14C12.3431 21 11 19.6569 11 18C11 16.5753 11.9932 15.3825 13.3249 15.0763Z"
      fill="white"
    />
    <path
      d="M18 14L18 22"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M22 18L14 18"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="8" r="5" fill="white" />
  </svg>
);

export const CloseIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="34" height="34" fill="white" />
    <circle cx="17" cy="17" r="12.75" stroke="#333333" />
    <path d="M12.75 21.2495L21.25 12.7495" stroke="#333333" />
    <path d="M21.25 21.25L12.75 12.75" stroke="#333333" />
  </svg>
);
