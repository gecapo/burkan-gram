import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/service/notification/notification.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  type: String = null;
  message: String = "";
  timeRecieved: Date;

  constructor(notifier: NotificationService) {
    notifier.emmitter.subscribe(event => {
      this.type = event.type;
      this.message = event.message;
      this.timeRecieved = event.time;
    });
  }

  getDisplayTime() {
    if (this.timeRecieved) {
      return new Date().getMinutes() - this.timeRecieved.getMinutes();
    } else {
      return "";
    }
  }

  ngOnInit() {}
}
