import { Component, OnInit } from '@angular/core';
import { Command, NotificationsService } from "../notifications.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  messages: Observable<Command[]>

  constructor(private notificationsService: NotificationsService) {
    this.messages = this.notificationsService.messagesOutput;

    // setInterval(() => {
    //   this.notificationsService.addError('IT IS erorrlly Working!!!');
    // }, 500);
  }

  ngOnInit() {
  }

}
