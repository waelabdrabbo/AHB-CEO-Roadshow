import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control/shared/control.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
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
}
