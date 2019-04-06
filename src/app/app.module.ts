import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./service/route/app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./views/header/header.component";
import { HomeComponent } from "./views/home/home.component";
import { BrowseComponent } from "./views/browse/browse.component";
import { MeComponent } from "./views/me/me.component";
import { RegisterComponent } from "./views/register/register.component";
import { LoginComponent } from "./views/login/login.component";
import { NotificationComponent } from "./views/notification/notification.component";

import { RouteGuard } from "./service/route/route-guard";
import { NotificationService } from "./service/notification/notification.service";
import { FireBaseService } from "./service/firebase/firebase.service";
import { UserService } from "./service/user/user.service";
import { PostComponent } from "./views/post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BrowseComponent,
    MeComponent,
    RegisterComponent,
    LoginComponent,
    NotificationComponent,
    PostComponent
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RouteGuard, NotificationService, FireBaseService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
