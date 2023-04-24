import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/modules/modules.module';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartBoxComponent } from './cartpage/cart-box/cart-box.component';
import { HttpClientModule } from '@angular/common/http';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { FormsModule } from '@angular/forms';
import { ScrollPipe } from './pipes/scroll.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartpageComponent,
    CartBoxComponent,
    TypefilterPipe,
    ScrollPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
