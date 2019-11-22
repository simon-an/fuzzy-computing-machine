import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import {
  HttpClientInMemoryWebApiModule,
  InMemoryDbService
} from 'angular-in-memory-web-api';
import { SafeInMemDataService } from './services/in-memory-safe.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TimingInterceptor} from './interceptors/timing.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(SafeInMemDataService, {
          delay: 500,
          dataEncapsulation: false,
          passThruUnknownUrl: true
        })
  ],
  providers: [
    { provide: SafeInMemDataService, useExisting: InMemoryDbService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
