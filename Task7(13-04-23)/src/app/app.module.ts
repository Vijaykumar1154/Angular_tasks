import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddlebarComponent } from './middlebar/middlebar.component';
import { DownbarComponent } from './downbar/downbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MiddlebarComponent,
    DownbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
