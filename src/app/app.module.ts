import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Invgen } from './components/modules/invgen/invgen';
import { Ezform } from './components/modules/ezform/ezform';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Service
import { ElectronService } from './providers/electron.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Invgen,
    Ezform
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
