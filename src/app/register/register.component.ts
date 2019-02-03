import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import * as firebase from "firebase";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}

  doSignUp(form: NgForm) {
    const data = form.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(response => {
        response.user.sendEmailVerification();
        firebase
          .database()
          .ref("users/" + response.user.uid)
          .set({
            username: data.username,
            email: data.email,
            uid: response.user.uid
          })
          .then(() => {
            firebase.auth().signOut();
          })
          .then(() => {
            this.router.navigate(["/signin"]);
          });
      })
      .catch(err => {
        console.log("[ERROR]:");
        console.log(err);
      });
  }

  ngOnInit() {}
}
