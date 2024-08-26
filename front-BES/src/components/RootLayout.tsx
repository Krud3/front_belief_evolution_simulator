import React from 'react';
import clsx from 'clsx';
import '@/index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        'font-inter',  // Aplica la clase de fuente
        'font-lexend'  // Aplica la clase de fuente
      )}
    >
      <div className="flex h-full flex-col">{children}</div>
    </div>
  );
}
