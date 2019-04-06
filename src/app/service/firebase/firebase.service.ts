import * as firebase from "firebase";
import { v4 as uuid } from "uuid";
import { UserService } from "../user/user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class FireBaseService {
  constructor(private userService: UserService) { }


  getUserPosts(uid: string): any {
    return firebase.database().ref("myposts").child(uid);
  }

  getAllPosts(): any {
    return firebase.database().ref("allposts");
  }

  uploadFile(file) {
    const fileName = uuid();
    const uploadPath = firebase
      .storage()
      .ref()
      .child("image/" + fileName);

    const uploadTask = uploadPath.put(file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        snap => {
          // Uploading %
          // Set Loading
        },
        err => {
          // Error Handling
          reject(err);
        },
        () => {
          // Success
          uploadPath.getDownloadURL().then(fileDownloadUrl => {
            resolve({ fileName: fileName, fileUrl: fileDownloadUrl });
          });
        }
      );
    });
  }

  handleUploadedFile(data) {
    const user = this.userService.get();
    const imgPrivateKey = firebase
      .database()
      .ref()
      .child("myposts/")
      .push().key;
    const imgPrivatePath = "/myposts/" + user.uid + "/" + imgPrivateKey;

    const imgPublicKey = firebase
      .database()
      .ref()
      .child("allposts/")
      .push().key;
    const imgPublicPath = "/allposts/" + imgPublicKey;

    const imgData = {
      fileUrl: data.fileUrl,
      name: data.fileName,

      user: user,
      likes: 0,
      description: "",

      _dateCreated: new Date().toString()
    };

    const updates = {};
    updates[imgPrivatePath] = imgData;
    updates[imgPublicPath] = imgData;

    return firebase
      .database()
      .ref()
      .update(updates);
  }

  getUserData(uid) {
    return firebase
      .database()
      .ref("users/" + uid)
      .once("value")
      .then(snapshot => snapshot.val());
  }
}
