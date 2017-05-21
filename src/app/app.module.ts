import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBoxComponenet } from './nav-box/nav-box.component';
import { MenuComponent } from './nav-box/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBoxComponenet,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
