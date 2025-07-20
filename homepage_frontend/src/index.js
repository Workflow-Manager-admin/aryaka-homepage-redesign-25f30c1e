import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
  Advanced Build/Env Diagnostic Code:
  Checks for and unregisters any service worker left from a previous CRA build (which can cause old assets/styles to persist due to caching).
  This fixes the most common "old styles persist" issue on projects created with create-react-app even if you did not enable PWA support manually.
*/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        registration.unregister();
      }
    }).catch(function(err) {
      // No service worker, or unregister error
    });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
