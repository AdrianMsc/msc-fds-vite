export const cspConfig = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'http://localhost:5173',
    'http://localhost:4242',
    'https://msc-component-status-ws.vercel.app/',
    'https://msc-component-status-ws-dev.vercel.app/',
    'https://msc-component-status-ws-dev.vercel-dev.app/',
    'https://msc-fds-vite-dev.vercel.app/',
    'https://msc-fds-vite.vercel.app/',
    'https://*.auth0.com',
  ],
  'connect-src': [
    "'self'",
    'http://localhost:5173',
    'http://localhost:4242',
    'https://msc-component-status-ws.vercel.app/',
    'https://msc-component-status-ws-dev.vercel.app/',
    'https://msc-component-status-ws-dev.vercel-dev.app/',
    'https://msc-fds-vite-dev.vercel.app/',
    'https://msc-fds-vite.vercel.app/',
    'https://*.auth0.com',
  ],
  'img-src': ["'self'", 'data:', 'blob:', 'https:'],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    'http://localhost:5173',
    'http://localhost:4242',
    'https://msc-component-status-ws.vercel.app/',
    'https://msc-component-status-ws-dev.vercel.app/',
    'https://msc-component-status-ws-dev.vercel-dev.app/',
    'https://msc-fds-vite-dev.vercel.app/',
    'https://msc-fds-vite.vercel.app/',
    'https://cdn.jsdelivr.net',
  ],
  'font-src': ["'self'", 'data:', 'https:'],
  'frame-src': [
    "'self'",
    'http://localhost:5173',
    'http://localhost:4242',
    'https://msc-component-status-ws.vercel.app/',
    'https://msc-component-status-ws-dev.vercel.app/',
    'https://msc-component-status-ws-dev.vercel-dev.app/',
    'https://msc-fds-vite-dev.vercel.app/',
    'https://msc-fds-vite.vercel.app/',
    'https://*.auth0.com',
  ],
};

export const getCspString = () => {
  return Object.entries(cspConfig)
    .map(([directive, values]) => `${directive} ${values.join(' ')}`)
    .join('; ');
};
