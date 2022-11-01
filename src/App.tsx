const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">React Calculator</h1>
      {/* calculator */}
      <div className="w-80 grid grid-cols-4 grid-rows-6 border-4 border-blue-600 mx-auto">
        {/* output */}
        <div className="bg-neutral-800 text-white col-span-4">800</div>
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
