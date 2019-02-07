export class UserService {
  constructor() {}

  set(userdata) {
    localStorage.setItem("user", JSON.stringify(userdata));
  }

  get() {
    return JSON.parse(localStorage.getItem("user"));
  }

  dispose() {
    localStorage.removeItem("user");
  }
}
