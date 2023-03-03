import classnames from "classnames";

interface RadioProps {
  children: React.ReactNode;
  className?: string;
  name: string;
  id: string;
  selected: string;
  setSelected: (value: string) => void;
}

export const Radio = ({
  children,
  className,
  name,
  id,
  selected,
  setSelected,
  ...props
}: RadioProps) => {
  return (
    <div
      className={classnames(
        "flex border-2 border-red-600 border-dashed py-3 px-4 rounded-2xl w-full transition-all",
        className
      )}
      style={{ backgroundColor: selected === id ? "#FEE2E2" : "transparent" }}
      onClick={() => setSelected(id)}
    >
      <label className="flex items-center gap-2 text-red-600">
        <input type="radio" name={name} id={id} className="hidden" {...props} />
        {children}
      </label>
    </div>
  );
};
