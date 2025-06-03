import React from 'react';

export default function AgentUploadPage() {
  return (
    <main className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-blue-500">Upload Your AI Agent</h1>
      <form className="mt-4 space-y-4">
        <input className="w-full p-2 text-black" placeholder="Agent Name" />
        <input className="w-full p-2 text-black" placeholder="Category" />
        <textarea className="w-full p-2 text-black" placeholder="Description" />
        <input className="w-full p-2 text-black" placeholder="Install Link" />
        <button className="px-4 py-2 bg-blue-500 rounded">Submit</button>
      </form>
    </main>
  );
}
