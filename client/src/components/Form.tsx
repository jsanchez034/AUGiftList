'use client';

import { Inter } from 'next/font/google'
import { FormEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Form() {
  const [result, setResult] = useState(null);

  const onSubmit = async (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const formJson = Object.fromEntries(formData.entries());

    const response = await fetch('/api/prover', {
      method  : 'POST',
      body : JSON.stringify(formJson)
    });

     const json = await response.json();
    
    setResult(json.gift);
  };

  return (
    <div className="App">
      <h1 className={`${inter.className} mb-3 text-2xl font-semibold text-blue-700`}>Merkle Tree Gift List Prover</h1>
      <h3 className={`${inter.className} mb-3 text-1xl font-semibold text-blue-700`}>Enter your name to see if you are on the list!</h3>
      <form onSubmit={onSubmit} className="flex flex-col items-start">
        <input className="text-black rounded-md border-2 border-gray-400 py-2 px-4 mb-4 w-full" type='text' name='name' placeholder="Your name" />
        <button type='submit' className="bg-blue-500 w-full text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300">Check</button>
      </form>
      <h2 className={`${inter.className} mt-6 mb-3 text-lg font-semibold text-blue-700`}>{result}</h2>
    </div>
  )
}
