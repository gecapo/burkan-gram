import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

import * as firebase from "firebase";
import "firebase/auth";

@Injectable()
export class RouteGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      this.router.navigate(["/signin"], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
