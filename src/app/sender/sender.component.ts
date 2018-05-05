import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control/shared/control.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {
  form: FormGroup;
  messagesArray: any[];
  constructor(private controlService: ControlService,
    // private formBuilder: FormBuilder
  ) { }
  ngOnInit() {

    // this.form = this.formBuilder.group({
    //   email: [null, [Validators.required, Validators.email]],
    //   password: [null, Validators.required],
    // });

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
    // name.value = '';
    // message.value = '';
    // phone.value = '';
    // email.value = '';
  }
}
