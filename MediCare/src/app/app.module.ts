import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './new/header/header.component';
import { FooterComponent } from './new/footer/footer.component';
import { HomeComponent } from './all_pages/home/home.component';
import { AboutComponent } from './all_pages/about/about.component';
import { ServicesComponent } from './all_pages/services/services.component';
import { DoctorsComponent } from './all_pages/doctors/doctors.component';
import { BookComponent } from './all_pages/book/book.component';
import { ContactComponent } from './all_pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    DoctorsComponent,
    BookComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
