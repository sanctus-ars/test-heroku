import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SilenceService} from '../../services/silence.service';
import {TelegramModel} from '../../shared/models/telegram.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-silence',
  templateUrl: './silence.component.html',
  styleUrl: './silence.component.scss'
})
export class SilenceComponent implements OnInit {
  public textAreaControl =  new FormControl<string>('', { validators: [Validators.required] });
  public showPopup: boolean = false;
  public totalCount: number = 0;
  public silenceForm = new FormGroup({
    message: this.textAreaControl,
  })

  constructor(
    public translateService: TranslateService,
    public silenceService: SilenceService,
  ) {
  }

  ngOnInit(): void {
    this.silenceService.get().pipe().subscribe((v: any) => {
      this.totalCount = v['meta'].pagination.total;
      console.log(this.totalCount);
    })
  }


  submitAction(publish: boolean): void {
    const message = this.textAreaControl.value;
    if (!!message?.trim()) {
      const model = new TelegramModel();
      model.public = publish;
      model.message = message;
      model.language = this.translateService.currentLang;

      this.silenceService.push(model).pipe().subscribe(v => {
        this.totalCount += 1;
        this.silenceForm.reset();
        this.textAreaControl.reset();
        this.showPopup = false;
      });

    }
  }

  showPopupAction() {
    this.showPopup = true;
  }
}
