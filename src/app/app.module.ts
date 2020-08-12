import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ClientDetailsComponent } from './modules/client-details/client-details.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
