import Image from "next/image";

import Icon from "react-material-symbols/rounded";

interface NavbarProps {
  page: string;
}

export const Navbar = ({ page }: NavbarProps) => {
  return (
    <nav className="flex justify-between pr-5">
      <Image
        src={"/images/logo.png"}
        alt="Unshaping masculinity logo"
        width={150}
        height={80}
      />
      <div className="flex gap-5">
        <button>
          <Icon
            icon="home"
            size={32}
            color={page === "home" ? "#089899" : "black"}
          />
        </button>
        <button>
          <Icon
            icon="reviews"
            size={32}
            color={page === "greetings" ? "#518CED" : "black"}
          />
        </button>
        <button>
          <Icon
            icon="favorite"
            size={32}
            color={page === "feedback" ? "#518CED" : "black"}
          />
        </button>
      </div>
    </nav>
  );
};
