import { ACTIONS } from '../App'

interface IOperationButtonProps {
  dispatch: React.Dispatch<any>
  operation: string
  style: string
}

const OperationButton: React.FC<IOperationButtonProps> = ({
  dispatch,
  operation,
  style,
}) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      className={style}
    >
      {operation}
    </button>
  )
}

export default OperationButton
