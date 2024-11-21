import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguagesEnum} from './shared/enums';
import translationsUA from "./assets/i18n/ua.json";
import translationsRU from "./assets/i18n/ru.json";
import {platformBrowser} from '@angular/platform-browser';
import {LanguagesType} from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService
  ) {
  }

  ngOnInit() {
    this.translateService.setTranslation('ua', translationsUA);
    this.translateService.setTranslation('ru', translationsRU);
    this.translateService.addLangs([ LanguagesEnum.UA, LanguagesEnum.RU, LanguagesEnum.BY, LanguagesEnum.EN ]);

    const browserLang = navigator.language.slice(0, 2);
    const allowedLang: string[] = [ LanguagesEnum.UA, LanguagesEnum.RU, LanguagesEnum.BY, LanguagesEnum.EN ];
    if (allowedLang.includes(browserLang)) {
      this.translateService.use(browserLang);
    } else {
      this.translateService.use(LanguagesEnum.UA);
    }
    this.translateService.get('navigation.answer').pipe().subscribe(v => {
      console.log(v);
    });
  }
}
