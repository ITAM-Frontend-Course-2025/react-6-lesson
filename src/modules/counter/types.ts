export type State = {
  counter: number
}
type BaseActionModel<TType, TPayload> = {
  type: TType,
  payload: TPayload,
}

type DecrementAction = BaseActionModel<'decrement', undefined>
type IncrementAction = BaseActionModel<'increment', undefined>
type DoubleAction = BaseActionModel<'double', undefined>
type AddAmountAction = BaseActionModel<'add-amount', number>
type ResetAction = BaseActionModel<'reset', undefined>
export type Action = DecrementAction | IncrementAction | DoubleAction | AddAmountAction | ResetAction
