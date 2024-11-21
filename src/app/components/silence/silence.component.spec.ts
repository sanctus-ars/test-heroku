import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilenceComponent } from './silence.component';

describe('AnswerComponent', () => {
  let component: SilenceComponent;
  let fixture: ComponentFixture<SilenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SilenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
