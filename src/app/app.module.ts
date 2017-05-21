import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBoxComponenet } from './nav-box/nav-box.component';
import { MenuComponent } from './nav-box/menu/menu.component';
import { SearchBoxComponent } from './nav-box/search-box/search-box.component';
import { ContainerComponent } from './container/container.component';

import { SharedService } from './services/shared.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBoxComponenet,
    MenuComponent,
    SearchBoxComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedService,
              ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
