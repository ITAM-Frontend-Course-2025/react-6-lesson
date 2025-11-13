import type { FC } from "react";
import { CounterFeature } from "../../modules/counter";
import styles from "./counter-page.module.css";

export const CounterPage: FC = () => {
	return (
		<div className={styles.page}>
			<section className={styles.header}>
				<h1 className={styles.title}>Проп-дриллинг счётчика</h1>
				<p className={styles.description}>
					Состояние хранится в родительском компоненте и передаётся через цепочку пропсов до кнопок, которые
					меняют значение. Обратите внимание, насколько сильно распространяется setState.
				</p>
			</section>

			<CounterFeature />
		</div>
	);
};

