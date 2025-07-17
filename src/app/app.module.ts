import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // deve estar presente


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
