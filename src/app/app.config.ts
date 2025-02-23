import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter([
    {
      path: "product",
      loadComponent:() => import("./app.component").then(c => c.AppComponent)
    }
  ], withComponentInputBinding())
]
};
