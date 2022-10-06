import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultComponent } from './components/result/result.component';
import { AmountPipe } from './pipes/amount.pipe';
import { ButtonComponent } from './components/button/button.component';
import { ListButtonsComponent } from './components/list-buttons/list-buttons.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ResultComponent, AmountPipe, ButtonComponent, ListButtonsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
