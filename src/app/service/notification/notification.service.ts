import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class NotificationService {
  private subject = new Subject<any>();

  public emmitter = this.subject.asObservable();

  display(time, type, message) {
    this.subject.next({ time, type, message });
  }
}
