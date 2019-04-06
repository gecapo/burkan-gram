import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData: any = {};
  public username: String;
  public description: String;
  public likes: number;
  public postSrc: string;

  constructor() { }

  ngOnInit() {
    this.username = this.postData.user.username;
    // this.description = this.postData.description;
    this.description = "Imalo edno vreme dve babi";
    this.likes = this.postData.likes;
    this.postSrc = this.postData.fileUrl;
  }

}
