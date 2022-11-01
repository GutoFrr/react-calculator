import { useReducer } from 'react'
import DigitButton from './components/DigitButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ''} ${payload.digit}`,
      }
  }
}

const App: React.FC = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">React Calculator</h1>
      {/* calculator */}
      <div className="max-w-xs grid grid-cols-4 grid-rows-7 mx-auto">
        {/* output */}
        <div className="flex flex-col items-end justify-around p-2 bg-neutral-900 col-span-4 shadow-md text-end border-zinc-600 border backdrop-blur-lg">
          {/* previous operand */}
          <div className="text-lg text-zinc-400">
            {previousOperand} {operation}
          </div>
          {/* current operand */}
          <div className="text-3xl">{currentOperand}</div>
        </div>
        {/* operators */}
        <button className="col-span-2">AC</button>
        <button>DEL</button>
        <button>÷</button>
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button>*</button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <button>+</button>
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <button>-</button>
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="col-span-2">=</button>
      </div>
    </div>
  )
}

export default App
