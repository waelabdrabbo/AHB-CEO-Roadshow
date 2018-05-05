import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class ControlService {
  messages: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getMessages() {
    this.messages = this.firebasedb.list('messages');
    return this.messages;
  }

  addMessage(name: string, email: string, phone: string, message: string) {
    this.messages.push({
      name: name,
      email: email,
      phone: phone,
      message: message,
      published: false,
    });
  }

  publishMessage($key: string, flag: boolean) {
    this.messages.update($key, { published: flag });
  }

  removeMessage($key: string) {
    this.messages.remove($key);
  }

}
