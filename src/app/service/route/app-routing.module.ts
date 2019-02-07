import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RouteGuard } from "./route-guard";

import { HomeComponent } from "./../../views/home/home.component";
import { MeComponent } from "./../../views/me/me.component";
import { BrowseComponent } from "./../../views/browse/browse.component";
import { RegisterComponent } from "./../../views/register/register.component";
import { LoginComponent } from "./../../views/login/login.component";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [RouteGuard] },
  { path: "me", component: MeComponent, canActivate: [RouteGuard] },
  { path: "browse", component: BrowseComponent, canActivate: [RouteGuard] },
  { path: "signup", component: RegisterComponent },
  { path: "signin", component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
