import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./route/app-routing.module";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { BrowseComponent } from "./browse/browse.component";
import { MeComponent } from "./me/me.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

import { RouteGuard } from "./route/route-guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BrowseComponent,
    MeComponent,
    RegisterComponent,
    LoginComponent
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
