import React, { FC, CSSProperties } from "react";

interface Props {
  className?: string;
  size?: string;
  on?: boolean;
  style?: CSSProperties;
  color?: string;
}

const LightsOn: FC<Props> = (props) => {
  const { size = "50px", className = "", on = true, style, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      width={size}
      className={className}
      style={style}
    >
      <g>
        <path
          fill={color}
          d="M50,32.1c-10.1,0-18.3,8.2-18.3,18.3c0,6.5,3.4,12.5,9,15.8v11.1c0,2.5,2,4.5,4.5,4.5h9.7c2.5,0,4.5-2,4.5-4.5V66.1   c5.6-3.3,9-9.2,9-15.8C68.3,40.3,60.1,32.1,50,32.1z M55.3,71.7H44.7v-2h10.6V71.7z M54.8,77.7h-9.7c-0.2,0-0.5-0.2-0.5-0.5v-1.5   h10.6v1.5C55.3,77.5,55.1,77.7,54.8,77.7z M56.4,63.2l-1.1,0.6v2H44.7v-2l-1.1-0.6c-4.9-2.4-7.9-7.3-7.9-12.8   c0-7.9,6.4-14.3,14.3-14.3s14.3,6.4,14.3,14.3C64.3,55.8,61.3,60.7,56.4,63.2z"
        />
        {on && (
          <>
            <path
              fill={color}
              d="M50,29.2c1.1,0,2-0.9,2-2v-6.9c0-1.1-0.9-2-2-2s-2,0.9-2,2v6.9C48,28.3,48.9,29.2,50,29.2z"
            />
            <path
              fill={color}
              d="M80.1,48.2h-6.9c-1.1,0-2,0.9-2,2s0.9,2,2,2h6.9c1.1,0,2-0.9,2-2S81.2,48.2,80.1,48.2z"
            />
            <path
              fill={color}
              d="M26.8,48.2h-6.9c-1.1,0-2,0.9-2,2s0.9,2,2,2h6.9c1.1,0,2-0.9,2-2S27.9,48.2,26.8,48.2z"
            />
            <path
              fill={color}
              d="M32.4,30.7l-4.9-4.9c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8l4.9,4.9c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6   C33.2,32.7,33.2,31.5,32.4,30.7z"
            />
            <path
              fill={color}
              d="M75.3,25.8c-0.8-0.8-2-0.8-2.8,0l-4.9,4.9c-0.8,0.8-0.8,2,0,2.8c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l4.9-4.9   C76.1,27.8,76.1,26.6,75.3,25.8z"
            />
          </>
        )}
      </g>
    </svg>
  );
};

export default LightsOn;
