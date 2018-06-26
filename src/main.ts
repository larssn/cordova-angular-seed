import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  console.info('Production mode');
  enableProdMode();
}

const bootstrap = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
};

if (!!window['cordova']) {
  console.info('Running on device');
  document.addEventListener('deviceready', bootstrap);
} else {
  console.info('Running in browser');
  bootstrap();
}
