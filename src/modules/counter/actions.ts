export const increment = () => ({
	type: "COUNTER_INCREMENT",
})

export const decrement = () => ({
	type: "COUNTER_DECREMENT",
})

export const addByAmount = (amount: number) => ({
	type: "COUNTER_ADD_BY_AMOUNT",
	payload: amount,
})

export const reset = () => ({
	type: "COUNTER_RESET",
})
