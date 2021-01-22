import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { MatomoModule } from 'ngx-matomo';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FormComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, MatomoModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
