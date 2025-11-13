import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { counterReducer } from '../modules/counter/reducer.ts';

const rootReducer = combineReducers({
  counter: counterReducer,
})

const store = createStore(rootReducer)

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
