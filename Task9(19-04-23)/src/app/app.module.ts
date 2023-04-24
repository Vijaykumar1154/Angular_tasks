import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceBoxComponent } from './pages/home/service-box/service-box.component';
import { FeedbackBoxComponent } from './pages/testimonial/feedback-box/feedback-box.component';
import { QuoteitPipe } from './pipes/quoteit.pipe';
import { FormsModule } from '@angular/forms';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TestimonialComponent,
    MenuBarComponent,
    ContactBoxComponent,
    ServiceBoxComponent,
    FeedbackBoxComponent,
    QuoteitPipe,
    TypefilterPipe,
    EnquiryFormComponent
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
