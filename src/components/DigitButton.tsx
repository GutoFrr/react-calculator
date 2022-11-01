import { ACTIONS } from '../App'

interface IDigitButtonProps {
  dispatch: React.Dispatch<any>
  digit: string
}

const DigitButton: React.FC<IDigitButtonProps> = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}

export default DigitButton
