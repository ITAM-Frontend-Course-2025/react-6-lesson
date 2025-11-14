import type {Action, State} from "../counter/types.ts";

export function reducer(state:State, action: Action):State{
  switch (action.type){
    case "double": {
      return {
        ...state,
        counter: state.counter * 2
      };
    }
    case "add-amount":{
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    case "reset": {
      return {
        ...state,
        counter: 0
      };
    }
    case "increment":{
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "decrement":{
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    default: {
      return state;
    }
  }
}
