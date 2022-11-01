import { useReducer } from 'react'
import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'

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
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }

      if (payload.digit === '0' && state.currentOperand === '0') {
        return state
      }
      if (payload.digit === ',' && state.currentOperand.includes(',')) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }

    case ACTIONS.CLEAR:
      return {}

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }

      if (state.currentOperand == null) {
        return state
      }

      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
  }
}

const evaluate = ({ currentOperand, previousOperand, operation }: any) => {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ''

  let computation = null
  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
  }

  return computation?.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat('pt-br', {
  maximumFractionDigits: 0,
})

const formatOperand = (operand: any) => {
  if (operand == null) return
  const [integer, decimal] = operand.split(',')
  if (decimal == null) return INTEGER_FORMATTER.format(integer)

  return `${INTEGER_FORMATTER.format(integer)},${decimal}`
}

const App: React.FC = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">React Calculator</h1>
      {/* calculator */}
      <div className="max-w-xs grid grid-cols-4 grid-rows-7 mx-auto">
        {/* output */}
        <div className="flex flex-col items-end justify-around p-3 bg-neutral-900 col-span-4 shadow-md text-end border-zinc-600 border backdrop-blur-lg">
          {/* previous operand */}
          <div className="text-zinc-400 tracking-[-0.05rem] h-6">
            {formatOperand(previousOperand)} {operation}
          </div>
          {/* current operand */}
          <div className="text-2xl tracking-[-0.05rem] h-8">
            {formatOperand(currentOperand)}
          </div>
        </div>
        {/* operators */}
        <button
          className="col-span-2"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="," dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button
          className="col-span-2"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
    </div>
  )
}

export default App
