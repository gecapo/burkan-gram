import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import * as firebase from "firebase";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  doLogin(form: NgForm) {
    const data = form.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(response => {
        if (!response.user.emailVerified) {
          console.log("Verified");
        } else {
          console.log("Not Verified");
        }
      })
      .catch(err => {
        console.log("[ERROR]:");
        console.log(err);
      });
  }
}
