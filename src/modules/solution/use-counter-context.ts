import {useContext} from 'react'
import {CounterContext} from "./counter-context.tsx";

export const useCounterContext = () => {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error('useCounter must be used within CounterProvider')
  }

  return context
}