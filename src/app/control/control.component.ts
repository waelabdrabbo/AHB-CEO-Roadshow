import { Component, OnInit } from '@angular/core';
import { ControlService } from './shared/control.service';
import { element } from 'protractor';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  messagesArray: any[];
  constructor(private controlService: ControlService) { }

  ngOnInit() {
    this.controlService.getMessages().snapshotChanges()
      .subscribe(item => {
        this.messagesArray = [];
        // tslint:disable-next-line:no-shadowed-variable
        item.forEach(element => {
          // tslint:disable-next-line:prefer-const
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.messagesArray.push(x);
        });

        // sort array isChecked false  -> true
        this.messagesArray.sort((a, b) => {
          return a.published - b.published;
        });
      });
  }
  onAdd(name, message, phone, email) {
    this.controlService.addMessage(name.value, message.value, phone.value, email.value);
    name.value = '';
    message.value = '';
    phone.value = '';
    email.value = '';
  }
  alterCheck($key: string, published) {
    this.controlService.publishMessage($key, !published);
  }
  onDelete($key: string) {
    this.controlService.removeMessage($key);
  }
}
