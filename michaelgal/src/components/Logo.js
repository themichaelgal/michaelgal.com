import * as React from "react";
const Logo = (props) => (
  <svg
    width={300}
    height={100}
    viewBox="0 0 300 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="50%"
      y="50%"
      fontFamily="Orbitron, sans-serif"
      fontSize={50}
      fill="url(#gradient)"
      textAnchor="middle"
      alignmentBaseline="middle"
      fontWeight="bold"
    >
      {"Michael Gal"}
    </text>
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0A66C2" />
        <stop offset="100%" stopColor="#B0BEC5" />
      </linearGradient>
    </defs>
  </svg>
);
export default Logo;
