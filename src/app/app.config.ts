import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_CONFIG } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { loaderInterceptor } from './commons/interceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: loaderInterceptor,
      multi: true,
    },
    provideRouter(routes),
  ],
};
