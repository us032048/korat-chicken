import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700 text-center">
        <h1 className="text-3xl font-bold mb-4 text-emerald-400">
          SUT Farm: Korat Chicken App
        </h1>
        <p className="text-slate-400 mb-6">
          โครงสร้างโปรเจกต์ React + Vite + TypeScript + Tailwind CSS พร้อมสำหรับการพัฒนา UI
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all rounded-lg font-medium text-slate-950 shadow-md"
          >
            Count is: {count}
          </button>

          <div className="text-xs text-slate-500 mt-4">
            Edit <code className="text-amber-300">src/app/App.tsx</code> to start building your UI
          </div>
        </div>
      </div>
    </div>
  )
}
