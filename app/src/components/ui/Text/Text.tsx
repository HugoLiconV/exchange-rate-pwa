type TextProps = {
  children?: React.ReactNode;
  variant?: "body" | "xs" | "small";
  color?: "light" | "dark" | "gray-300" | "gray-600";
};

function Text({ variant = "body", color = "dark", children }: TextProps) {
  const fontSizeClasses = getFontSizeClass(variant);
  const textColorClasses = getColorClass(color);
  const classes = `${fontSizeClasses} ${textColorClasses}`;
  return <p className={classes}>{children}</p>;
}

function getFontSizeClass(variant: TextProps["variant"]) {
  switch (variant) {
    case "body":
      return "text-base font-medium";
    case "xs":
      return "text-xs";
    case "small":
      return "text-sm";
    default:
      return "text-base";
  }
}

function getColorClass(color: TextProps["color"] = "dark") {
  switch (color) {
    case "dark":
      return "text-black";
    case "light":
      return "text-white";
    case "gray-300":
      return "text-gray-300";
    case "gray-600":
      return "text-gray-400";
    default:
      return "text-black";
  }
}

export default Text;
