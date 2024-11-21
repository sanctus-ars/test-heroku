import {Component, OnInit} from '@angular/core';
import {SilenceService} from '../../services/silence.service';
import {TelegramModel} from '../../shared/models/telegram.model';

@Component({
  selector: 'app-silence-list',
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss'
})
export class AnswersComponent implements OnInit {
  public list: TelegramModel[] = [];
  public totalCount: number = 0;
  constructor(
    public silenceService: SilenceService,
  ) {
  }

  ngOnInit() {
    this.silenceService.get().pipe().subscribe((v: any) => {
      this.list = v['data'].map((x: any) => {
        const model = new TelegramModel();
        model.public = x.public;
        model.language = x.language;
        model.message = x.message[0].children[0].text;
        return model;
      });
      this.totalCount = v['meta'].pagination.total;
      console.log(this.totalCount);
    })
  }
}
