import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguagesEnum} from '../../shared/enums';
import {LanguagesType} from '../../shared/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public languagesEnum = LanguagesEnum;
  public currentLang?: string;
  constructor(
    public translateService : TranslateService
  ) {
  }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
    this.translateService.onLangChange.pipe().subscribe((lang) => {
      this.currentLang = lang.lang;
    })
  }

  changeLanguageAction(lang: LanguagesType) {
    this.translateService.use(lang);
  }
}
