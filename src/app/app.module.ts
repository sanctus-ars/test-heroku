import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswersComponent } from './components/answers/answers.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  TranslateModule,
  TranslatePipe,
  TranslateDirective,
  TranslateService
} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SilenceComponent} from './components/silence/silence.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    SilenceComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    TranslatePipe,
    HttpClientModule,
    TranslateDirective,
    TranslateModule.forRoot({
      defaultLanguage: 'ua',
      useDefaultLang: true,
    }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
