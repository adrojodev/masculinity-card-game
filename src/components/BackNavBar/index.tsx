import Link from "next/link";

import Icon from "react-material-symbols/rounded";

export const BackNavBar = () => {
  return (
    <div className="w-full mt-4">
      <Link href="/" className="flex items-center">
        <Icon icon="chevron_left" size={32} />
        <span>Regresar</span>
      </Link>
    </div>
  );
};
