import { CounterRedux, CounterUseState } from '../../modules/counter';


export const CounterPage = () => {
	return (
		<div style={{padding: '24px', fontFamily: 'sans-serif'}}>
			<h1>Пример: счётчик на Redux и useState</h1>

			<p>
				Ниже два независимых счётчика. Один использует глобальный стейт в Redux, второй — локальный
				стейт в компоненте через <code>useState</code>.
			</p>

			<div style={{display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '16px'}}>
				<CounterRedux/>
				<CounterUseState/>
			</div>
		</div>
	);
};
