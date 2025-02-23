import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
  provideClientHydration(), // Bu Angular'ın google ile çalışıp sitelerin daha hızlı rander edilmesi için çalıştırılan bir fonksüyondur.

  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter([
    {
      path: "product",
      loadComponent:() => import("./app.component").then(c => c.AppComponent)
    }
  ], withComponentInputBinding())
]
};
