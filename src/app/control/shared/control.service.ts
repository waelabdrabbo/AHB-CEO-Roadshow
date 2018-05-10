import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class ControlService {
  messages: AngularFireList<any>;
  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' }
  ];
  slideConfig = { 'slidesToShow': 4, 'slidesToScroll': 4 };

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
