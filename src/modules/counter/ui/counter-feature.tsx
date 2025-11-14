import { type FC} from "react";
import { Button, Card } from "../../../shared/ui";
import styles from "./counter-feature.module.css";

import {useCounterContext} from "../../solution/use-counter-context.ts";


export const CounterFeature: FC = () => {
	// const [value, setValue] = useState(0);


	return (
		<div className={styles.wrapper}>
			<CounterSection  />
			<SupportSection/>
		</div>
	);
};

const CounterSection: FC = () => (
	<Card title="Управление через пропсы">
		<CounterPanel/>
	</Card>
);

const CounterPanel: FC = () => (
	<div className={styles.panel}>
		<CounterDisplay  />
		<CounterControls/>
	</div>
);

const CounterDisplay: FC = () => {
	const context = useCounterContext()
	const {state} = context
	const {counter} = state
	return (
		<div>
			<p className={styles.value}>{counter}</p>
			<p className={styles.valueNote}>Число хранится в CounterFeature и передаётся вниз по иерархии.</p>
		</div>
	)
}


const CounterControls: FC = () => (
	<div>
		<div className={styles.primaryActions}>
			<DecrementButton />
			<IncrementByOneButton/>
			<DoubleButton/>
		</div>

		<div className={styles.secondaryActions}>
			<p className={styles.secondaryTitle}>Быстрые действия</p>
			<IncrementByTenButton />
			<ResetButton/>
		</div>
	</div>
);

const DecrementButton: FC = () => {
	const context = useCounterContext()
	const {onRemoveOneClick} = context
	return (
		<Button onClick={onRemoveOneClick}>-1</Button>
	)
}




const IncrementByOneButton: FC = () => {
	const context = useCounterContext()
	const {onAddOneClick} = context
	return (
		<Button onClick={onAddOneClick}>+1</Button>
	)
}


const DoubleButton: FC = () => {
	const context = useCounterContext()
	const {onDoubleClick} = context
	return (
		<Button onClick={onDoubleClick}>×2</Button>
	)
}



const IncrementByTenButton: FC = () => {
	const context = useCounterContext()
	const {onAddAmountClick} = context

	return (
		<Button onClick={() => onAddAmountClick(10)}>+10</Button>
	)
}



const ResetButton: FC = () => {
	const context = useCounterContext()
	const {onResetClick} = context
	return (
		<Button onClick={onResetClick}>Сброс</Button>
	)
}



const SupportSection: FC = () => (
	<Card title="Почему работать через props это неудобно?" className={styles.supportCard}>
		<p className={styles.hint}>
			setValue передаётся через пять разных компонентов, хотя необходимость изменить значение есть только у кнопок.
		</p>

		<ul className={styles.hintList}>
			<li>CounterFeature держит состояние и раздаёт setValue.</li>
			<li>CounterSection и CounterPanel просто пробрасывают пропсы дальше.</li>
			<li>CounterControls разделяет логику и всё равно прокидывает setValue.</li>
			<li>
				Отдельные кнопки (IncrementByOneButton, IncrementByTenButton) берут ту же функцию, хотя находятся глубоко в
				дереве.
			</li>
		</ul>

		<PracticeReminder  />
	</Card>
);

const PracticeReminder: FC = () => {
	const context = useCounterContext()
	const {onAddAmountClick} = context
	return (
			<div>
				<p className={styles.warning}>
					Попробуйте объяснить, откуда здесь берётся setValue. При усложнении проекта следить за такими связями становится
					почти невозможно.
				</p>
				<Button onClick={() => onAddAmountClick(5)}>Ещё +5 из обучающего блока</Button>
			</div>
		)
}



