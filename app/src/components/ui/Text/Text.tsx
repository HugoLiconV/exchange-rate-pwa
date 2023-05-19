type TextProps = {
  children?: React.ReactNode;
  variant?: "body" | "small";
  color?: "light" | "dark";
};

function Text({ variant = "body", color = "dark", children }: TextProps) {
  const smallClasses = "text-xs text-gray-600";
  const bodyClasses = "text-base text-black font-medium	";
  const fontSizeClasses = variant === "small" ? smallClasses : bodyClasses;
  const textColorClasses = color === "dark" ? "text-black" : "text-white";
  const classes = `${fontSizeClasses} ${textColorClasses}`;
  return <p className={classes}>{children}</p>;
}

export default Text;
