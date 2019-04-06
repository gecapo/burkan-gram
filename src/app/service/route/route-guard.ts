import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import * as firebase from "firebase";

@Injectable()
export class RouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      // TODO : Sometimes when logged in firebase.auth().currentUser returns false
      debugger;
      this.router.navigate(["/signin"], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
