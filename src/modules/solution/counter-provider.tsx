import {CounterContext} from "./counter-context.tsx";
import {type ReactNode, useReducer} from "react";

import {reducer} from "./counter-reducer.ts";

type CounterProviderProps = {
  children: ReactNode
}

export const CounterProvider = ({children}: CounterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {counter: 0})

  const onDoubleClick = () => {
    dispatch({
      type: 'double',
      payload: undefined
    });
  }

  const onAddAmountClick = (amount: number) => {
    dispatch({
      type: 'add-amount',
      payload: amount
    });
  }

  const onAddOneClick = () => {
    dispatch({
      type: 'increment',
      payload: undefined
    });
  }

  const onRemoveOneClick = () => {
    dispatch({
      type: 'decrement',
      payload: undefined
    });
  }

  const onResetClick = () => {
    dispatch({
      type: 'reset',
      payload: undefined
    });
  }

  return (
    <CounterContext value={{state, onResetClick, onDoubleClick, onAddAmountClick, onAddOneClick, onRemoveOneClick }}>
      {children}
    </CounterContext>
  )
}
