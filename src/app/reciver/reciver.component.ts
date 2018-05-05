import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control/shared/control.service';

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.scss']
})
export class ReciverComponent implements OnInit {
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
