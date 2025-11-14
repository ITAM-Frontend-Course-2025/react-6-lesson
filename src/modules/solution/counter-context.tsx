import {createContext} from 'react'

export type CounterContextType = {
  state: {
    counter: number
  },
  onAddOneClick: () => void,
  onRemoveOneClick: () => void,
  onResetClick: () => void,
  onAddAmountClick: (arg: number) => void
  onDoubleClick: () => void,

}

export const CounterContext = createContext<CounterContextType | undefined>(undefined)