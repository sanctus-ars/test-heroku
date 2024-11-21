import { Injectable } from '@angular/core';
import {TelegramModel} from '../shared/models/telegram.model';
import {BaseService} from "./base.service";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SilenceService {
    public telegramList: TelegramModel[] = [];
    constructor(
        private baseService: BaseService,
    ) { }

  add(telegram: TelegramModel): void {
      this.telegramList.push(telegram)
  }

  push(telegram: TelegramModel): Observable<any> {
       return this.baseService.post('/telegrams', {
           data:  {
               "message": [ {
                   "type": "paragraph",
                   "children": [
                       {
                           "type": "text",
                           "text": telegram.message,
                       }
                   ]
               }],
               "public": telegram.public,
               "language": telegram.language,
               "locale": 'ru',
           }
       });
  }

  get(): Observable<any> {
        return this.baseService.get('/telegrams', undefined,false);
  }
}
