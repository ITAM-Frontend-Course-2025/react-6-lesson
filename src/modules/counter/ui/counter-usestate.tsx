import { useState } from 'react';
import { Button, Card } from '../../../shared/ui';

export const CounterUseState = () => {
	const [value, setValue] = useState(0);

	const increment = () => setValue((prev) => prev + 1);
	const decrement = () => setValue((prev) => prev - 1);
	const addFive = () => setValue((prev) => prev + 5);
	const reset = () => setValue(0);

	return (
		<Card title="Счётчик (useState)">
			<div style={{fontSize: '32px', marginBottom: '8px'}}>{value}</div>

			<div>
				<Button onClick={decrement}>-1</Button>
				<Button onClick={increment}>+1</Button>
				<Button onClick={addFive}>+5</Button>
				<Button onClick={reset}>Сброс</Button>
			</div>

			<p style={{fontSize: '12px', color: '#666', marginTop: '8px'}}>
				Это локальный стейт. Значение живёт только внутри этого компонента.
			</p>
		</Card>
	);
};
