// Service worker mínimo: só precisa existir e ter um handler de 'fetch'
// pra o navegador considerar o site instalável como app.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('fetch', () => {
  // deixa passar direto pra rede, sem cache por enquanto
});
