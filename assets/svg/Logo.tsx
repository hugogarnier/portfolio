export const Logo = ({
  width,
  height,
  color = '#E6E6E6',
  bgColor = '#0C0C0C',
}: {
  width: number;
  height: number;
  color?: string;
  bgColor?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="70" fill={bgColor} />
      <path
        d="M41.1488 36.6688H28.9632V50.8704H25.2V19.6H28.9632V33.3984H41.1488V19.6H44.912V50.8704H41.1488V36.6688Z"
        fill={color}
      />
    </svg>
  );
};
