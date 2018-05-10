import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { ControlComponent } from './control/control.component';
import { ReceiverComponent } from './receiver/receiver.component';
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
    path: 'receiver',
    component: ReceiverComponent,
    data: { title: 'Receiver' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
