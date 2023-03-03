import Image from "next/image";
import Icon from "react-material-symbols/rounded";

import { Text } from "../Text";

interface CardProps {
  level?: 1 | 2 | 3;
  question?: string;
  onClick?: () => void;
}

export const Card = ({ level, question, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white w-3/4 h-96 rounded-2xl px-4 py-4"
      style={{
        background: level
          ? "#ffffff"
          : `repeating-linear-gradient(to bottom, transparent, transparent 5px, #089899 5px, #089899 10px),
    repeating-linear-gradient(to right, #69C9CA, #69C9CA 5px, #089899 5px, #089899 10px)`,
      }}
    >
      <div
        className="bg-transparent h-full border-4 rounded-xl flex flex-col items-center justify-between"
        style={{ borderColor: "#089899", display: level ? "flex" : "none" }}
      >
        <div
          className="flex flex-col items-center pt-2"
          style={{ color: "#089899" }}
        >
          <Icon
            icon={level === 1 ? "eco" : level === 2 ? "spa" : "filter_vintage"}
            size={24}
          />
          <Text as="subheader">Deck {level}</Text>
        </div>
        <Text className="text-center px-4" as="paragraph">
          {question}
        </Text>
        <Image
          src="/images/logo.png"
          alt="Unshaping masculinity logo"
          width={100}
          height={100}
        />
      </div>
      <div
        className="bg-transparent h-full border-4 rounded-xl flex flex-col items-center justify-between"
        style={{ borderColor: "#ffffff", display: level ? "none" : "flex" }}
      ></div>
    </div>
  );
};
