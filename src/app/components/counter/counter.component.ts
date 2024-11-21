import {Component, Input, OnInit} from '@angular/core';
import {SilenceService} from '../../services/silence.service';
import {TelegramModel} from '../../shared/models/telegram.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  @Input() count: number = 0;
  list: TelegramModel[] = [];
  constructor(
    public silenseService: SilenceService
  ) {
  }

  ngOnInit() {
    this.list = this.silenseService.telegramList;
  }
}
