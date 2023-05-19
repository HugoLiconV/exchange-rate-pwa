type SpacerProps = {
  size?: number;
  horizontal?: boolean;
  flexShrink?: number;
};

function Spacer({ size = 1, horizontal, flexShrink }: SpacerProps) {
  const sizeClassName = `${horizontal ? "w" : "h"}-${size}`;
  const flexShrinkClassName = `shrink-${flexShrink || 0}`;
  return <div className={`${flexShrinkClassName} ${sizeClassName}`} />;
}

export default Spacer;
