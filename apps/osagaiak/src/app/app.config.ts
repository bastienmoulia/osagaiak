import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    //provideClientHydration(withEventReplay()),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
  ],
};
