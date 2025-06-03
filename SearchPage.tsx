import React from 'react';

export default function SearchPage() {
  return (
    <main className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-blue-500">Search AI Agents</h1>
      <input className="mt-4 w-full p-2 text-black" placeholder="Search for an agent..." />
    </main>
  );
}
