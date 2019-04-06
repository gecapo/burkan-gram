import { Component, OnInit, OnDestroy } from '@angular/core';
import { FireBaseService } from 'src/app/service/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  allPosts: any;
  allPostsList: any = [];

  constructor(private fbs: FireBaseService) { }

  ngOnInit() {
    this.allPosts = this.fbs.getAllPosts();
    this.allPosts.on("child_added", data => {
      this.allPostsList.push({ data: data.val() });
      this.allPostsList.sort((a, b) => {
        return new Date(b.data._dateCreated).getTime() - new Date(a.data._dateCreated).getTime();
      });
    });
  }

  ngOnDestroy(): void {
    this.allPosts.off();
  }
  // on

}
