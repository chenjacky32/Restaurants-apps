import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in this browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
  try {
    await wb.register();
    console.log('Service Worker Registered');
  } catch (error) {
    console.log('Service Worker Registration Failed', error);
  }
};

export default swRegister;
