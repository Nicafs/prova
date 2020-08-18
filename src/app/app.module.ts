import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';

/* Modulos de Estrutura */
import { SharedModule } from './shared/shared.module';

/* Modulos da Aplicação */
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'Insira sua Key aqui',
    }),
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
