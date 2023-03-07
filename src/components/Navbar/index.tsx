import Image from "next/image";
import Link from "next/link";

import Icon from "react-material-symbols/rounded";

interface NavbarProps {
  page: string;
}

export const Navbar = ({ page }: NavbarProps) => {
  return (
    <nav className="flex justify-between px-5 py-2 bg-white fixed w-full top-0">
      <Image
        src={"/images/logo.png"}
        alt="Unshaping masculinity logo"
        width={88}
        height={50}
      />
      <div className="flex gap-5">
        <Link href="/" className="flex items-center justify-center">
          <Icon
            icon="home"
            size={32}
            color={page === "home" ? "#089899" : "black"}
          />
        </Link>
        <Link
          href="/retroalimentacion"
          className="flex items-center justify-center"
        >
          <Icon
            icon="reviews"
            size={32}
            color={page === "retroalimentacion" ? "#DF7E69" : "black"}
          />
        </Link>
        <Link
          href="/agradecimientos"
          className="flex items-center justify-center"
        >
          <Icon
            icon="favorite"
            size={32}
            color={page === "agradecimientos" ? "#518CED" : "black"}
          />
        </Link>
      </div>
    </nav>
  );
};
