// Ensure window.fetch setter compatibility in environments where fetch is getter-only
try {
  const currentFetch = window.fetch;
  let customFetch = currentFetch;
  const proto = (typeof Window !== 'undefined' && Window.prototype) || Object.getPrototypeOf(window);
  if (proto) {
    try {
      const desc = Object.getOwnPropertyDescriptor(proto, 'fetch');
      if (desc && (!desc.set || desc.writable === false)) {
        Object.defineProperty(proto, 'fetch', {
          get() { return customFetch || currentFetch; },
          set(fn) { customFetch = fn; },
          configurable: true,
          enumerable: true
        });
      }
    } catch {}
  }
  try {
    const wDesc = Object.getOwnPropertyDescriptor(window, 'fetch');
    if (!wDesc || !wDesc.set || wDesc.writable === false) {
      Object.defineProperty(window, 'fetch', {
        get() { return customFetch || currentFetch; },
        set(fn) { customFetch = fn; },
        configurable: true,
        enumerable: true
      });
    }
  } catch {}
} catch {}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
