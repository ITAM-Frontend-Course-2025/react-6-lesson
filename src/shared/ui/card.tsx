import type { FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./card.module.css";

interface CardProps {
	title?: string;
	children: ReactNode;
	className?: string;
}

export const Card: FC<CardProps> = ({ title, children, className }) => (
	<section className={clsx(styles.card, className)}>
		{title && <h2 className={styles.title}>{title}</h2>}
		{children}
	</section>
);
