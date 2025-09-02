import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { BackgroundBtnDirective } from './directives/background-btn.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { TextPipe } from './pipes/text.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductComponent,
    BackgroundBtnDirective,
    CurrencyPipe,
    TextPipe,
    PhoneNumberPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
