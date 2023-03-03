import classnames from "classnames";

interface TextProps {
  children: React.ReactNode;
  as: "header" | "subheader" | "paragraph";
  className?: string;
  style?: React.CSSProperties;
}

export const Text = ({
  children,
  as,
  className,
  style,
  ...props
}: TextProps) => {
  return (
    <p
      {...props}
      className={classnames(className)}
      style={{
        fontSize:
          as === "header" ? "32px" : as === "subheader" ? "20px" : "16px",

        fontWeight: as === "header" ? 800 : as === "subheader" ? 600 : 500,
      }}
    >
      {children}
    </p>
  );
};
