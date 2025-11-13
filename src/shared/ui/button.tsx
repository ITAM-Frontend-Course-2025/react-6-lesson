import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			style={{
				padding: '8px 12px',
				margin: '4px',
				borderRadius: '4px',
				border: '1px solid #ccc',
				cursor: 'pointer',
				background: '#f5f5f5',
			}}
		>
			{children}
		</button>
	)
}
