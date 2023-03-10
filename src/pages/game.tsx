import { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Icon from "react-material-symbols/rounded";

import Questions from "./api/data/questions.json";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Text } from "@/components/Text";

export default function Game() {
  const [currentLevel, setCurrentLevel] = useState<any>([]);
  const [currentQuestions, setCurrentQuestions] = useState<any>([]);
  const [randomCard, setRandomCard] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<any>([]);
  const [gameStatus, setGameStatus] = useState<string>("not started");

  useEffect(() => {
    const level = sessionStorage.getItem("level");
    if (level == "zero") {
      location.href = "/deck";
    } else if (level == "first") {
      setCurrentLevel(1);
      setCurrentQuestions(Questions.Questions.deck1);
    } else if (level == "second") {
      setCurrentLevel(2);
      setCurrentQuestions(Questions.Questions.deck2);
    } else if (level == "third") {
      setCurrentLevel(3);
      setCurrentQuestions(Questions.Questions.deck3);
    }

    //Clean up useEffect hook
    return () => {
      setCurrentLevel([]);
      setCurrentQuestions([]);
    };
  });

  function iniciarJuego() {
    setGameStatus("started");
    let random = Math.floor(Math.random() * currentQuestions.length);

    setCurrentQuestion(currentQuestions[random]);
  }

  function getRandomCard() {
    if (currentQuestions.length === 1) {
      setGameStatus("finished");
    } else {
      currentQuestions.splice(randomCard, 1);

      let random = Math.floor(Math.random() * currentQuestions.length);

      setCurrentQuestion(currentQuestions[random]);

      return random;
    }
  }

  return (
    <>
      <Head>
        <title>Unshaping masculinity</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="w-screen bg-gray-100 h-screen flex flex-col justify-center items-center pb-8"
        style={{
          maxHeight: "-webkit-fill-available",
        }}
      >
        <nav className="flex justify-between items-end px-4 pt-4 w-full">
          <div>
            <Text as="subheader" className="text-black text-left w-full">
              {currentLevel === 1
                ? "Ser un hombre"
                : currentLevel === 2
                ? "C??mo vivo mi masculinidad"
                : "Equidad y violencia de g??nero"}
            </Text>
          </div>
          <Link href="/deck">
            <button className="bg-white flex items-center justify-center rounded-full px-1 py-1 bg-opacity-75">
              <Icon icon="close" size={24} />
            </button>
          </Link>
        </nav>
        <div className="flex flex-col w-full h-full gap-2 items-center justify-center">
          {gameStatus !== "started" ? (
            <Card />
          ) : (
            <Card
              onClick={() => setRandomCard(getRandomCard()!)}
              level={currentLevel}
              question={currentQuestion}
            />
          )}
        </div>
        {gameStatus === "finished" ? (
          <Link href="/deck">
            <Button variant="default">Salir</Button>
          </Link>
        ) : gameStatus === "not started" ? (
          <Button onClick={iniciarJuego} variant="default">
            Iniciar
          </Button>
        ) : (
          <Button onClick={() => getRandomCard()} variant="outlined">
            Sacar otra tarjeta
          </Button>
        )}
      </main>
    </>
  );
}
