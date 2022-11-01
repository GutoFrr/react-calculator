const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">React Calculator</h1>
      {/* calculator */}
      <div className="max-w-xs grid grid-cols-4 grid-rows-7 mx-auto">
        {/* output */}
        <div className="flex flex-col items-end justify-around p-2 bg-neutral-900 col-span-4 shadow-md text-end border-zinc-600 border backdrop-blur-lg">
          {/* prev operand */}
          <div className="text-lg text-zinc-400">3 *</div>
          {/* current operand */}
          <div className="text-3xl">3</div>
        </div>
        {/* operators */}
        <button className="col-span-2">AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="col-span-2">=</button>
      </div>
    </div>
  )
}

export default App
