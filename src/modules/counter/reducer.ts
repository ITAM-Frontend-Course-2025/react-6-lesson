const initialState = {
	value: 0,
}

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "COUNTER_INCREMENT":
			return { ...state, value: state.value + 1 }

		case "COUNTER_DECREMENT":
			return { ...state, value: state.value - 1 }

		case "COUNTER_ADD_BY_AMOUNT":
			return { ...state, value: state.value + (action.payload ?? 0) }

		case "COUNTER_RESET":
			return { ...state, value: 0 }

		default:
			return state
	}
}
