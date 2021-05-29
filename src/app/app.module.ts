import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormDemoComponent } from './Components/form-demo/form-demo.component';
import {FormsModule} from '@angular/forms'
import { SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { AddProductsComponent } from './Components/add-products/add-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormDemoComponent,
    AddProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
