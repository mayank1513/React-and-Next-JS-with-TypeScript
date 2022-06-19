import styled from "@emotion/styled";

const strokeDash = 1200;
const LogoContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  svg {
    padding: 10px;
  }
  .p6,
  .p3 {
    animation: logo 4s ease infinite alternate;
    stroke-dasharray: ${strokeDash};
    stroke-dashoffset: ${strokeDash};
    stroke-linecap: round;
  }
  @keyframes logo {
    0% {
      stroke-dashoffset: ${strokeDash};
      stroke: #004578;
      opacity: 1;
    }
    25% {
      stroke: #15b4f0;
    }
    50% {
      stroke: #d03d95;
      opacity: 0.8;
    }
    75% {
      stroke: #f4867f;
    }
    100% {
      stroke: #ff0066;
      stroke-dashoffset: -${strokeDash};
      opacity: 1;
    }
  }
`;

export function LogoD(props: any) {
  return (
    <LogoContainer {...props}>
      <svg
        width={props.size || "440"}
        height={props.size || "421"}
        viewBox="0 0 440 421"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <g id="mg" filter="url(#filter0_d)">
            <mask
              id="mask0"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="96"
              y="43"
              width="304"
              height="336"
            >
              <path
                id="sub"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M368.936 247.335L168.428 362.888C141.398 378.466 107.877 360.172 105.582 329.822L104.536 330.425C101.747 332.032 98.8871 333.27 96 334.164C101.094 369.592 141.024 390.224 173.422 371.552L373.929 255.999C408.611 236.011 408.651 185.974 374 165.932L173.674 50.0646C141.145 31.2502 100.948 52.1153 96.1199 87.8572C99.0305 88.7571 101.913 90.0068 104.723 91.6321L105.731 92.2151C107.724 61.5538 141.505 43.0108 168.667 58.7209L368.993 174.589C396.98 190.776 396.949 231.191 368.936 247.335ZM113.725 96.8387L113.728 93.3217C113.747 67.9183 141.26 52.0627 163.25 64.7816L366.921 182.584C388.911 195.303 388.886 227.057 366.876 239.742L163.021 357.225C141.011 369.909 113.523 354.011 113.543 328.607L113.546 325.232L146.347 306.329L146.334 322.754C146.332 325.064 148.831 326.509 150.832 325.356L345.168 213.36C347.169 212.206 347.171 209.32 345.172 208.163L151.012 95.8622C149.013 94.7059 146.512 96.1473 146.51 98.4567L146.497 115.794L113.725 96.8387Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0)">
              <g id="g2">
                <path
                  className="p6"
                  d="M358.83 226.703L154.975 344.186C142.969 351.104 127.976 342.432 127.987 328.576L128.172 93.2904C128.183 79.4339 143.189 70.7854 155.184 77.723L358.855 195.526C370.849 202.463 370.836 219.784 358.83 226.703Z"
                  stroke="#004578"
                  strokeWidth="30"
                />
                <path
                  id="p5"
                  d="M370.877 251.624L170.369 367.177C139.022 385.243 99.8728 362.599 99.9011 326.419L100.083 94.9975C100.111 58.8169 139.295 36.2348 170.615 54.3497L370.94 170.217C402.26 188.332 402.224 233.558 370.877 251.624Z"
                  stroke="#002B4D"
                  strokeWidth="10"
                />
                <path
                  id="p4"
                  d="M346.36 216.349L152.024 328.345C147.689 330.844 142.275 327.712 142.278 322.709L142.454 98.4109C142.458 93.4072 147.877 90.2841 152.209 92.7893L346.368 205.091C350.7 207.596 350.695 213.85 346.36 216.349Z"
                  stroke="#002B4D"
                  strokeWidth="7"
                />
              </g>
            </g>
          </g>
          <g id="g1" filter="url(#filter1_d)">
            <g filter="url(#filter2_f)">
              <path
                className="p3"
                d="M222.145 222.47L90.1548 298.761C81.4842 303.772 70.6414 297.51 70.6493 287.495L70.7687 134.706C70.7766 124.691 81.6292 118.446 90.2919 123.471L222.163 199.969C230.806 204.984 230.797 217.469 222.145 222.47Z"
                stroke="#15B4F0"
                strokeWidth="30"
              />
            </g>
            <path
              id="p2"
              d="M235.063 242.236L103.772 318.123C79.7609 332.002 49.7346 314.66 49.7564 286.927L49.8756 134.947C49.8974 107.214 79.9507 89.9194 103.94 103.835L235.112 179.929C259.048 193.814 259.021 228.389 235.063 242.236Z"
              stroke="#002B4D"
              strokeWidth="10"
            />
            <path
              id="p1"
              d="M207.232 217.194L93.2413 283.081C88.906 285.587 83.4846 282.455 83.4885 277.448L83.5917 145.495C83.5956 140.488 89.0219 137.365 93.3532 139.878L207.24 205.944C211.562 208.451 211.557 214.694 207.232 217.194Z"
              stroke="#002B4D"
              strokeWidth="7"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="92"
            y="43"
            width="311.54"
            height="343.576"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="43.7242"
            y="92.8818"
            width="223.415"
            height="244.27"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_f"
            x="51.6493"
            y="102.674"
            width="195.99"
            height="216.874"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
          </filter>
          <clipPath id="clip0">
            <rect width="440" height="421" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </LogoContainer>
  );
}
