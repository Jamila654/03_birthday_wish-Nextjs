"use client";
import React, { useState } from "react";
import Confetti from "react-confetti";
import { FaBirthdayCake, FaGift } from 'react-icons/fa';
import { GiBalloons } from "react-icons/gi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 4000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-900 relative overflow-hidden">
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Happy Birthday</CardTitle>
            <CardDescription>
              Many many happy returns of the day Sir Asharib!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="candles flex justify-center gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="candle">
                  {isClicked ? (
                    <FaBirthdayCake size={50} color="#FF4500" />
                  ) : (
                    <FaGift size={50} color="#808080" />
                  )}
                </div>
              ))}
            </div>
            <div className="balloons flex justify-center gap-4 mt-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={`balloon transition-transform duration-1000 ${
                    isClicked ? "popped" : ""
                  }`}
                >
                  <GiBalloons size={60} color="#FF69B4" />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleClick}>Click Me</Button>
          </CardFooter>
        </Card>
      </div>
      {isClicked && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          gravity={0.2}
          colors={["#FFC107", "#FF4081", "#3F51B5", "#4CAF50", "#FFEB3B"]}
        />
      )}

      <style jsx>{`
        .candles {
          display: flex;
          gap: 1rem;
        }

        .balloons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .popped {
          transform: scale(0);
        }
      `}</style>
    </main>
  );
}


