import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import { Button, Card } from "../../../shared/ui";
import styles from "./counter-feature.module.css";

type CounterSetter = Dispatch<SetStateAction<number>>;

interface CounterSectionProps {
	value: number;
	setValue: CounterSetter;
}

interface SupportSectionProps {
	value: number;
	setValue: CounterSetter;
}

export const CounterFeature: FC = () => {
	const [value, setValue] = useState(0);

	return (
		<div className={styles.wrapper}>
			<CounterSection value={value} setValue={setValue} />
			<SupportSection value={value} setValue={setValue} />
		</div>
	);
};

const CounterSection: FC<CounterSectionProps> = ({ value, setValue }) => (
	<Card title="Управление через пропсы">
		<CounterPanel value={value} setValue={setValue} />
	</Card>
);

const CounterPanel: FC<CounterSectionProps> = ({ value, setValue }) => (
	<div className={styles.panel}>
		<CounterDisplay value={value} />
		<CounterControls value={value} setValue={setValue} />
	</div>
);

const CounterDisplay: FC<Pick<CounterSectionProps, "value">> = ({ value }) => (
	<div>
		<p className={styles.value}>{value}</p>
		<p className={styles.valueNote}>Число хранится в CounterFeature и передаётся вниз по иерархии.</p>
	</div>
);

const CounterControls: FC<CounterSectionProps> = ({ value, setValue }) => (
	<div>
		<div className={styles.primaryActions}>
			<DecrementButton setValue={setValue} />
			<IncrementByOneButton setValue={setValue} />
			<DoubleButton value={value} setValue={setValue} />
		</div>

		<div className={styles.secondaryActions}>
			<p className={styles.secondaryTitle}>Быстрые действия</p>
			<IncrementByTenButton setValue={setValue} />
			<ResetButton setValue={setValue} />
		</div>
	</div>
);

const DecrementButton: FC<Pick<CounterSectionProps, "setValue">> = ({ setValue }) => (
	<Button onClick={() => setValue((prev) => prev - 1)}>-1</Button>
);

const IncrementByOneButton: FC<Pick<CounterSectionProps, "setValue">> = ({ setValue }) => (
	<Button onClick={() => setValue((prev) => prev + 1)}>+1</Button>
);

const DoubleButton: FC<CounterSectionProps> = ({ value, setValue }) => (
	<Button onClick={() => setValue(value * 2)}>×2</Button>
);

const IncrementByTenButton: FC<Pick<CounterSectionProps, "setValue">> = ({ setValue }) => (
	<Button onClick={() => setValue((prev) => prev + 10)}>+10</Button>
);

const ResetButton: FC<Pick<CounterSectionProps, "setValue">> = ({ setValue }) => (
	<Button onClick={() => setValue(0)}>Сброс</Button>
);

const SupportSection: FC<SupportSectionProps> = ({ value, setValue }) => (
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

		<PracticeReminder value={value} setValue={setValue} />
	</Card>
);

const PracticeReminder: FC<SupportSectionProps> = ({ value, setValue }) => (
	<div>
		<p className={styles.warning}>
			Попробуйте объяснить, откуда здесь берётся setValue. При усложнении проекта следить за такими связями становится
			почти невозможно.
		</p>
		<Button onClick={() => setValue(value + 5)}>Ещё +5 из обучающего блока</Button>
	</div>
);

