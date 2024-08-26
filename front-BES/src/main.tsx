import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from '@/components/RootLayout';
import App from '@/App'
import '@/index.css'

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RootLayout>
      <App />
    </RootLayout>
  );
}