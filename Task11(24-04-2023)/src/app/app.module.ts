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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollPipe } from './pipes/scroll.pipe';
import { ComplaintPageComponent } from './complaint-page/complaint-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartpageComponent,
    CartBoxComponent,
    TypefilterPipe,
    ScrollPipe,
    ComplaintPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
