import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { ControlComponent } from './control/control.component';
import { ReciverComponent } from './reciver/reciver.component';
const routes: Routes = [
  {
    path: '',
    component: SenderComponent,
    data: { title: 'Sender' }
  },
  {
    path: 'administrator',
    component: ControlComponent,
    data: { title: 'Adminitrator' }
  },
  {
    path: 'reciver',
    component: ReciverComponent,
    data: { title: 'Reciver' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
