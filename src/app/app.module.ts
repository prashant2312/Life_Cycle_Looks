import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GenderPipe } from './pipes/gender.pipe';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { ErrorComponent } from './components/error/error.component'
import { TonService } from './services/ton.service';
import { HttpClientModule } from "@angular/common/http";
import { DmoDirective } from './dmo.directive';


@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ErrorComponent,
    DmoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
