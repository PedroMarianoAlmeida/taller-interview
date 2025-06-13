"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<string>();
  const [result, setResult] = useState("");

  const postData = async () => {
    const res = await fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify({ name, amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("Post", { name, amount });
    postData();
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form className="flex flex-col gap-2" onSubmit={submitHandler}>
        <input
          placeholder="My Transaction"
          className="border-white border-2 p-4"
          value={name ?? 0}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="200"
          type="number"
          className="border-white border-2 p-4"
          value={amount ?? 0}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
