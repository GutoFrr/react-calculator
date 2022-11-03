import { ACTIONS } from '../App'

interface IDigitButtonProps {
  dispatch: React.Dispatch<any>
  digit: string
  style: string
}

const DigitButton: React.FC<IDigitButtonProps> = ({
  dispatch,
  digit,
  style,
}) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      className={style}
    >
      {digit}
    </button>
  )
}

export default DigitButton
