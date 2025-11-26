const Loader = ({
  size = 35,
  color = '#7bf1a8',
  strokeWidth = undefined,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  const viewBoxSize = 24 + (padding * 2);
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <circle cx="4" cy="12" r="1.5" fill={color}><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/></circle><circle cx="12" cy="12" r="3" fill={color}><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"/></circle><circle cx="20" cy="12" r="1.5" fill={color}><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/></circle>
    </svg>
  );
};

export default Loader;