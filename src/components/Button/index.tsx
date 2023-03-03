import classnames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  variant:
    | "default"
    | "disabled"
    | "inverted"
    | "inverted-disabled"
    | "outlined"
    | "outlined-disabled";
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames("px-10 py-3 rounded-2xl transition-all", className)}
      style={{
        backgroundColor:
          variant === "default"
            ? "#089899"
            : variant == "disabled"
            ? "rgba(8, 152, 153, 0.16)"
            : variant == "inverted"
            ? "#FFFFFF"
            : variant == "inverted-disabled"
            ? "rgba(255, 255, 255, 0.16)"
            : variant == "outlined"
            ? "transparent"
            : "transparent",
        color:
          variant === "default" || variant == "disabled"
            ? "#FFFFFF"
            : "#089899",
      }}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
