import React from 'react'

interface CardProps {
  title?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        maxWidth: '320px',
      }}
    >
      {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
      {children}
    </div>
  )
}
