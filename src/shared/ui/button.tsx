import clsx from "clsx";
import type { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => (
	<button {...props} className={clsx(styles.button, className)}>
		{children}
	</button>
);
