import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { TechnosListComponent } from './technos-list/technos-list.component';
import { TechnoDetailsComponent } from './techno-details/techno-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnoAddComponent,
    TechnosListComponent,
    TechnoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
