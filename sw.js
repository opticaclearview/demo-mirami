// MIRAMI CRM — service worker mínimo (permite instalar la app).
// No guarda copias en caché: siempre se usa la última versión subida a GitHub.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
