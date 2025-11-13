import { useDispatch, useSelector } from 'react-redux'
import { selectCounterValue } from '../selectors.ts';
import { addByAmount, decrement, increment, reset } from '../actions.ts';
import { Button, Card } from '../../../shared/ui';

export const CounterRedux = () => {
	const dispatch = useDispatch()
	const value = useSelector(selectCounterValue)

	const handleAddFive = () => {
		dispatch(addByAmount(5))
	}

	return (
		<Card title="Счётчик (Redux, classic)">
			<div style={{ fontSize: '32px', marginBottom: '8px' }}>{value}</div>

			<div>
				<Button onClick={() => dispatch(decrement())}>-1</Button>
				<Button onClick={() => dispatch(increment())}>+1</Button>
				<Button onClick={handleAddFive}>+5</Button>
				<Button onClick={() => dispatch(reset())}>Сброс</Button>
			</div>

			<p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
				Классический Redux: диспатчим обычные объекты-экшены, редьюсер — через switch-case.
			</p>
		</Card>
	)
}
