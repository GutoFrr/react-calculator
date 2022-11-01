import { ACTIONS } from '../App'

interface IOperationButtonProps {
  dispatch: React.Dispatch<any>
  operation: string
}

const OperationButton: React.FC<IOperationButtonProps> = ({
  dispatch,
  operation,
}) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}

export default OperationButton
