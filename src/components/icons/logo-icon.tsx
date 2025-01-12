export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="1024"
      fill="none"
      viewBox="0 0 1024 1024"
      className={className}
    >
      <title>Web Timer</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M512 1024c282.77 0 512-229.23 512-512 0-53.464-8.19-105.015-23.4-153.464L512 640 23.397 358.536C8.195 406.985 0 458.536 0 512c0 282.77 229.23 512 512 512Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M944.945 238.558 512 488 79.055 238.558C169.794 95.191 329.78 0 512 0s342.206 95.191 432.945 238.558Z"
      />
      <path
        fill="currentColor"
        d="M233.27 479.436 512 640v384C229.23 1024 0 794.77 0 512S229.23 0 512 0v488L298.373 364.918C287.944 358.018 275.441 354 262 354c-36.451 0-66 29.549-66 66 0 26.153 15.212 48.754 37.27 59.436Z"
      />
    </svg>
  );
};
