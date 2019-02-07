import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { UserService } from "src/app/service/user/user.service";
import { Router } from "@angular/router";
import { FireBaseService } from "src/app/service/firebase/firebase.service";
import { NotificationService } from "src/app/service/notification/notification.service";

@Component({
  selector: "app-me",
  templateUrl: "./me.component.html",
  styleUrls: ["./me.component.css"]
})
export class MeComponent implements OnInit {
  username: String;
  email: String;

  constructor(
    private userService: UserService,
    private router: Router,
    private fbs: FireBaseService,
    private notifier: NotificationService
  ) {}

  ngOnInit() {
    const userdata = this.userService.get();
    this.username = userdata.username;
    this.email = userdata.email;
  }

  onFileSelection(eventfiles) {
    const files: FileList = eventfiles.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      this.fbs
        .uploadFile(file)
        .then(data => {
          this.notifier.display(
            new Date(),
            "success",
            "File uploaded successfuly"
          );
          this.fbs.handleUploadedFile(data);
        })
        .catch(err => {
          this.notifier.display(new Date(), "error", err);
        });
    }
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.userService.dispose();
        this.router.navigate(["/signin"]);
      })
      .catch();
  }
}
