import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnswersComponent} from './components/answers/answers.component';
import {SilenceComponent} from './components/silence/silence.component';

const routes: Routes = [
  {
    path: 'silence',
    component: SilenceComponent
  },
  {
    path: 'answers',
    component: AnswersComponent
  },
  {
    path: '**',
    redirectTo: 'answers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
