import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Router } from "@angular/router";
import * as firebase from "firebase";

import { NotificationService } from "src/app/service/notification/notification.service";
import { FireBaseService } from "src/app/service/firebase/firebase.service";
import { UserService } from "src/app/service/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private notifier: NotificationService,
    private fbs: FireBaseService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  doLogin(form: NgForm) {
    const data = form.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(response => {
        if (response.user.emailVerified) {
          return this.fbs.getUserData(response.user.uid);
        } else {
          this.notifier.display(
            new Date(),
            "Error",
            "User email is not verified!"
          );
          firebase.auth().signOut();
        }
      })
      .then(userdata => {
        if (userdata) {
          this.userService.set(userdata);
          this.router.navigate(["/"]);
        }
      })
      .catch(err => {
        this.notifier.display(new Date(), "Error", err);
      });
  }
}
