'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <main className="flex min-w-screen flex-col items-center justify-center p-24">
  
      <h1 className="text-red font-bold">Hello World</h1>

      <p className="mt-4 text-red-500 font-bold">{count}</p>
     <Button
     size={"default"}
      variant={"default"}
      onClick={increment}
     >Click</Button>
    </main>
  );
}
