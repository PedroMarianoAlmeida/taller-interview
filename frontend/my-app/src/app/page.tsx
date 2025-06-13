"use client";
import { useState, useEffect } from "react";

interface TransactionItem {
  transaction: string;
  amount: number;
}

export default function Home() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState<string>();
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);

  const postData = async () => {
    try {
      const res = await fetch("http://localhost:3001/", {
        method: "POST",
        body: JSON.stringify({ name, amount }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.statusText !== "OK") throw new Error();
      const data = await res.json();
      setTransactions(data.transactions);
    } catch (e) {
      console.log({ e });
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/");

      if (res.statusText !== "OK") throw new Error();
      const data = await res.json();
      setTransactions(data.transactions);
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ transactions });
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

      {transactions.length > 0 &&
        transactions.map(({ amount, transaction }, index) => (
          <div key={index}>
            <p className="text-white">
              {transaction} - {amount}
            </p>
          </div>
        ))}
    </div>
  );
}
