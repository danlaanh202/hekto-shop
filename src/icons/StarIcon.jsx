import React from "react";

const StarIcon = ({ isGolden = false }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_91_705)">
        <path
          d="M11.8742 4.60447L8.58835 4.12692L7.11948 1.14907C7.07936 1.06753 7.01336 1.00153 6.93183 0.961413C6.72735 0.860469 6.47887 0.944589 6.37663 1.14907L4.90776 4.12692L1.6219 4.60447C1.53131 4.61741 1.44848 4.66012 1.38507 4.72482C1.3084 4.80362 1.26616 4.90963 1.26761 5.01956C1.26907 5.12949 1.31411 5.23434 1.39283 5.31108L3.7702 7.62891L3.20854 10.9018C3.19536 10.978 3.20379 11.0563 3.23286 11.1279C3.26192 11.1995 3.31046 11.2615 3.37298 11.3069C3.4355 11.3523 3.50949 11.3793 3.58656 11.3848C3.66363 11.3903 3.7407 11.374 3.80902 11.338L6.74806 9.79274L9.68709 11.338C9.76733 11.3807 9.86051 11.3949 9.9498 11.3794C10.175 11.3406 10.3264 11.127 10.2876 10.9018L9.72591 7.62891L12.1033 5.31108C12.168 5.24766 12.2107 5.16484 12.2236 5.07425C12.2586 4.84777 12.1007 4.63811 11.8742 4.60447V4.60447Z"
          fill={`${isGolden ? "#FFC416" : "#B2B2B2"}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_91_705">
          <rect
            width="13.2522"
            height="13.2522"
            fill="white"
            transform="translate(0.121582 0.03479)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarIcon;
